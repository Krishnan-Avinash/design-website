const createQuery = (args) => {
  return fetch("http://localhost:8088/query/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
};

const container2 = document.querySelector(".container2");
const container = document.querySelector(".container");
const container3 = document.querySelector(".container3");
const crossOptionn = document.querySelector(".crossOption");
const mailId = document.querySelector(".mailId");
const queryBox = document.querySelector(".queryBox");
function popUp() {
  container2.style.display = "flex";
  container.style.opacity = "0.1";
  container2.style.opacity = "1";
}

function cross() {
  container2.style.display = "none";
  container.style.opacity = "1";
  container2.style.opacity = "1";
}

function submissionConfirmation() {
  const responses = createQuery({
    mailAddress: mailId.value,
    queryToAsk: queryBox.value,
  });

  if (queryBox.value == "") {
    window.alert("Kindly enter some query");
    return;
  } else {
    container3.style.display = "flex";
    container2.style.opacity = "0.15";
    container.style.opacity = "0.1";
  }
  setTimeout(() => {
    container3.style.display = "none";
    container2.style.display = "none";
    container.style.display = "block";
    container.style.opacity = "1";
  }, 4000);
  (function () {
    emailjs.init("pxWtMsZz3fDp-EbC7"); //public key
  })();
  var params = {
    sendername: document.querySelector("#sendername").value,
    to: document.querySelector("#to").value,
    // subject: document.querySelector("#subject").value,
    // replyto: document.querySelector("#replyto").value,
    message: document.querySelector("#message").value,
  };

  var serviceId = "service_x1j9p7o";
  var templateId = "template_h759jik";
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      alert("email sent successfully");
    })
    .catch();
}

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
const sendername = document.querySelector("#sendername");
// const to = document.querySelector("#to");
function popUp() {
  container2.style.display = "flex";
  container.style.filter = "blur(50px)";
  container2.style.filter = "blur(0px)";
}

function cross() {
  container2.style.display = "none";
  container.style.filter = "blur(0px)";
  container2.style.filter = "blur(0px)";
}

function submissionConfirmation() {
  const responses = createQuery({
    mailAddress: mailId.value,
    queryToAsk: queryBox.value,
  });

  if (queryBox.value == "" || sendername.value == "" || mailId.value == "") {
    window.alert("Kindly enter all the required data");
    return;
  } else {
    container3.style.display = "flex";
    container2.style.filter = "blur(50px)";
    container.style.filter = "blur(50px)";
  }
  setTimeout(() => {
    container3.style.display = "none";
    container2.style.display = "none";
    container.style.display = "block";
    container.style.filter = "blur(0px)";
  }, 4000);
  (function () {
    emailjs.init("pxWtMsZz3fDp-EbC7"); //public key
  })();
  var params = {
    sendername: document.querySelector("#sendername").value,
    to: document.querySelector("#to").value,
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

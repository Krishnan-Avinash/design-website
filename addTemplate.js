const addTemplate = (args) => {
  return fetch("http://localhost:8088/template/addTemplate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
};
// const responses = await addTemplate({
//   task: TodoInputText,
//   status: false,
// });
// function templateUpdation() {
//   const addTemplate = (args) => {
//     return fetch("http://localhost:8088/template/addTemplate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(args),
//     });
//   };
// }

const sendername2 = document.querySelector("#sendername2");
const mailId2 = document.querySelector(".mailId2");
const number2 = document.querySelector("#phonenumber2");
const webLink2 = document.querySelector("#web-link");
const desc2 = document.querySelector(".description");
// const addTemplate = document.querySelector(".add-template");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");
const chatbox = document.querySelector(".chatbox");
function popUp2() {
  container4.style.display = "flex";
  container.style.filter = "blur(50px)";
  container4.style.filter = "blur(0px)";
  //   chatbox.style.display = "none";
}

function cross2() {
  container4.style.display = "none";
  container.style.filter = "blur(0px)";
  container.style.filter = "blur(0px)";
  container4.style.filter = "blur(0px)";
}

function templateUpdation() {
  const template = addTemplate({
    templateOwner: sendername2.value,
    templateOwnerEmailAddress: mailId2.value,
    templateOwnerPhoneNumber: number2.value,
    templateLink: webLink2.value,
    templateDescription: desc2.value,
  });

  // if (queryBox.value == "") {
  //   window.alert("Kindly enter some query");
  //   return;
  // } else {
  container5.style.display = "flex";
  container4.style.filter = "blur(50px)";
  container.style.filter = "blur(10000px)";
  // }
  setTimeout(() => {
    container5.style.display = "none";
    container4.style.display = "none";
    container.style.display = "block";
    container.style.filter = "blur(0px)";
    // chatbox.style.display = "flex";
    // container.style.filter = "blur(0px";
  }, 4000);
  // (function () {
  //   emailjs.init("pxWtMsZz3fDp-EbC7"); //public key
  // })();
  // var params = {
  //   sendername: document.querySelector("#sendername").value,
  //   to: document.querySelector("#to").value,
  //   message: document.querySelector("#message").value,
  // };

  // var serviceId = "service_x1j9p7o";
  // var templateId = "template_h759jik";
  // emailjs
  //   .send(serviceId, templateId, params)
  //   .then((res) => {
  //     alert("email sent successfully");
  //   })
  //   .catch();
}

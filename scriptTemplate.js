function fetchData() {
  fetch("http://localhost:8088/template/")
    .then((response) => response.json())
    .then((data) => {
      console.log("Data ", data);
      console.log(data);
      const dataList = document.querySelector(".dataList");
      data.templates.forEach((template) => {
        const templates = document.createElement("div");
        templates.classList.add("templates");
        const h3 = document.createElement("h3");
        const a = document.createElement("a");
        a.href = template.templateLink;
        a.target = "_blank";
        a.textContent = template.templateLink;
        h3.textContent = template.templateDescription;
        const h5 = document.createElement("h5");
        h5.textContent = `Template posted by:  ${template.templateOwner}`;
        templates.appendChild(h3);
        templates.appendChild(a);
        templates.appendChild(h5);
        dataList.appendChild(templates);
      });
    });
}

window.addEventListener("load", fetchData);

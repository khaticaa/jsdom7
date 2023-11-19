const yourname = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const age = document.querySelector("#age");
const btn = document.querySelector("#btn");
const tableBody = document.querySelector("#tableBody");

btn.addEventListener("click", () => {
  tableBody.innerHTML += `
    <tr>
    <td>${yourname.value}</td>
    <td>${lastName.value}</td>
    <td>${age.value}</td>
    </tr>`;

  yourname.value = "";
  lastName.value = "";
  age.value = "";
});
 
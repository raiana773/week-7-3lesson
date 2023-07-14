const API = "https://jsonplaceholder.typicode.com/users";
const list = document.getElementById("list");
// console.log(list);
async function getUsers() {
  let res = await fetch(API)
    .then(res => res.json())
    .catch(err => console.log(err));
  console.log(res);
  res.forEach((user, index) => {
    let newElem = document.createElement("div");
    newElem.innerHTML = `
    <div>${index + 1}</div>
    <div>${user.name}</div>
    <div>${user.email}</div>
    <div>${user.phone}</div>`;
    newElem.style.border = "2px solid green";
    newElem.style.margin = "20px";
    list.append(newElem);
  });
}
getUsers();

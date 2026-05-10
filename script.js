function changeText() {
  document.getElementById("text").innerText =
    "You just used JavaScript 😎";
}

let user = {
  name: "Tommy",
  age: 18
};

function checkUser() {
  if (user.age >= 18) {
    document.getElementById("output").innerText =
      user.name + " is eligible ✅";
  } else {
    document.getElementById("output").innerText =
      user.name + " is not eligible ❌";
  }
}

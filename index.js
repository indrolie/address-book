"use strict";

console.log("JAVASCRIPT");

const buttonAdd = document.getElementById("button-add");

const checkName = () => {
  const textboxName = document.getElementById("name").value;

  if (textboxName == "") {
    const errorMessage = "Please enter the name";
    document.getElementById("error-name").innerHTML = errorMessage;
  }
};

const checkEmail = () => {
  try {
    event.preventDefault();
    let email = document.getElementById("email").value;

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let check = pattern.test(email);

    if (check === false) {
      alert("Please enter a correct email address!");
    }
  } catch (error) {
    document.write(
      "Sorry for the inconvenience, but we're having a problem. Please try again later."
    );
  }
};

let contact = [];

const addContact = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phone-number").value;
  let newContact = [name, email, phoneNumber];

  contact.push(newContact);
  addStorage(contact);
};

const addStorage = newData => {
  localStorage.setItem("Contact_List", JSON.stringify(newData));
};

const getContact = () => {
  let getData = localStorage.getItem("Contact_List");
  let contact = JSON.parse("getData");

  document.getElementById("show-name").innerHTML = "Name: " + contact[0];
  document.getElementById("show-email").innerHTML = "Email: " + contact[1];
  document.getElementById("show-phone-number").innerHTML =
    "Phone Number: " + contact[2];
};

const runAll = () => {
  checkName();
  checkEmail();
  addContact();
};

buttonAdd.addEventListener("click", runAll);

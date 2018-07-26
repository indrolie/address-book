"use strict";

const buttonAdd = document.getElementById("button-add");

const check = () => {
  event.preventDefault();
  const name = document.getElementById("name").value;

  let email = document.getElementById("email").value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let checkEmail = pattern.test(email);

  if (checkEmail === false) {
    alert("Please enter a correct email address!");
  } else if (name == "") {
    const errorMessage = "Please enter the name";
    document.getElementById("error-name").innerHTML = errorMessage;
  } else {
    addContact();
    getContact();
  }
};

let contact = [];

const addContact = () => {
  let newContact = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phone-number").value
  };

  contact.push(newContact);
  addStorage(contact);
};

const addStorage = newData => {
  localStorage.setItem("Contact_List", JSON.stringify(newData));
};

const getContact = () => {
  let getData = localStorage.getItem("Contact_List");
  let contact = JSON.parse(getData);

  const storageLength = contact.length;

  let i = 0;
  for (i; i < storageLength; i++) {
    document.getElementById("show-name").innerHTML = "Name: " + contact[i].name;
    document.getElementById("show-email").innerHTML =
      "Email: " + contact[i].email;
    document.getElementById("show-phone-number").innerHTML =
      "Phone Number: " + contact[i].phoneNumber;
  }
};

buttonAdd.addEventListener("click", check);

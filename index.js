"use strict";

let contactList = [];

const buttonAdd = document.getElementById("button-add");
const list = document.getElementById("list");

const check = () => {
  checkName();
  checkEmail();

  if (checkName() !== "" && checkEmail() === true) {
    addContact();
    getContact();
  }
};

const checkName = () => {
  const name = document.getElementById("name").value;

  if (name == "") {
    const errorMessage = "Please enter the name";
    document.getElementById("error-name").innerHTML = errorMessage;
  }

  return name;
};

const checkEmail = () => {
  const email = document.getElementById("email").value;
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = pattern.test(email);

  if (check === false) {
    const errorMessage = "Please enter a valid email address";
    document.getElementById("error-email").innerHTML = errorMessage;
  }

  return check;
};

const clearAll = () => {
  const nameErrorMessage = "";
  const emailErrorMessage = "";
  const textboxName = "";
  const textboxEmail = "";
  const textboxPhoneNumber = "";

  document.getElementById("error-name").innerHTML = nameErrorMessage;
  document.getElementById("error-email").innerHTML = emailErrorMessage;
  document.getElementById("name").value = textboxName;
  document.getElementById("email").value = textboxEmail;
  document.getElementById("phone-number").value = textboxPhoneNumber;
};

const addLocalStorage = (name, array) => {
  localStorage.setItem(name, JSON.stringify(array));
};

const addContact = () => {
  let newContact = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phoneNumber: document.getElementById("phone-number").value
  };

  contactList.push(newContact);
  addLocalStorage("contact-list", contactList);
  clearAll();
};

const getLocalStorage = name => {
  const getData = localStorage.getItem(name);
  const contacts = JSON.parse(getData);
  return contacts;
};

const getContact = () => {
  const contacts = getLocalStorage("contact-list");
  list.innerHTML = "";

  contacts.map((contact, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div data-id="contact-${index}" class="contact">
        <p>${contact.name}, ${contact.email}, ${contact.phoneNumber}</p>
      </div>
    `.trim();

    list.append(div.firstChild);
  });
};

buttonAdd.addEventListener("click", check);

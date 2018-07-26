"use strict";

let contact = [];

const buttonAdd = document.getElementById("button-add");
const list = document.getElementById("list");

const check = () => {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const checkEmail = pattern.test(email);

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
	const getData = localStorage.getItem("Contact_List");
	const contacts = JSON.parse(getData);

	const storageLength = contact.length;

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

getContact();

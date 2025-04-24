let navMenu = document.querySelector(".nav__menu");
let hamburger = document.querySelector(".hamburger");
let socials = document.querySelector(".socials");

hamburger.addEventListener("click", () => {
	navMenu.classList.toggle("katt");
	hamburger.classList.toggle("katt");
	socials.classList.toggle("katt");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("katt")
  socials.classList.remove("katt")
  hamburger.classList.remove("katt");


})

document.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");
	const navMenu = navbar.querySelector(".nav__menu");
	const scrollY = window.scrollY;

	if (window.innerWidth > 1024) {
		const textShadow =
			"0 0 5px rgba(247, 125, 49, 0.9), 0 0 20px rgba(247, 156, 71, 1), 0 0 40px rgba(247, 125, 49, 0.9), 0 0 30px rgba(247, 156, 71, 0.9)";

		if (scrollY > 50) {
			navMenu.style.textShadow = textShadow;
		} else {
			navMenu.style.textShadow = "none";
		}
	}
});

document.addEventListener("DOMContentLoaded", function () {
	// Get all service buttons
	const serviceButtons = document.querySelectorAll(".service__card--button");

	// Get the select element from the contact form
	const serviceSelect = document.getElementById("services_select");

	// Add click event listener to each service button
	serviceButtons.forEach((button) => {
		button.addEventListener("click", function () {
			// Get the service type from the data attribute
			const serviceType = button.getAttribute("data-service");

			// Update the select value
			serviceSelect.value = serviceType;
		});
	});
});

function SendMail() {
	let parms = {
		from_name: document.getElementById("KNev").value,
		last_name: document.getElementById("VNev").value,
		packages: document.getElementById("services_select").value,
		email: document.getElementById("email").value,
		message: document.getElementById("uzenet").value,
	};
	emailjs
		.send("service_unlwq9v", "template_o7hquki", parms)
		.then(function (res) {
			alert("Success" + res.status);
		});
}

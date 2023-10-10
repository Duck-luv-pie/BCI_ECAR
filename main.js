// Loading
window.onload = () => {
	document.getElementById("loading").style.display = "none";
};

// Automatic Slideshow

let currentSlide = 0;
let transitionTimeout;
const transitionDuration = 3000;

const slides = document.querySelector(".slide-container");
const buttons = document.querySelectorAll(".slideshow-button");
const img = document.querySelector(".slide img");

// Switch slides - remove current timer and create new one
function showSlide(index) {
	clearTimeout(transitionTimeout);
	slides.style.transform = `translateX(-${index * img.clientWidth}px)`;
	buttons[currentSlide].classList.remove("active");
	currentSlide = index;
	buttons[currentSlide].classList.add("active");
	transitionTimeout = setTimeout(autoSwitchSlides, transitionDuration);
}

// Handle button clicks
buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		showSlide(index);
	});
});

// Automatically switch slides
function autoSwitchSlides() {
	let nextSlide = (currentSlide + 1) % buttons.length;
	showSlide(nextSlide);
}

// Begin automatic slideshow
autoSwitchSlides();

// Parallax Scrolling

const car = document.getElementById("car");
const landing = document.getElementById("landing");
const first = document.getElementById("about");

const canvas = document.getElementById("particles");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 4;

const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#170f11";

ctx.lineWidth = 1;

window.addEventListener("scroll", function () {
	landing.style.opacity = 1 - (window.scrollY / 1000) * 1.5;

	if (window.scrollY > 500) {
		const zigzagX = -Math.sin((window.scrollY - 400) / 300) * 100;

		const derivative = (Math.cos((window.scrollY - 400) / 300) * 100) / 400;
		const rotationAngle = Math.atan(derivative) * (180 / Math.PI);
		// ctx.lineTo(window.innerWidth / 2 + zigzagX, scrollY - window.innerHeight / 2);
		// ctx.stroke();
		car.style.transform = `translate(${zigzagX}px, ${window.scrollY - window.innerHeight / 2}px) rotate(${rotationAngle}deg)`;
	} else {
		car.style.transform = `translate(0px, 0px) rotate(0deg)`; // Point the car right by default
	}
});

ctx.lineWidth = 100;

ctx.strokeStyle = "#170f11";
ctx.fillStyle = "black";

ctx.moveTo(window.innerWidth / 2, 0);

for (let i = 500; i <= 4500; i += 10) {
	const zigzagX = -Math.sin((i - 400) / 300) * 100;

	ctx.lineTo(window.innerWidth / 2 + zigzagX, i - window.innerHeight / 2);
	ctx.stroke();

	console.log("done");
}

ctx.strokeStyle = "white";
ctx.lineWidth = 1;

ctx.moveTo(window.innerWidth / 2 + 40, 0);

for (let i = 500; i <= 5000; i += 10) {
	const zigzagX = -Math.sin((i - 400) / 300) * 100;

	ctx.lineTo(window.innerWidth / 2 + zigzagX + 40, i - window.innerHeight / 2);
	ctx.stroke();

	console.log("done");
}

ctx.moveTo(window.innerWidth / 2 - 40, 0);

const exits = document.querySelectorAll(".exit");

for (let i = 500; i <= 5000; i += 10) {
	const zigzagX = -Math.sin((i - 400) / 300) * 100;

	ctx.lineTo(window.innerWidth / 2 - 40 + zigzagX, i - window.innerHeight / 2);
	ctx.stroke();

	console.log("done");
}

particlesJS("particlesTree", {
	particles: {
		number: {
			value: 100, // Number of particles
			density: {
				enable: true,
				value_area: 800, // Adjust this to control the density of particles
			},
		},
		color: {
			value: "#000", // Color of the particles
		},
		shape: {
			type: "image", // Use images as particles
			image: {
				src: "./assets/tree1.png", // Select a random image URL
				width: 100, // Width of the image particle
				height: 100, // Height of the image particle
			},
		},
		opacity: {
			value: 1, // Opacity of the particles
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 0.1,
				sync: false,
			},
		},
		size: {
			value: 30, // Size of the particles
			random: true,
			anim: {
				enable: false,
				speed: 40,
				size_min: 0.1,
				sync: false,
			},
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: "#000",
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: false, // Disable particle movement
			speed: 6,
			direction: "none",
			random: false,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: {
				enable: false,
				mode: "grab",
			},
			onclick: {
				enable: false,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
});

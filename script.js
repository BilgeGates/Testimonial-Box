const container = document.querySelector(".container");
const headTestimonial = document.querySelector(".testimonial");
const image = document.querySelector(".image");
const username = document.querySelector(".username");
const work = document.querySelector(".work");

let testimonialIndex = 0;
let testimonials = [];

// ! JSON

fetch("./testimonials.json")
  .then((response) => response.json())
  .then((data) => {
    testimonials = data.testimonials;
    updateTestimonial();
    setInterval(updateTestimonial, 10000);
  })
  .catch((error) => {
    console.error("JSON", error);
  });

// ! UpdateTestimonial

const updateTestimonial = () => {
  const testimonial = testimonials[testimonialIndex];

  headTestimonial.textContent = testimonial.text;
  image.src = testimonial.photo;
  username.textContent = testimonial.name;
  work.textContent = testimonial.position;

  testimonialIndex++;
  if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
  }
};

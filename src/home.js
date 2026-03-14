import pizzaImage from "./assets/goopy_pizza.webp";

const home_content = document.createElement("div");


const home_title = document.createElement("h1");
home_title.textContent = "Welcome to Peppy's Pizza!";
const home_description = document.createElement("p");
home_description.textContent = "At Peppy's Pizza, we serve the best pizza in town! Our secret recipe and fresh ingredients make our pizzas irresistible. Come and taste the difference!";
home_content.appendChild(home_title);
home_content.appendChild(home_description);

const home_hours = document.createElement("div");
const pizza_image = document.createElement("img");
pizza_image.src = pizzaImage;
pizza_image.alt = "Delicious pizza";
home_content.appendChild(pizza_image);

const hours_title = document.createElement("h2");
hours_title.textContent = "Hours of Operation";
home_hours.appendChild(hours_title);
const hours_list = document.createElement("ul");
const hours = [
	"Monday: 11:00 AM - 9:00 PM",
	"Tuesday: 11:00 AM - 9:00 PM",
	"Wednesday: 11:00 AM - 9:00 PM",
	"Thursday: 11:00 AM - 9:00 PM",
	"Friday: 11:00 AM - 10:00 PM",
	"Saturday: 12:00 PM - 10:00 PM",
	"Sunday: 12:00 PM - 8:00 PM",
];

hours.forEach((dayHours) => {
	const listItem = document.createElement("li");
	listItem.textContent = dayHours;
	hours_list.appendChild(listItem);
});

home_hours.appendChild(hours_list);
home_content.appendChild(home_hours);

export default home_content;
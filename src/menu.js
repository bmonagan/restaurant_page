const menu_content = document.createElement("div");

const menu_title = document.createElement("h1");
menu_title.textContent = "Peppy's Pizza Menu";
menu_content.appendChild(menu_title);

const menu_intro = document.createElement("p");
menu_intro.textContent = "Hand-stretched dough, house sauce, and fresh toppings made daily.";
menu_content.appendChild(menu_intro);

const menu_list = document.createElement("ul");

const items = [
	"Margherita - Fresh mozzarella, basil, olive oil",
	"Pepperoni Classic - Pepperoni, mozzarella, house red sauce",
	"Veggie Garden - Mushrooms, peppers, onions, black olives",
	"BBQ Chicken - Grilled chicken, red onions, BBQ drizzle",
	"Meat Lovers - Pepperoni, sausage, bacon, ham",
	"Garlic Knots - Served with warm marinara",
];

items.forEach((itemText) => {
	const item = document.createElement("li");
	item.textContent = itemText;
	menu_list.appendChild(item);
});

menu_content.appendChild(menu_list);

export default menu_content;

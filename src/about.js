const about_content = document.createElement("div");

const about_title = document.createElement("h1");
about_title.textContent = "About Peppy's Pizza";
about_content.appendChild(about_title);

const about_text = document.createElement("p");
about_text.textContent =
	"Peppy's Pizza is a neighborhood spot focused on handmade dough, slow-simmered sauce, and warm service. We started with one brick oven and a simple goal: make pizza worth coming back for.";
about_content.appendChild(about_text);

const about_details = document.createElement("p");
about_details.textContent =
	"Family-owned and operated, we source fresh ingredients daily and prepare every pie to order. Dine in, take out, or call ahead for pickup.";
about_content.appendChild(about_details);

export default about_content;

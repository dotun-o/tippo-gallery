"use strict";

function Slide(dataSource)
{
	this.name = dataSource.name;
	this.image = dataSource.image;
	this.description = dataSource.description;
    this.container = "";
}

Slide.prototype.bindToHtml = function bindToHtml()
{
	var name, image, description;

	this.container = document.createElement("div")
	this.container.setAttribute("id", "slide-" + this.name.toLowerCase());

	name = document.createElement("h2");
	name.innerHTML = this.name;

	image = document.createElement("img");
	image.src = this.image;

	description = document.createElement("p");
	description.innerHTML = this.description;

	this.container.appendChild(name);
	this.container.appendChild(image);
	this.container.appendChild(description);
}
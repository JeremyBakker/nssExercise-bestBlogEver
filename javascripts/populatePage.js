"use strict";

let articleTemplate = require("../templates/article-grid.hbs");

function populatePage(data) {
	let newDiv = document.createElement("div");
	newDiv.innerHTML = articleTemplate(data);
	$("#articles").append(newDiv);
}

module.exports = {populatePage};
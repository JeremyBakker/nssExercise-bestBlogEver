"use strict";

function getData(){
	return new Promise((resolve, reject)=>{
		$.ajax({
			type: "GET",
			url: "../articleData.json"
		}).done(function(articleData){
		resolve(articleData);
		});
	});
}

module.exports = {getData};
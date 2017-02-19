"use strict";

/* 
hbs-blog is a single-page application that fulfills the requirements of an assignment 
at Nashville Software School. For full project parameters, see README.md.
*/

/*============================================*/
/*=================REQUIRES===================*/
/*============================================*/

let data = require("./data.js"),
	write = require("./populatePage.js");

/*============================================*/
/*==============FUNCTION CALLS================*/
/*============================================*/

data.getData().then((articleData)=>{write.populatePage(articleData);});
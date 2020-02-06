const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const firefox = require('selenium-webdriver/firefox');


const By = require("selenium-webdriver").By;



var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox())
    .build();

browser.get("http://localhost:5000/");


browser.getTitle().then(function( title ) {
    console.log(title);
});
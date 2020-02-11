/**
 * Test for getting started with Selenium.
 */
"use strict";

const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = require("selenium-webdriver").By;

var browser = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox())
    .build();

browser.get("http://localhost:3001");


browser.getTitle().then(function(title) {
    assert.equal(title, "React App");
});



browser.navigate().to("http://localhost:3001/reports/week/1").then(function( title ) {
    browser.findElement(By.linkText("Week2")).then(function(element){
       element.getText().then(function(text){
        assert.equal(text, "Week2");
        });
    })
});

browser.navigate().to("http://localhost:3001/chat").then(function() {
    browser.findElement(By.tagName("h4")).then(function(element){
       element.getText().then(function(text){
        assert.equal(text, "Chat");
        });
    })
});


browser.navigate().to("http://localhost:3001/chat").then(function() {
    browser.findElement(By.className("join-chat-btn")).then(function(element){
       element.getTagName().then(function(tag){
        assert.equal(tag, "input");
        });
    })
});



browser.quit();


import { browser, protractor } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
import { kenoPageObject } from "../pages/kemo_page";
import { Given } from "cucumber";
const { When, Then } = require("cucumber");

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const search: SearchPageObject = new SearchPageObject();


Given('I am on the {string} page', function (string) {
  browser.get("https://keno.com")

});

Given('I click the {string} button', function (string) {
  
});
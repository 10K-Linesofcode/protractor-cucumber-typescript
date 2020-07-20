import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
var chromiumbinary= require('chromium-binary')
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://www.google.com",

    // capabilities: {
    //     browserName: "chrome",
    // },



  capabilities:{
    browserName : 'chrome',
    
    chromeOptions: {
      binary:chromiumbinary.path,
      'args': ['disable-infobars']},
    //browserName : 'firefox',
    //marionette : true,
    acceptSslCerts : true
},
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@desktop",
    },
 
    onComplete: () => {
        Reporter.createHTMLReport();
    },
};

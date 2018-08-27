import Globals from '../support/Globals';
import { browser } from 'protractor';
import { Given, When, Then } from "cucumber";
import LoginPage from "../pages/LoginPage";

// Chai
const globals = new Globals();
const expect = globals.expect;

// LoginPage page instance
const login = new LoginPage();


Given(/^I open "(.*?)"$/, (url) => {
    browser.get(url);
    return expect(browser.getCurrentUrl()).toBe(url);
});

Given(/^I input login "(.*?)" and password "(.*?)"$/, (login, password) => {
    return login._fill(login, password);
});

Given(/^I click button with name "Login"$/, () => {
    return login.button._click();
});
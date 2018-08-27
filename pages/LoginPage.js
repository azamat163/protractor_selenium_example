import { Element } from '../support/Element';
import { element, by } from 'protractor';

class LoginPage {
    constructor(){
        this.username_input = Element(LoginLocators.username_input);
        this.password_input = Element(LoginLocators.password_input);
        this.button = Element(LoginLocators.button);
    }

    _fill(username: text, password: text) {
        this.username_input._clear();
        this.username_input._sendKeys(username);
        this.password_input._clear();
        this.password_input._sendKeys(password);
    }
}

class LoginLocators {
    username_input = element(by.name('_username'))
    password_input = element(by.name('_password'))
    button = element(by.css('.b-gui-v2-button.b-gui-v2-button_color_lime'))
}

export default LoginPage;
import { browser, element } from 'protractor';

const EC = browser.ExpectedConditions;

class Element {

    constructor(element: element){
        this.element = element
    }

    waitForPresent() {
        return browser.wait(EC.presenceOf(this.element));
    }
    waitForDisplay() {
        return browser.wait(this.element);
    }
    waitForElement() {
        this.waitForPresent(this.element);
        this.waitForDisplay(this.element);
    }
    _click() {
        this.waitForElement();
        this.element.click();
    }
    _sendKeys(text: string) {
        this.waitForElement();
        this.element.sendKeys(text);
    }
    _text() {
        this.waitForElement();
        this.element.getText();
    }
    _clear(){
        this.waitForElement()
        this.element.clear();
    }

}

export default Element;
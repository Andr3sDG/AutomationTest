
var Actions = function () {

    this.sendText = (element, text) => {
        element.sendKeys(text);
    }

    this.click = (element) => {
        element.click();
        browser.sleep(3000);
    }

}

module.exports = new Actions;
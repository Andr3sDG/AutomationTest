var WebElements = function(){
    this.id = (selector) => {
        return element(by.id(selector));
    }

    this.xPath = (selector) => {
        return element(by.xpath(selector));
    }
}

module.exports = new WebElements;
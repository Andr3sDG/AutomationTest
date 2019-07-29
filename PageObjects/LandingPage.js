var WebElements = require('../Base/WebElements.js');
var Actions = require('../Base/Actions.js');

var LandingPage = function () {

    var emailTextBox = WebElements.id('identifierId');
    var nextPageButton = WebElements.xPath('/html/body/div[1]/div[1]/div[2]/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/div[2]');

    this.userEntersEmail = (email) => {
        Actions.sendText(emailTextBox, email);
    }

    this.userClicksNextButton = () => {
        Actions.click(nextPageButton);
    }

} 

module.exports = new LandingPage;
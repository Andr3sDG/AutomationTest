var LandingPage = require('../PageObjects/LandingPage.js');

describe('User logs in to gmail', function(){

    it('User enters email and clicks next button', function(){
        browser.ignoreSynchronization = true;
        LandingPage.userEntersEmail('andres313dg@gmail.com');
        LandingPage.userClicksNextButton();
        expect(browser.getCurrentUrl()).toBe('https://accounts.google.com/signin/v2/sl/pwd?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&cid=1&navigationDirection=forward');
    })
})
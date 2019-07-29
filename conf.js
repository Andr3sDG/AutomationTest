exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./Test/pruebas.js'],

    capabilities: {
        browserName: 'chrome',
    },

    framework: 'jasmine2',
    
    onPrepare: function() {
        global.dvr = browser.driver;

        dvr.get('https://www.gmail.com');
        dvr.manage().window().setSize(1080,770);
        dvr.manage().window().setPosition(1,1);
    }
}
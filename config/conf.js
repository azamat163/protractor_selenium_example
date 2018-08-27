const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    baseUrl: "http://vimbox.skyeng.ru",
    capabilities: {
        browserName: "chrome"
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["../features/*.feature"],
    // resultJsonOutputFile: "./reports/json/protractor_report.json",
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
     //   require('babel-register');
        Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        strict: true,
        format: 'json:./reports/json/cucumber_report.json',
        require: ["../tests/*.js", "../support/*.js"],
    },
    onComplete: function () {
        Reporter.createHTMLReport();
    }
};
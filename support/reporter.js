const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const reporter = require("cucumber-html-reporter");
const report = require("cucumber-html-report");
const htmlReports = process.cwd() + "/reports/html";
const targetJson = process.cwd() + "/reports/json/cucumber_report.json";

const cucumberReportOptions = {
    source: targetJson,
    dest: htmlReports,
    name: "cucumber_report.html",
    title: "Cucumber Report"
};
const cucumberReporteroptions = {
    theme: "bootstrap",
    jsonFile: targetJson,
    output: htmlReports + "/cucumber_reporter.html",
    reportSuiteAsScenarios: true
};

class Reporter {

    static createDirectory(dirName) {
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    }

    static createHTMLReport() {

        try {
            reporter.generate(cucumberReporteroptions);
            report
                .create(cucumberReportOptions)
                .then(function() {
                    console.log("cucumber_report.html created successfully!");
                })
                .catch(function(err) {
                    if (err) {
                        console.error(err);
                    }
                });
        } catch (err) {
            if (err) {
                console.log("Failed to save cucumber test results to json file.");
                console.log(err);
            }
        }
    }

    static createAllureXML() {
        const allureReporter = require("cucumberjs-allure-reporter");
        const xmlReports = process.cwd() + "/reports/xml";
        Reporter.createDirectory(xmlReports);
        allureReporter.config({
            targetDir: xmlReports
        })
    }
}
module.exports = Reporter;
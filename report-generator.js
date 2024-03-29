const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const projectName = path.basename(__dirname);
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = (new Date()).toISOString();
report.generate({
    reportName: 'TestCafe Demo Project',
	jsonDir: 'reports',
    reportPath: 'reports',
    openReportInBrowser: false,
    disableLog: true,
    displayDuration: true,
    durationInMS: false,
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: `${projectName}`},
            {label: 'Release', value: `${projectVersion}`},
            {label: 'Report Generation Time', value: `${reportGenerationTime}`},
            
        ]
    }
});

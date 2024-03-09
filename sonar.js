const scanner = requiere('sonarqube-scanner')

scanner(
    {
        serverUrl: 'http://sonare-qube-dbtech.eastus.cloudapp.azure.com',
        token: 'f34228f3fb61d05d879cfd632fcd94dc02e646',
        options: {
            'sonar.projectName': 'M220-mflix',
            'sonar.projectDescription': 'Mflix app in node.js',
            'sonar.sources': 'src',
            'sonar.test': 'test',
            'sonar.javascript.coveragePlugin': 'lcov',
            'sonar.javascript.lcov.reportPaths': 'output/coverage/jest/lcov.info'
        }
    },
    () => process.exit()
)
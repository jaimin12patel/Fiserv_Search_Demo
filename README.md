

## Steps - Cloning Repo and Installing packages for WebDriverJS Framework


Make sure you have VS Code Editor > You should have Git configured on your laptop

Clone the Git repository On your VS Code Terminal - https://github.com/jaimin12patel/Fiserv_Search_Demo.git

Make sure repo has been downloaded successfully and open the Project path on VS Code Terminal. 

Download JavaScript Dependency To perform Selenium Test - npm install 

Make sure node_module created / Updated with package-lock.json file. 

Now, i think we are ready for our test execution using this command 
SEARCH_ENV=google BROWSER=chrome npx mocha UITest/google-search-engine-test.js --reporter mochawesome

OR We Can run the test from package.json by right clicking on the script name. 

Once you run the test it should give to test report too in help of mocha awesome.
/Users/username/Documents/Automation/WebdriverJS-Selenium1/mochawesome-report/mochawesome.html





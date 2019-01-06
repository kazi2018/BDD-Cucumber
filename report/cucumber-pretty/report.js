$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/soin1/AutomationProjectPNT/eBayBDD/src/test/java/feature/Register.feature");
formatter.feature({
  "line": 3,
  "name": "Register Feature",
  "description": "",
  "id": "register-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "moga Register Feature test",
  "description": "",
  "id": "register-feature;moga-register-feature-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user in the register page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "put first name",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "put last last name",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "provide email address",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "given password",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click created account button",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterSteps.user_in_the_register_page()"
});
formatter.result({
  "duration": 10920024099,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_first_name()"
});
formatter.result({
  "duration": 532971849,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.put_last_last_name()"
});
formatter.result({
  "duration": 89896680,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.provide_email_address()"
});
formatter.result({
  "duration": 117281504,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.given_password()"
});
formatter.result({
  "duration": 136212668,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.click_created_account_button()"
});
formatter.result({
  "duration": 4495373748,
  "status": "passed"
});
});
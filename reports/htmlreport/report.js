$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/myprofile.feature");
formatter.feature({
  "name": "My Profile feature",
  "description": "  i want to access the options under myprofile",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify my profile page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigated_to_the_Login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefination.stepdefinationclass.user_navigated_to_the_Login_page(stepdefinationclass.java:23)\r\n\tat ✽.User navigated to the Login page(file:src/test/java/features/myprofile.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on My profile",
  "keyword": "And "
});
formatter.match({
  "location": "myprofilestepdefination.click_on_My_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.error_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/java/features/signin.feature");
formatter.feature({
  "name": "Signin feature",
  "description": "  I want to signin in my portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Facebook Login page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Error message displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc",
        "abcd1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Facebook Login page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigated_to_the_Login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefination.stepdefinationclass.user_navigated_to_the_Login_page(stepdefinationclass.java:23)\r\n\tat ✽.User navigated to the Login page(file:src/test/java/features/signin.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter Username \"abc\" and password \"abcd1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinationclass.enter_Username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.error_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Verify Facebook Login page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter Username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Error message displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "abc",
        "abcd1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Facebook Login page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigated_to_the_Login_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefination.stepdefinationclass.user_navigated_to_the_Login_page(stepdefinationclass.java:23)\r\n\tat ✽.User navigated to the Login page(file:src/test/java/features/signin.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter Username \"abc\" and password \"abcd1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationclass.enter_Username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.error_message_displayed()"
});
formatter.result({
  "status": "skipped"
});
});
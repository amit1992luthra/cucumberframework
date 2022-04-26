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
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User navigated to the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigated_to_the_Login_page()"
});
formatter.result({
  "status": "skipped"
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
formatter.after({
  "status": "skipped"
});
});
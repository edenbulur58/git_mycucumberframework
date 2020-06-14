$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Parameterizing.feature");
formatter.feature({
  "name": "login feature with parameters",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FHCloginParameters"
    },
    {
      "name": "@second"
    }
  ]
});
formatter.scenario({
  "name": "TC01_user should login with manager credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FHCloginParameters"
    },
    {
      "name": "@second"
    }
  ]
});
formatter.step({
  "name": "user is on the fhctriplogin page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.user_is_on_the_fhctriplogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid manager username \"manager2\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.user_enter_valid_manager_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid manager password \"Man1ager2!\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.user_enter_valid_manager_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the manager login is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.verify_the_manager_login_is_successful()"
});
formatter.result({
  "status": "passed"
});
});({
  "name": "TC01_google seach test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatable"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is on the google page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user searches for \"istanbul\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify the result has \"istanbul\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "TC01_google seach test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatable"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is on the google page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user searches for \"apple\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify the result has \"apple\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "TC01_google seach test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatable"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is on the google page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user searches for \"orange\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "verify the result has \"orange\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("file:src/test/resources/features/FHCLogin.feature");
formatter.feature({
  "name": "login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FHClogin"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "name": "TC01_User should login with manager credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FHClogin"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is on the fhctriplogin page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.user_is_on_the_fhctriplogin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid manager username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.user_enter_valid_manager_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid manager password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.user_enter_valid_manager_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the manager login is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.FHCLogin_Steps.verify_the_manager_login_is_successful()"
});
formatter.result({
  "status": "passed"
});
});e.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:405)\r\n\tat org.apache.maven.surefire.junitcore.pc.InvokerStrategy.schedule(InvokerStrategy.java:54)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler.schedule(Scheduler.java:362)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:405)\r\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:511)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify the Hello World! text is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ExpilicitWaitStepDefs.verify_the_Hello_World_text_is_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/Scenerio%20Outline%20Example%201.feature");
formatter.feature({
  "name": "scenario outline example",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@datatable4"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "testing the data tables web page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@datatable4"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user is on the datatables",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user clicks on new button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_clicks_on_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters firstname \"first name\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters lastname \"last name\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters position \"QA\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters office \"London\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters extension \"555\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters startdate \"2020-05-06\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters salary \"90000\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks create button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user enters firstname \"first name\" to the searchbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_firstname_to_the_searchbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that user see the first name \"first name\" in the searchbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.verify_that_user_see_the_first_name_in_the_searchbox(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});
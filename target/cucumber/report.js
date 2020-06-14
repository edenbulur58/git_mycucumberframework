$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Scenerio%20Outline%20Example2.feature");
formatter.feature({
  "name": "scenerio outline example",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@datatable5"
    }
  ]
});
formatter.scenarioOutline({
  "name": "testing the data tables web page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on new button",
  "keyword": "When "
});
formatter.step({
  "name": "User enters firstname \"\u003cfirst\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters lastname \"\u003clast\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters position \"\u003cposition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters office \"\u003coffice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters extension \"\u003cextension\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters startdate \"\u003cstartdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User enters salary \"\u003csalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "cliks create button",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters firstname \"\u003cfirst\u003e\" to the searchbox",
  "keyword": "And "
});
formatter.step({
  "name": "verify that user see the first name \"\u003cfirst\u003e\" in the searchbox",
  "keyword": "Then "
});
formatter.examples({
  "name": "test data for the datatables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "position",
        "office",
        "extension",
        "startdate",
        "salary"
      ]
    },
    {
      "cells": [
        "john",
        "walker",
        "teacher",
        "NJ",
        "331",
        "2020-05-08",
        "45000"
      ]
    },
    {
      "cells": [
        "ahmet",
        "kılıc",
        "QA",
        "Netherland",
        "65",
        "2020-04-08",
        "45000"
      ]
    },
    {
      "cells": [
        "selman",
        "can",
        "driver",
        "NewYork",
        "345",
        "2019-05-06",
        "25000"
      ]
    }
  ]
});
formatter.scenario({
  "name": "testing the data tables web page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatable5"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on new button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_clicks_on_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters firstname \"john\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters lastname \"walker\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters position \"teacher\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters office \"NJ\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters extension \"331\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_extension(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters startdate \"2020-05-08\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters salary \"45000\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cliks create button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.cliks_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname \"john\" to the searchbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_firstname_to_the_searchbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that user see the first name \"john\" in the searchbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.verify_that_user_see_the_first_name_in_the_searchbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "testing the data tables web page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatable5"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on new button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_clicks_on_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters firstname \"ahmet\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters lastname \"kılıc\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters position \"QA\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters office \"Netherland\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters extension \"65\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_extension(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters startdate \"2020-04-08\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters salary \"45000\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cliks create button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.cliks_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname \"ahmet\" to the searchbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_firstname_to_the_searchbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that user see the first name \"ahmet\" in the searchbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.verify_that_user_see_the_first_name_in_the_searchbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "testing the data tables web page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@datatable5"
    }
  ]
});
formatter.step({
  "name": "User is on the datatables homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_is_on_the_datatables_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on new button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_clicks_on_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters firstname \"selman\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_firstname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters lastname \"can\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_lastname(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters position \"driver\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_position(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters office \"NewYork\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_office(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters extension \"345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_extension(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters startdate \"2019-05-06\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_startdate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters salary \"25000\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_salary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cliks create button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.cliks_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname \"selman\" to the searchbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.user_enters_firstname_to_the_searchbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that user see the first name \"selman\" in the searchbox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ScenerioOutline_StepDefinition.verify_that_user_see_the_first_name_in_the_searchbox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});
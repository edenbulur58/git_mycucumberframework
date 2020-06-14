@datatable5
Feature: scenerio outline example
  Scenario Outline: testing the data tables web page
    Given User is on the datatables homepage
    When user clicks on new button
    And User enters firstname "<first>"
    And User enters lastname "<last>"
    And User enters position "<position>"
    And User enters office "<office>"
    And User enters extension "<extension>"
    And User enters startdate "<startdate>"
    And User enters salary "<salary>"
    Then cliks create button
    And user enters firstname "<first>" to the searchbox

    Then verify that user see the first name "<first>" in the searchbox

    Examples: test data for the datatables

    |first|last|position|office|extension|startdate|salary|
    |john |walker|teacher|NJ   |331      |2020-05-08|45000|
    |ahmet |kılıc|QA|Netherland |65     |2020-04-08|45000|
    |selman|can|driver|NewYork   |345      |2019-05-06|25000|
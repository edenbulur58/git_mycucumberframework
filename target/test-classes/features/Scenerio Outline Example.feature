@datatable3
Feature: scenerio outline example
  Scenario: testing the data tables web page
    Given User is on the datatables homepage
    When user clicks on new button
    And User enters firstname
    And User enters lastname
    And User enters position
    And User enters office
    And User enters extension
    And User enters startdate
    And User enters salary
    Then cliks create button
    And user enters firstname to the searchbox
    Then verify that user see the first name in the searchbox
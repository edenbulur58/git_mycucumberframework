@fhclogin
  Feature:login feature
    Scenario: TC01_user should be login with postive credentials
      Given user is on the fhctriplogin page
      And enter correct username and password
      Then verify the login is succesful

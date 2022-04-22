Feature: Signin feature
  I want to signin in my portal

  Scenario Outline: verify the login with valid and invalid credentials
    Given User navigated to the Login page
    And Enter Username "<username>" and password "<password>"

    Examples: 
      | username          | password       |
      | abc               | abcd1234       |
      | test              | test           |
      | valid credentials | valid password |
      | abc               | abcd1234       |
      | test              | test           |
      

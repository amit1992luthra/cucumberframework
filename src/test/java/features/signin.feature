Feature: Signin feature
  I want to signin in my portal

  Scenario Outline: Verify Facebook Login page 
    Given User navigated to the Login page
    And Enter Username "<username>" and password "<password>"
    Then Error message displayed

    Examples: 
      | username          | password       |
      | abc               | abcd1234       |
      
      
      Scenario Outline: Verify Facebook Login page 
    Given User navigated to the Login page
    When Enter Username "<username>" and password "<password>"
    Then Error message displayed

    Examples: 
      | username          | password       |
      | abc               | abcd1234       |
      

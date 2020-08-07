Feature: Create Job Request

  Scenario Outline: Create a ASAP request as a client

    When I login using "<username>","<password>"
    And I click request new button
    And I click asap booking button
    And I select language "<language>"
    And I select gender "<gender>"
    And I select duration "<hours>","<minutes>"
    And I enter nes name "<nes name>"
    And I enter nes external "<nes external>"
    And I enter note "<note>"
    And I click createrequest button

    Examples: 
    | username         | password  |  language  |  gender  |  hours  |  minutes  | nes name   |  nes external | note      |
    | sarah@vloop.com  | Test1     | ARABIC     |  Male    |  0      | 45        | Tester     |  ABC32        | test note |
    

    

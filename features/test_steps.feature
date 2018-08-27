Feature: Test feature

  Scenario: Test scenario

    Given I open "http://vimbox.skyeng.ru"
    And I input login "tuanteacher1@t.ru" and password "password"
    And I click button with name "Login"
    And I select the course General
    And I select the level Advanced
    And I open the lesson Talking about history
    When I click button Continue to Lesson
    And I click button Finish
    Then I'm locate on page with the list of lessons
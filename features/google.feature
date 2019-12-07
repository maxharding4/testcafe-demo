@google
Feature: Demo'ing testcafe-cucmber on the Google search page

Background: User has navigated to the Google search page
  Given I navigate to the "Google" homepage

Scenario: Google search page - Confirm the page elements
  Then the Google logo is present
  Then the Google search field is present
  Then the Google microphone is present
  Then the Google search button is present
  Then the Google I'm feeling lucky button is present

Scenario Outline: Google search page - Entering a search
  And the Google search field is present
  When I enter the text "<searchTerm>" into the search field
  And I select the search button
  Then the search field contains the text "<searchTerm>"
  Examples:
  | searchTerm |
  | testing |
  | brexit |

Scenario: Google search page - Failing scenario
  When I select the search button
  Then the search field contains the text "this scenario failed"
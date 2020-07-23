Feature: To search cucumber in google

 @desktop
Scenario: Cucumber Google Search
Given I am on "google" search page
When I type "cucumber"
When I click on search button
Then I clear the search text
When I wait "10" seconds
#When I navigate to the "https://www.google.co.in/" page
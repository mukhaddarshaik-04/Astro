Feature:Astro website URL validation

Scenario:User navigates to the webpage through URLs
    Given I open page with the url astro-first
    Then I can see the astro-first webpage with content
  
Scenario:User navigates through URL
    Given I open page with the url astro-best
    Then I can see the astro-best webpage with content

Scenario:User navigates through More button
    Given I open page with the url astro-best
    Then I click on More button till the last page


# TODO for Quiz System Implementation

1. Update index.html: Change welcome phrase to "نفيدكم علمًا..." and ensure it links to sections.html.

2. Modify sections.html: Display all 6 axes in order, with a single "ابدأ أول محور" button that starts the first axis (behavior).

3. Update quiz.html: Add randomization of questions for each axis using shuffle function.

4. Adjust language_choice.html: After completing one language, redirect back to language_choice.html, disable the completed language, if both done, redirect to break.html for next axis (knowledge).

5. Adjust computer_choice.html: Similar to language_choice.html, for technology axis.

6. Ensure break.html: Shows countdown 5 seconds, can skip, displays next axis name, redirects to next axis or language/tech choice or results.

7. Test the full flow: Welcome -> Sections -> Start first -> Quiz (randomized) -> Break -> Next axis -> ... -> Language choice -> Arabic quiz -> Back to choice (Arabic disabled) -> English quiz -> Break for knowledge -> ... -> End.

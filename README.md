# Codeless Automation  Chrome Console & Snippets

This repository contains a collection of JavaScript automation and testing snippets intended to be run in the Google Chrome Developer Tools (DevTools) Console or as DevTools Snippets. Many files were recorded or exported from browser-based test tools and are grouped by contributor.

## Purpose
- Quick automation helpers, UI test scripts, and small utilities that run directly inside the browser.
- Useful for experimenting, debugging, and small end-to-end checks without a full test runner.

## How to run (Chrome)
1. Open Chrome and navigate to the page you want to test.
2. Open DevTools: `Ctrl+Shift+I` (Windows) or `Cmd+Option+I` (macOS).
3. To run as a snippet:
   - Go to the **Sources** panel  **Snippets**.
   - Click **New snippet**, paste the script content from a `.js` file, then right-click the snippet and choose **Run**.
4. To run quickly in the console:
   - Open the **Console** panel, paste the code from a `.js` file, and press `Enter`.

Notes:
- Some scripts may expect to run on specific demo pages (e.g. demoqa, local test pages). Check the filename or comments for hints.
- `.side` files are Selenium IDE project files and are not directly runnable in DevTools; use Selenium IDE to import/export them.

## Repository structure (overview)

The repository is organized with a collection of root-level scripts plus contributor subfolders. Below are split sections for each contributor with a short file list (representative, not exhaustive).

## Silvia (detailed usage notes)

- `week 1/7 Char validator.js` — Paste into DevTools Console (or save as a Snippet) on a form page; validates 7-character input rules and logs pass/fail.
- `week 1/testscript_SNT.js` — Automates the Simple Note Taker demo: create, edit, and delete notes; run on the note-taker page.
- `week 2/testscript_triangle_app.js` — Runs triangle-type validation flows (scalene/isosceles/equilateral); open triangle demo and execute in Console.
- `week 2/Triangle.side` — Selenium IDE project for the triangle app (import into Selenium IDE to run recorded steps).
- `week 3/FromRecording.side` — Selenium IDE export of a recording; import to inspect or replay steps.
- `week 3/RandomNumber&Testcase generator2.js` — Generates random numbers and example test cases; run in Console to produce inputs for other scripts.
- `week 3/test simple calculator.js` — Automates calculator UI operations (add/subtract/etc.); run on the calculator demo.
- `week 3/YakoshyRandom Number.js` — Small random-number helper (useful when seeding tests); paste into Console.
- `week 3/yekoshySimpleCalc.side` — Selenium IDE project for the simple calculator scenarios.
- `week 4/Basic_auth.js` — Exercises basic-auth scenarios; run against a test endpoint that triggers browser auth dialogues.
- `week 4/Basic_Auth.side` — Selenium IDE recording for basic authentication flows.
- `week 4/Input Validation Examples.side` — Selenium IDE collection of input-validation recordings (import to run).
- `week 4/InputValidation.js` — Runs validation checks for common input fields; adapt selectors to your target page before running.
- `week 4/InputValidator_eviltester.js` — Fuzzes inputs to test edge cases; run in Console and review console assertions.
- `week 5/Tree_Checkboxes.js` — Traverses and toggles nodes in a tree-checkbox demo; run on pages with hierarchical checkbox components.
- `week 5/Tree_Checkboxes_Random.js` — Performs randomized checkbox selections for robustness testing; useful to find intermittent issues.
- `week 6/KeyDnD.js` — Implements keyboard-based drag-and-drop interactions; run on DnD-enabled demos supporting keyboard controls.
- `week 6/MouseDnD.js` — Uses mouse events to simulate drag-and-drop; run on pages where pointer/mouse DnD is supported.
- `week 6/SimpleDnD.js` — Minimal drag-and-drop snippet for quick manual checks.
- `week 6/TestLogin.side` — Selenium IDE recording for login flows; import into Selenium IDE to replay.
- `week 7/fileUpload.js` — Demonstrates file upload via `<input type="file">`; update the file path in the script and run in Console.
- `week 8/async_await_enabled.js` — Example using `async/await` for sequential async DOM actions; paste into Console wrapped in an async IIFE.
- `week 8/disabledDynamicButtons.side` — Selenium IDE project for disabled/dynamic button scenarios.
- `week 8/Dynamic Elements.side` — Selenium IDE recording focused on dynamically-added elements.
- `week 8/DynamicButtons.side` — Selenium IDE recording for dynamic button behaviors.
- `week 8/dynamicButtons2.js` — Script targeting dynamically-created buttons; useful for event-delegation tests.
- `week 8/dynamicContentTesting.js` — Waits for and verifies asynchronously loaded content; run on pages that fetch content after load.
- `week 8/homework_overview` — Plain-text notes/overview for week 8 exercises (open in editor to read details).
- `week 9/Calendars.side` — Selenium IDE project for calendar widget interactions.
- `week 9/datePicker.js` — Automates date-picker selection and verification; run on demo pages with date-picker widgets.

## Hend (detailed usage notes)

- `7CharValidator.js` — Validates 7-character input validation rules; run on a form page in Console.
- `Basic Authentication/` — Folder containing basic authentication test resources and documentation.
- `Calculator Test Suite Final.side` — Selenium IDE project for complete calculator test scenarios.
- `DatePicker.js` — Automates date-picker interactions and validation; run on a date-picker demo page.
- `DragNDropDragEvent/` — Folder with drag-and-drop implementations using the drag event API.
- `DragNDropUsingKeyboard/` — Folder demonstrating keyboard-based drag-and-drop interactions.
- `DragNDropUsingMouse/` — Folder for mouse-event-driven drag-and-drop tests.
- `Dynamic_elements_slider/` — Folder for testing dynamic slider elements and interactions.
- `Hend_Trianglev001_final.side` — Selenium IDE project for triangle-type validation scenarios.
- `Simple Calculator Test Cases snippets final/` — Folder with calculator test case snippets and examples.
- `Simple Note Taker-Hend.side` — Selenium IDE project for Simple Note Taker automation.
- `Simple Note taker.js` — JavaScript automation for the Simple Note Taker demo; run in Console to create/edit/delete notes.
- `UploadaFile.js` — File upload automation script; update file paths and run in Console on a page with `<input type="file">`.
- `basic authen hend.side` — Selenium IDE recording for basic authentication login flows.
- `easySlider Snippets/` — Folder containing reusable snippets for slider widget interactions.
- `radio button snippets/` — Folder with code snippets for radio button selection and validation.
- `tringler_snippet_hend.js` — Reusable snippet for triangle validation logic; paste into scripts as needed.
- `Triangle v001 Test cases - Sheet1.pdf` — Document outlining test cases for triangle validation scenarios.

## Zeynep (detailed usage notes)

### Week 2
- `7CharValidator.js` — Character count validation script; run in Console to validate input field constraints.
- `RadioButton.js` — Automates radio button selection and verification; run on pages with radio button groups.
- `SimpleNoteTaker.js` — Simple Note Taker demo automation; create, edit, and delete notes in Console.
- `TriangleChecker.js` — Triangle-type validator (scalene/isosceles/equilateral); run in Console with form input.
- `QA Class 2025_week2.side` — Selenium IDE project for week 2 exercise recordings.
- `ManualTestsTriangle.pdf` — Document detailing manual test cases and expected results for triangle validation.

### Week 3
- `SimpleCalculator.js` — Calculator demo automation (addition, subtraction, etc.); run in Console on calculator page.
- `SimpleCalculator_.side` — Selenium IDE project for calculator test scenarios.

### Week 4
- `InputValidation.side` — Selenium IDE project for input validation scenarios and edge cases.
- `Input_Validation.js` — Input field validation script; test edge cases and boundary conditions in Console.

## Root-Level Files (detailed usage notes)

- `Add Remove Elements.js` — Dynamically adds and removes DOM elements; run in Console to test element lifecycle.
- `Add Remove Elements with wait.js` — Enhanced version with wait/delay logic for async element operations.
- `Animal.js` — Animal class demonstration script; useful for class/OOP concept examples.
- `AssertDynamicContent.js` — Validates dynamically-loaded content and assertions; run in Console.
- `Buttons Commands.js` — Button interaction automations and custom commands; paste in Console or DevTools snippet.
- `CheckingClass.js` — Class definition examples and validation exercises; run in Console.
- `Class 2025.side` — Selenium IDE project for class-related exercises and recordings.
- `ContextMenu.js` — Right-click context menu interaction script; run on pages with context menu elements.
- `DatePicker.js` — Date-picker widget automation; run in Console on demo pages with date-picker UI.
- `Disabled Buttons.side` — Selenium IDE project for disabled button state testing and interactions.
- `Drag-n-Drop.js` — Basic drag-and-drop implementation; run in Console on pages with draggable elements.
- `Drag-n-Drop-DragEvent.js` — Drag-and-drop using native drag event API; run on supported pages.
- `Drag-n-Drop-MouseEvent.js` — Drag-and-drop using mouse events (mousedown/mousemove/mouseup); run in Console.
- `Dragdrop.side` — Selenium IDE recording for drag-and-drop scenarios.
- `Dropdown.js` — Dropdown/select element interactions; run in Console to open, select, and verify options.
- `Dropdown Search Cities.js` — Searchable dropdown automation with city selection; adapt selectors and run in Console.
- `Dynamic Elements JS/` — Folder with various dynamic element interaction examples.
- `dynamicElements.js` — General dynamic element handling (wait for, interact with dynamically-created elements).
- `Forms.md` — Markdown guide covering form automation patterns and best practices.
- `Simple Calc last version.side` — Selenium IDE project for the latest calculator test scenarios.
- `Simple Note Taker Commands.js` — Simple Note Taker automation with command structure; run in Console.
- `Slider Class.side` — Selenium IDE project for slider widget interactions.
- `TreeCheckBoxWithAssertion.js` — Tree checkbox automation with assertion validation; run on tree-checkbox demos.
- `Triangle commands.js` — Triangle validation with structured command patterns; run in Console.
- `Upload File.js` — File upload automation script; run in Console on pages with file upload inputs.
- `Upload.side` — Selenium IDE project for file upload scenarios.
- `date_picker.side` — Selenium IDE recording for date-picker widget interactions.
- `dynamicElements.js` — Dynamic element interaction and wait-handling utilities.
- `testSimpleDynamicButton.js` — Test script for dynamically-created buttons; run in Console to test async button behavior.
- `wp_tables_practice-automation.side` — Selenium IDE project for WordPress table automation practice.
- `DragnDrop.md` — Markdown documentation for drag-and-drop implementation patterns and techniques.


## Usage tips
- If a script uses selectors, ensure the target page DOM matches those selectors.
- Wrap long-running or async code in an `async` IIFE when pasting into the Console:

```javascript
(async () => {
  // paste async code here
})();
```

- If you need to persist a snippet, save it in the **Snippets** panel so you can run it later.

## Adding new snippets
1. Create a `.js` file at the repository root or inside a contributor folder.
2. Include a short header comment explaining the target page and expected behavior.
3. Optionally add a matching snippet in Chrome DevTools for quick access.

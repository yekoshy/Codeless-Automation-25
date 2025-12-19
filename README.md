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

**Root:**
- Several standalone `.js` scripts and `.side` Selenium IDE projects exported from recordings. Examples include common test helpers and single-file demos. Browse the repository root for the full list.

**Hend:**
- DatePicker.js
- UploadaFile.js
- 7CharValidator.js
- Simple Note taker.js
- tringler_snippet_hend.js

**Silvia:**
- week1/7 Char validator.js
- week1/testscript_SNT.js
- week2/testscript_triangle_app.js
- week3/RandomNumber&Testcase generator2.js
- week3/test simple calculator.js
- week3/YakoshyRandom Number.js
- week3/FromRecording.side (and other `.side` files)
- week4/Basic_auth.js
- week4/InputValidation.js
- week4/InputValidator_eviltester.js
- week5/Tree_Checkboxes.js
- week5/Tree_Checkboxes_Random.js
- week6/KeyDnD.js
- week6/MouseDnD.js
- week6/SimpleDnD.js
- week7/fileUpload.js
- week8/async_await_enabled.js
- week8/dynamicButtons2.js
- week8/dynamicContentTesting.js
- week9/datePicker.js
- week10/Accordian_demoqa.js
- week10/Accordian_demoqa_v2.js
- week10/pratice_automation_accordions.js.js
- week11/STLookup_a-dTesting.js
- week11/eviltester_dynamic_table.js

**Zeynep:**
- week2/7CharValidator.js
- week2/TriangleChecker.js
- week2/SimpleNoteTaker.js
- week3/SimpleCalculator.js
- week4/Input_Validation.js
- week2/RadioButton.js

If you want a full programmatic index of every file in the repo, I can generate and append a complete file list to this README.

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

## Contact / Maintenance
Treat this repo as a shared snippets library. If you want documentation improvements or grouping by feature, open an issue or add a PR with suggested edits.

---
Generated: December 19, 2025

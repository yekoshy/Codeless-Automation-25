You are asking to do something that is fundamentally not possible with standard JavaScript.

You cannot directly set event.isTrusted to true when creating an event programmatically (using new Event(), new MouseEvent(), dispatchEvent(), etc.).

Here's why:

isTrusted is a Read-Only Property: This property is set by the browser's core engine. It's a security measure.

If an event originates from a real user interaction (e.g., you physically click a button with your mouse, or type on your keyboard), the browser sets event.isTrusted to true.
If an event is created and dispatched by JavaScript code (like someElement.dispatchEvent(new Event('click'))), the browser always sets event.isTrusted to false.
Security and Anti-Automation: This distinction is precisely what websites (especially those designed for "test automation practices" or to prevent bots) use to differentiate between a human user and an automated script. If the isTrusted flag is false, the website's JavaScript can choose to ignore the event or deem the action invalid.

So, while you might try to do something like this (which will not work):

JavaScript

const myEvent = new Event('input', { bubbles: true });
// This line below is conceptually what you're asking for,
// but it's INVALID JavaScript and will cause an error or be ignored:
// myEvent.isTrusted = true; // <-- YOU CANNOT DO THIS!

usernameInput.dispatchEvent(myEvent);
The Solution Remains Browser Automation Tools
To overcome the isTrusted check and successfully automate interactions with sites that employ such defenses, you must use browser automation frameworks.

Tools like:

Playwright
Puppeteer
Selenium

A responsive personal portfolio website built with pure semantic HTML5, modern CSS3, and Vanilla JavaScript ES6+.

- Navbar with dynamic theme switch
- About Me section with profile picture
- Skills Grid
- Project Showcase (Projects 00 - 03)
- Hobbies & Interests
- Contact Form
- Footer

When interacting with the theme switcher button:
1. **User Action:** The user clicks the theme toggle button.
2. **Event Firing:** The browser detects the input and dispatches a `'click'` event on the target element.
3. **JavaScript Callback:** The event listener attached via `addEventListener` catches the event and triggers the callback function.
4. **DOM/CSS Mutation:** The callback modifies `document.body.classList`, which alters CSS custom properties dynamically across the page.

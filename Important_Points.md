# Importint Points

## Extentions 
- **GoLive** is to shoe the preview on web
- **ESLint** help in code formatting and to do clean code.
- **Prettier** formating and seggetion in code

## Points
- Work from top to bottom line by line
 - If script is less you can add in HTML file directly
 - If script is large you can create a separate JS file and link it to HTML file using
   `<script src="filename.js"></script>`
- use `async` attribute in script tag to load the script asynchronously
    - Script will be downloaded in background without blocking the HTML parsing
    - Script will be executed as soon as it is downloaded
- Use `defer` attribute in script tag to load the script after the HTML is loaded
    - Script will be downloaded in background without blocking the HTML parsing
    - Script will be executed only after the HTML is completely loaded
- If both `async` and `defer` are used, `async` will be ignored and script will be loaded with `defer` behavior
- Use `import` statement to import functionalities from other modules
- Use `export` statement to export functionalities from a module
- Use `type="module"` in script tag to load the script as a module
    - Modules are always deferred
    - Modules have their own scope
    - Modules can import and export functionalities from other modules
- Use `this` keyword to refer to the current object
- Use `class` keyword to create a class
- Use `constructor` method to initialize the object
- Use `super` keyword to call the parent class constructor
- Use `extends` keyword to create a subclass
- Use `static` keyword to create static methods and properties
- `` is for template literals
- Use `${}` to embed expressions in template literals
- `var` is function scoped
- `var` can be changed and redeclared
- `let` and `const` are block scoped
- Use `const` for variables that should not be reassigned
- Use `let` for variables that can be reassigned
- `typeof` operator to check the data type of a variable
- Functions are first-class citizens in JavaScript
- Functions can be assigned to variables, passed as arguments, and returned from other functions
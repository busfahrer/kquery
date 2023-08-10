
# kquery

> Nanoscopic jquery clone with only the bare necessities

## Usage
- Optional: Minify by running `yarn build` or using https://minify-js.com/
- Include `kquery.min.js`

## Usage Examples
```js
let article  = $('.article');  // single $ matches first
let articles = $$('.article'); // double $$ matches all

let hr = $('<hr>'); // creates a node from markup

let a = $('<a>click</a>').content("new text!");             // sets text content
let b = $('<a>click</a>').attr("href", "http://google.com") // sets attributes
let c = $('<a>click</a>').css("color", "green")             // sets style
let d = $('<a>click</a>')                                   // or just use chaining
  .attr("href", "http://google.com")
  .css("color", "green");

let content = a.content(); // all of the above setters work as getters when
                           // called without arguments
```

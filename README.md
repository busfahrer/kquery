
# kquery

> Nanoscopic jquery clone with only the bare necessities

## Usage
- Optional: Minify by running `yarn build` or using https://minify-js.com/
- Include `kquery.min.js`
- Alternatively, just copy & paste the blob at the end of this document

## Usage Examples
```js
let article  = $('.article');  // single $ matches first
let articles = $$('.article'); // double $$ matches all

let hr = $('<hr>'); // creates a node from markup

let a = $('<a>click</a>').attr("href", "http://google.com") // sets attributes
let b = $('<a>click</a>').css("color", "green")             // sets style
let c = $('<a>click</a>')                                   // or just use chaining
  .attr("href", "http://google.com")
  .css("color", "green");
```

## Copy and paste version
```js
let M={c:function(t,e){let n=document.createElement("template");n.innerHTML=t;let r=n.content
.firstElementChild;return e&&Object.keys(e).forEach((t=>r.setAttribute(t,e[t]))),r},p:function
(t){t.css=t.css||((e,n)=>(t.style[e]=n,t)),t.attr=t.attr||((e,n)=>("object"==typeof e?Object
.keys(e).forEach((n=>t.setAttribute(n,e[n]))):t.setAttribute(e,n),t))},m:function(t){let e=
document.querySelectorAll(t);return e.forEach((t=>this.p(t))),e},q:function(t,e){let n;
return n=t instanceof HTMLElement?t:t.trim().startsWith("<")?this.c(t,e):
document.querySelector(t),this.p(n),n}},$=M.q.bind(M),$$=M.m.bind(M);
```

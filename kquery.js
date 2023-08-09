
let M = {
  // createNode
  c: function(html, attrs){
      let template = document.createElement("template");
      template.innerHTML = html;
      let el = template.content.firstElementChild;
      if (attrs) {
        Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
      }
      return el;
  },

  // monkeyPatch
  p: function(el) {
    el.css = el.css || ((key, val) => { el.style[key] = val; return el; });
    el.attr = el.attr || ((x, y) => {
      if (typeof x === 'object') {
        Object.keys(x).forEach(key => el.setAttribute(key, x[key]));
      } else {
        el.setAttribute(x, y);
      };
      return el;
    });
  },

  // multiQuery
  m: function(query) {
    let results = document.querySelectorAll(query);
    results.forEach(el => this.p(el));
    return results;
  },

  // query
  q: function(arg, arg2) {
    let el;

    if (arg instanceof HTMLElement) {
      el = arg;
    } else if (arg.trim().startsWith("<")) {
      el = this.c(arg, arg2);
    } else {
      el = document.querySelector(arg);
    }

    this.p(el);

    return el;
  },
};

let $ = M.q.bind(M);
let $$ = M.m.bind(M);

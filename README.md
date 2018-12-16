### ejs
---
https://github.com/mde/ejs

https://www.npmjs.com/package/gulp-ejs

https://www.npmjs.com/package/gulp-minify-ejs

```js
let str = "",
  fn = ejs.compile(str, {client: true});
fn(data, null, function(path, d){
  // path -> 'file'
  // d => {person: 'John'}
});

let ejs = require('ejs');
let myFileLoad = function(filePath){
  return 'myfileLoad: ' + fs.readFileSync(filePath);
};
ejs.fileLoader = myFileLoad;

let ejs = require('ejs'),
  users = ['geddy', 'neil', 'alex'];
ejs.render();
ejs.delimiter = '$';
ejs.render('<%= user.join(" | "); $>', {users: users});

let ejs = require('ejs'),
  LRU = require('lru-cache');
ejs.cache = LRU(100);

let template = ejs.compile(str, options);
template(data);
ejs.render(str, data, options);
ejs.renderFile(filename, data, options, function(err, str){
})
```

```
npm install ejs
```

```
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>

<ul>
  <% users.forEach(function(user){  %>
    <%- include('user/show', {user: user}) %>
  <% }); %>
</ul>

<%- include('header') -%>
<h1>
</h1>
<p>
</p>
<%- include('footer') -%>

<div id="output"></div>
<script src="ejs.min.js"></script>
<script>
  let people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', {people: people});
  %('#output').html(html);
  document.getElementById('output').innerHTML = html;
</script>

```


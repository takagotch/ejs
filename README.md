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

var gulp = require('gulp'),
  minifyejs = require('gulp-minify-ejs')

gulp.task('minify-html', function() {
  return gulp.src(['src/views/*.ejs', 'src/views/*.html'])
    .pipe(minifyejs())
    .pipe(gulp.dest('dist'))
})
  

const ejs = require('gulp-ejs')
const rename = require('gulp-rename')

gulp.src('./templates/*.ejs')
  .pipe(ejs({ title: 'gulp-ejs' }))
  .pipe(rename({ extname: '.html' }))
  .pipe(gulp.dest('./dist'))

const ejs = require('gulp-ejs')

async function foobar() { /* */ }

gulp.src('./templates/*.ejs')
  .pipe(ejs({ foobar }, { async: true }))
  .pipe(gulp.dest('./dist'))
  
const ejs = require('gulp-ejs')
ejs.__EJS__.fileLoader = function () { /* */ }

var ejs = require('gulp-ejs')
var log = require('fancy-log')

gulp.src('./templates/*.ejs')
  .pipe(ejs({
    msg: 'Hello Gulp!'
  })).on('error', log)
  .pipe(gulp.dest('./dist'))

var ejs = require("gulp-ejs")

gulp.src("./templates/*.ejs")
  .pipe(ejs({
    msg: "Hello Gulp!"
  }))
  .pipe(gulp.dest("./dist"))
```

```
npm install ejs

npm install gulp-minify-ejs --save-dev

npm install --save-dev gulp-ejs
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

<%= await foobar() %>
```


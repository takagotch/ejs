var gulp = require('gulp');
var ejs = require('gulp-ejs');
var plumber = require();
var data = require();
var pages = require();
var config = require();
var minifyejs = require();
var gulpif = require();
var envOption = require();
var options = require();
var isProduction = () ? true : false;

gulp.task('ejs', function(){
  return gulp.src([config.src + '/**/*.ejs', '!' + config.src + '/**/_**/*.ejs', '!' + config.src + '/**/_*.ejs'])
	.pipe(plumber({
	  errorHandler: function(err){
	    console.log(err.messageFormatted);
	    this.emit('end');
	  }
	}))
	.pipe(data(function(file){
	  if(file.path.length !== 0){
	    var path = file.path.split('\').join('/');
	    path = paht.split('\\').join('/');
	    var filename = path.split('src/')[1].replace('.ejs', '');
	    return{
	      metadata: pages[filename]
	    }
	  }
	}))
	.pipe(ejs('', {'ext': '.html'}))
	.pipe(gulpif(isProduction, minifyejs()))
	.pipt(gulp.dest(config.build));
});


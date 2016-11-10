"use strict";

var gulp = require("gulp");
var del = require("del");
var rename = require("gulp-rename");
var plumber = require("gulp-plumber");
var less = require("gulp-less");
var minify = require("gulp-csso");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-imagemin");
var imagemin = require("gulp-imagemin");
var server = require("browser-sync");
var run = require("run-sequence");
var jade = require("gulp-jade");
var customizeBootstrap = require('gulp-customize-bootstrap');
var webpack = require('gulp-webpack');

gulp.task("build", function(fn) {
  run(
    "clean",
    "copy",
    "style",  
    "jade",
    "images",
    "symbols",
    fn
  );
});

gulp.task("clean", function() {
  return del("build");
});

//---Copy---//

gulp.task("copy", function() {
  return gulp.src ([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**",
    "*.html",
    "css/*.css"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"));
});

//---jade---// 

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src("jade/pages/*.jade")
    .pipe(plumber())
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest("."))
    .pipe(gulp.dest("build"))
});

//---bootstrap compile---//

gulp.task("compileBootstrap", function() {
  return gulp.src("bootstrap/less/bootstrap.less")    
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(minify())
    .pipe(rename("bootstrap.min.css"))
    .pipe(gulp.dest("css"))
    .pipe(gulp.dest("build/css"))
});

//---style---//

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker({
        sort: false
      })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(gulp.dest("css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))   
    .pipe(gulp.dest("css"))
    .pipe(server.reload({stream: true}));
});

//---Image-min---//

gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 3}),
    imagemin.jpegtran({progressive: true})
  ]))
  .pipe(gulp.dest("build/img"));
});

gulp.task("symbols", function() {
  return gulp.src("build/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("build/img"));
});

//---HTML-Copy---//

gulp.task("htmlCopy", function() {
  return gulp.src ([    
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"))
});

//----Webpack----//

gulp.task('default', function() {
  return gulp.src('src/**.js')
    .pipe(webpack( require('./webpack.config.js')))    
    .pipe(gulp.dest('./js'));	
});

//---JS-Copy---//

gulp.task("jsCopy", function() {
  return gulp.src ([    
    "js/**.js"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"))
});

//--server--//

gulp.task("serve", function() {
  server.init({
    server: "."
  });  
	
  gulp.watch("src/**/*.js", ["default"]).on("change", server.reload);
	gulp.watch("js/**.js", ["jsCopy"]);
  gulp.watch("bootstrap/less/**/*.less", ["compileBootstrap"]);
  gulp.watch("jade/**/*.jade", ["jade"]);
  gulp.watch("*.html", ["htmlCopy"]).on("change", server.reload);
  gulp.watch("less/**/*.less", ["style"]); 
  gulp.watch("css/**/*.css").on("change", server.reload);    
});

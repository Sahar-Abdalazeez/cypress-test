import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("default", shell.task(["npx parcel index.html --open"]));

gulp.task("test", shell.task(["npx mocha"]));
gulp.task('cypress', shell.task([
  'npx cypress run'
]));
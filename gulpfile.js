var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function(){
    return (
        gulp.src("sass/**/*.scss")
        .pipe(sass({outputStyle:"expanded"}))
        .pipe(gulp.dest("./css"))
    );
});

gulp.task("sass-watch", function(){
    return gulp.watch("sass/**/*.scss", function(){
            return (
                gulp.src("sass/**/*.scss")
                .pipe(sass({outputStyle:"expanded"}).on("error", sass.logError))
                .pipe(gulp.dest("./css"))
            );
        });
});

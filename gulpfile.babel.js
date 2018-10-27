import { parallel, src, dest, watch } from "gulp"
import connect from "gulp-connect"
import sass from "gulp-sass"

const css = () =>
    src("./css/*.scss")
        .pipe(
            sass({
                outputStyle: "compressed"
            }).on("error", sass.logError)
        )
        .pipe(dest("./css"))
        .pipe(connect.reload())

const server = () => connect.server({ livereload: true })

const _watch = () => {
    watch(["./*.html"], () => src("./*.html").pipe(connect.reload()))
    watch(["./css/*.scss"], css)
}

exports.default = parallel(server, _watch)

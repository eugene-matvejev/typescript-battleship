/**
 * this is required for heroku, to launch lite-server
 *
 * @type {{port: *, files: string[], server: {baseDir: string}}}
 */
module.exports = {
    port: process.env.PORT,
    files: ['./**/*.{html,htm,css,js}'],
    server: {
        baseDir: "./web"
    }
};
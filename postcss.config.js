const algacss = require('alga-css')

module.exports = {
    plugins: [
        algacss({
            extract: './scr/**/*.vue'
        })
    ]
}
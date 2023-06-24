const { Marp } = require('@marp-team/marp-core')
const hljs = require('highlight.js')
const iecst = require('highlightjs-structured-text')
hljs.registerLanguage("iecst", iecst)

module.exports = (opts) => {
    const marp = new Marp(opts)

    marp.highlighter = (code, lang) => {
        if (lang) {
            return hljs.getLanguage(lang)
                ? hljs.highlight(code, {
                    language: lang,
                    ignoreIllegals: true
                }).value
                : ''
        }
        return hljs.highlightAuto(code).value
    }

    return marp
}
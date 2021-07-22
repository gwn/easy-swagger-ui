#!/usr/bin/env node

const
    {Readable} = require('stream'),
    {createWriteStream, copyFileSync} = require('fs'),
    browserify = require('browserify'),
    config = {dom_id: '#main', ...require('./' + process.argv[2])},
    source = 'require("swagger-ui")(' + JSON.stringify(config) + ')'

browserify(Readable.from(source))
    .bundle()
    .pipe(createWriteStream('./dist/main.js'))

copyFileSync('./node_modules/swagger-ui/dist/swagger-ui.css', './dist/swagger-ui.css')

#!/usr/bin/env node
var fs = require('fs')
var dirName = process.argv[2]
fs.mkdirSync('./' + dirName)
fs.mkdirSync('./' + dirName + '/css')
fs.mkdirSync('./' + dirName + '/js')
fs.writeFileSync('./' + dirName + '/index.html', '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>')
fs.writeFileSync('./' + dirName + '/css/style.css', 'h1{color: red;}')
fs.writeFileSync('./' + dirName + '/js/main.js', 'var string = "Hello World"\nalert(string)')
process.exit(0)
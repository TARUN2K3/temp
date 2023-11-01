const { isUtf8 } = require("buffer")
const { log } = require("console")
const { readFileSync, writeFileSync } = require("fs")

const datareadfirst=readFileSync('./content/first.txt','utf-8')
const datareadsecond=readFileSync('./content/second.txt','utf-8')
console.log(datareadfirst,datareadsecond)
writeFileSync(
    './content/write_file.txt',`${datareadfirst},${datareadsecond}`
)
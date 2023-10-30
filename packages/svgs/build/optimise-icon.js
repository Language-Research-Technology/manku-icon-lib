import * as fetch from "node-fetch"
import * as config from './config.js'
import { globby } from 'globby'
import * as fse from 'fs-extra'
import { optimize } from 'svgo'
import * as chalk from 'chalk'
import * as path from 'path'
import * as fs from 'fs'

console.log('Optimize Assets')
const directoryPath = 'C:/Local Files/LDaCA/ldaca_icons/packages/svgs/assets/icons/';

globby([
  ...config.icon.input,
  ...config.icon.exclude,
  '!assets/**/*.png',
  '!assets/**/*.jpeg',
  '!assets/**/*.jpg',
]).then(fs.readdir(directoryPath, function (err, files) {
  console.log(files)
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 
  files.forEach(function (file) {
    console.log("File is " + file)
    
    const result = optimize(fs.readFileSync(directoryPath + file).toString(), { // Need to make this legit
      file,
    })
    fs.writeFileSync('C:/Local Files/LDaCA/ldaca_icons/packages/svgs/build/optimised/' + file, result.data, 'utf-8')
  })
  console.log("Done optimising")
}))

// globby([
//   ...config.icon.input,
//   ...config.icon.exclude,
//   '!assets/**/*.png',
//   '!assets/**/*.jpeg',
//   '!assets/**/*.jpg',
// ]).then(icon => {
//   console.log(icon)
//   icon.forEach(path => {
//     console.log("Path is " + path)
//     const filename = path.match(/([^\/]+)(?=\.\w+$)/)[0]

//     const result = optimize(fse.readFileSync(path).toString(), {
//       path,
//     })
//     fse.writeFileSync(path, result.data, 'utf-8')
//   })
//   console.log("Done optimising")
// })
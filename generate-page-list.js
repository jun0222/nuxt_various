// generate-page-list.js
const fs = require('fs')
const path = require('path')

const pagesDirectory = path.join(__dirname, 'pages')
const outputFilePath = path.join(__dirname, 'static', 'pages.json')

function listPages(dir, filelist = []) {
  const files = fs.readdirSync(dir)
  files.forEach(function (file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = listPages(path.join(dir, file), filelist)
    } else if (path.extname(file) === '.vue') {
      const filePath = path.join(dir, file)
      // ルートディレクトリからの相対パスに変換
      const relativePath = path.relative(pagesDirectory, filePath)
      // ファイルの拡張子を削除
      const routePath = relativePath.replace(/\.vue$/, '')
      filelist.push(routePath)
    }
  })
  return filelist
}

const pagesList = listPages(pagesDirectory)
fs.writeFileSync(outputFilePath, JSON.stringify(pagesList, null, 2), 'utf8')
// console.log(`Pages list generated at ${outputFilePath}`)

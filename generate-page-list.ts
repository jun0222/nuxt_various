import fs from 'fs'
import path from 'path'

const pagesDirectory = path.join(__dirname, 'src', 'pages')
const outputFilePath = path.join(__dirname, 'src', 'static', 'pages.json')

function listPages(dir: string, filelist: string[] = []): string[] {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = listPages(path.join(dir, file), filelist)
    } else if (path.extname(file) === '.vue') {
      const filePath = path.join(dir, file)
      // ルートディレクトリからの相対パスに変換
      const relativePath = path.relative(pagesDirectory, filePath)
      // ファイルの拡張子を削除
      let routePath = relativePath.replace(/\.vue$/, '')
      // 最後に /index が含まれている場合、それを削除
      routePath = routePath.replace(/\/index$/, '')
      filelist.push(routePath)
    }
  })

  return filelist
}

const pagesList = listPages(pagesDirectory)
fs.writeFileSync(outputFilePath, JSON.stringify(pagesList, null, 2), 'utf8')

// console.log(`Pages list generated at ${outputFilePath}`);

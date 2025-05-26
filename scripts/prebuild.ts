import fs from 'fs'
import ejs from 'ejs'

interface ProjectEntry {
  metadataPath?: string
  markdownPath?: string
}

function generatePagesIndexFile(filesDir: string, indexFile: string, templatePath: string) {
  const pagesFiles = fs.readdirSync(filesDir)

  const pages = Object.values(pagesFiles.map(file => {
    const fileInfo = file.match(/\d*_(.*)\.([^\.]*?)$/)

    if(fileInfo) {
      return {
        path: file,
        name: fileInfo[1],
        type: fileInfo[2],
      }
    } else {
      return null
    }
  }).reduce((groups: Record<string, ProjectEntry>, file) => {
    if(!file) {
      return groups
    }

    if(!(file.name in groups)) {
      groups[file.name] = {}
    }

    if(file.type == 'md') {
      groups[file.name].markdownPath = file.path
    } else if(file.type == 'json') {
      groups[file.name].metadataPath = file.path
    }

    return groups
  }, {}))

  Object.entries(pages).forEach((entry) => {
    const [_, page] = entry
    if(!page.markdownPath) {
      console.error(`'${page.metadataPath}' don't have a markdown file!`)
      process.exit(1)
    }
    if(!page.metadataPath) {
      console.error(`'${page.markdownPath}' don't have a metadata file!`)
      process.exit(1)
    }
  })

  const template = fs.readFileSync(templatePath)

  fs.writeFileSync(indexFile, ejs.render(template.toString(), { pages: pages, root: filesDir.replace('./public', '') } ))
}

generatePagesIndexFile('./public/articles', './src/data/articles.ts', './scripts/gen-templates/articles-index.ejs')
generatePagesIndexFile('./public/projects', './src/data/projects.ts', './scripts/gen-templates/projects-index.ejs')

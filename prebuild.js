const fs = require('fs')

function generatePagesIndexFile(root, folder, name) {
  const targetFilename = `${root}/${name}.js`
  const pagesFolder = `${root}/${folder}`

  const pagesFiles = fs.readdirSync(pagesFolder)

  const pages = pagesFiles.map(file => {
    return file.match(/\d*_(.*)\.([^\.]*?)$/)
  }).reduce((groups, file) => {
    let fileInfo = groups[file[1]] = (groups[file[1]] || {filename: file[1]})

    if(file[2] == 'md') {
      fileInfo.markdown = file[0]
    } else if(file[2] == 'json') {
      fileInfo.json = file[0]
    }

    return groups
  }, {})

  pagesObjects = []

  // clear file
  fs.writeFileSync(targetFilename, '')

  Object.entries(pages).forEach((entry) => {
    const [key, page] = entry
    if(!page.json) {
      console.error(`'${page.filename}' don't have a json file!`)
      process.exit(1)
    }
    if(!page.markdown) {
      console.error(`'${page.filename}' don't have a markdown file!`)
      process.exit(1)
    }


    fs.appendFileSync(targetFilename, `import ${key}Info from './${folder}/${page.json}'\n`)
    fs.appendFileSync(targetFilename, `import ${key}Path from './${folder}/${page.markdown}'\n`)
    fs.appendFileSync(targetFilename, '\n')

    pagesObjects.push({
      info: `${key}Info`,
      path: `${key}Path`,
    })
  })

  fs.appendFileSync(targetFilename, `const ${name} = [\n`)
  pagesObjects.forEach(page => {
    fs.appendFileSync(targetFilename, `  {info: ${page.info}, path: ${page.path}},\n`)
  })
  fs.appendFileSync(targetFilename, ']\n')
  fs.appendFileSync(targetFilename, '\n')

  fs.appendFileSync(targetFilename, `export default ${name}\n`)

}

generatePagesIndexFile('./src/pages', 'articles', 'articles')
generatePagesIndexFile('./src/pages', 'projects', 'projects')

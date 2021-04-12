const fs = require('fs')

const { program } = require('commander');
program.version('0.0.1');

function timestamp(date) {
  return {
    Y: date.getFullYear().toString().padStart(4, '0'),
    M: (date.getMonth()+1).toString().padStart(2, '0'),
    D: date.getDate().toString().padStart(2, '0'),
    h: date.getHours().toString().padStart(2, '0'),
    m: date.getMinutes().toString().padStart(2, '0'),
    s: date.getSeconds().toString().padStart(2, '0')
  }
}

function fileTimestamp(ts) {
  return `${ts.Y}${ts.M}${ts.D}${ts.h}${ts.m}${ts.s}`
}

function isoTimestamp(ts) {
  return `${ts.Y}-${ts.M}-${ts.D} ${ts.h}:${ts.m}`
}

function createProject(filename) {
  console.log('Aqui!')

  const ts = timestamp(new Date())
  const filenameTimestamped = `${fileTimestamp(ts)}_${filename}`
  
  fs.writeFileSync(`./src/pages/projects/${filenameTimestamped}.json`, `{
  "title": "${filename}",
  "homepage": "https://example.com",
  "repository": "https://github.com/douglasm42/${filename}",
  "updatedAt": "${isoTimestamp(ts)}"
}
`)
  fs.writeFileSync(`./src/pages/projects/${filenameTimestamped}.md`, `# ${filename}\n`)
}

function createPost(filename) {
  console.log('Aqui!')

  const ts = timestamp(new Date())
  const filenameTimestamped = `${fileTimestamp(ts)}_${filename}`
  
  fs.writeFileSync(`./src/pages/articles/${filenameTimestamped}.json`, `{
  "title": "${filename}",
  "createdAt": "${isoTimestamp(ts)}"
}
`)
  fs.writeFileSync(`./src/pages/articles/${filenameTimestamped}.md`, `# ${filename}\n`)
}

program
  .command('project <filename>')
  .description('create a new project in the projects list')
  .action(createProject)

program
  .command('post <filename>')
  .description('create a new post in the blog')
  .action(createPost)

program.parse(process.argv);
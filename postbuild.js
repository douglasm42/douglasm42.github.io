const fs = require('fs')

console.log('Removing the old published build...')
fs.rmdirSync('./docs', {recursive: true})

if(!fs.existsSync('./docs')) {
  console.log('Publishing the new build...')
  fs.renameSync('./build', './docs')
} else {
  console.error('ERROR: Failed to remove the old published build.')
}

fs.writeFileSync('./docs/CNAME', 'douglasm42.dev')

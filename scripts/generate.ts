#!/usr/bin/env node

import fs from 'fs'
import { program } from 'commander'

program.version('0.0.1');

interface TimeStamp {
  Y: string
  M: string
  D: string
  h: string
  m: string
  s: string
}

function timestamp(date: Date): TimeStamp {
  return {
    Y: date.getFullYear().toString().padStart(4, '0'),
    M: (date.getMonth()+1).toString().padStart(2, '0'),
    D: date.getDate().toString().padStart(2, '0'),
    h: date.getHours().toString().padStart(2, '0'),
    m: date.getMinutes().toString().padStart(2, '0'),
    s: date.getSeconds().toString().padStart(2, '0')
  }
}

function fileTimestamp(ts: TimeStamp) {
  return `${ts.Y}${ts.M}${ts.D}${ts.h}${ts.m}${ts.s}`
}

function isoTimestamp(ts: TimeStamp) {
  return `${ts.Y}-${ts.M}-${ts.D} ${ts.h}:${ts.m}`
}

function createProject(filename: string) {
  const ts = timestamp(new Date())
  const filenameTimestamped = `${fileTimestamp(ts)}_${filename}`
  
  fs.writeFileSync(`./public/projects/${filenameTimestamped}.json`, `{
  "title": "${filename}",
  "homepage": "https://example.com",
  "repository": "https://github.com/douglasm42/${filename}",
  "tags": [],
  "updatedAt": "${isoTimestamp(ts)}"
}
`)
  fs.writeFileSync(`./public/projects/${filenameTimestamped}.md`, `# ${filename}\n`)
}

function createPost(filename: string) {
  const ts = timestamp(new Date())
  const filenameTimestamped = `${fileTimestamp(ts)}_${filename}`
  
  fs.writeFileSync(`./public/articles/${filenameTimestamped}.json`, `{
  "title": "${filename}",
  "tags": [],
  "createdAt": "${isoTimestamp(ts)}"
}
`)
  fs.writeFileSync(`./public/articles/${filenameTimestamped}.md`, `# ${filename}\n`)
}

program
  .command('project <filename>')
  .description('create a new project in the projects list')
  .action(createProject)

program
  .command('post <filename>')
  .description('create a new post in the blog')
  .action(createPost)

program.parse(process.argv)

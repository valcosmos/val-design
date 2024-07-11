// const path = require('path')
// const glob = require('glob')
// const fs = require('fs-extra')
// const chalk = require('chalk')
// const { spawn } = require('child_process')
// const handlebars = require('handlebars')
// const fetch = require('node-fetch')

import path from 'node:path'
import { spawn } from 'node:child_process'
import process from 'node:process'
import glob from 'glob'
import fs from 'fs-extra'
import chalk from 'chalk'
import handlebars from 'handlebars'
import { pathExistsSync } from 'path-exists'

import { dirname } from 'dirname-filename-esm'

const __dirname = dirname(import.meta)
/**
 * abc-xyz => AbcXyz
 * @param {*} str
 */
function varCase(str: string) {
  return str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^./, m => m.toUpperCase())
}
const lowCase = (str: string) => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/^-/, '')

async function create() {
  const component = process.argv[2]

  const dirName = varCase(component)
  const componentName = lowCase(component)

  const dir = `src/components/${dirName}`

  if (pathExistsSync(dir)) {
    // return console.log(chalk.red('Error===> Dir is already exist'))
  }

  spawn('mkdir', ['-p', path.join(process.cwd(), dir)])

  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'))

  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, 'utf-8')
    const template = handlebars.compile(content)
    const result = template({
      dirName,
      componentName,
    })

    const newPath = filePath
      .replace('scripts/template', dir)
      .replace('C', componentName)
      .replace('cTest', componentName)
      // .replace('Component', componentName)
      .replace('.hbs', '')

    console.log(newPath)

    await fs.writeFile(newPath, result)

    console.log(chalk.green(`write ${newPath} success`))
  })

  const scssFile = path.join(process.cwd(), `${dir}/_style.scss`)

  console.log(chalk.green(`update ${scssFile} success`))
}

create()

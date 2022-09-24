// const path = require('path')
// const { spawn } = require('child_process')
import path from 'path'
import { spawn } from 'child_process'

;(() => {
  const component = process.argv[2]
  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${component}`)])
})()

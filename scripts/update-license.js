import { readFileSync, writeFileSync } from 'node:fs'
import { notice } from './copyright.js'

// Rewrites the copyright line of LICENSE to the current year range
const path = new URL('../LICENSE', import.meta.url)
const text = readFileSync(path, 'utf8')
const rxCopyright = /^Copyright (\(c\) )?.*$/m

if (!rxCopyright.test(text)) {
  throw new Error('LICENSE has no copyright line to update')
}

const updated = text.replace(rxCopyright, notice.replace('Copyright ', 'Copyright (c) '))
if (updated !== text) {
  writeFileSync(path, updated)
  console.log('LICENSE updated')
}

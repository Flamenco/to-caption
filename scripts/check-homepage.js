import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

// Refuses a publish whose homepage does not answer, so npm never links to a missing page.
// curl rather than fetch: Node cannot reach code-evolve.com from the machine that hosts it
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

const status = execFileSync('curl', ['-sL', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', '20', pkg.homepage], { encoding: 'utf8' })

if (status === '200') {
  console.log(`homepage ${pkg.homepage} answered ${status}`)
} else {
  console.error(`homepage ${pkg.homepage} answered ${status}; publish the page first`)
  process.exitCode = 1
}

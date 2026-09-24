import { readFileSync } from 'node:fs'

// The one place the copyright notice is computed; the holder and start year live in package.json
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))

const { holder, startYear } = pkg.config.copyright
const endYear = new Date().getFullYear()

export const years = startYear === endYear ? `${startYear}` : `${startYear}-${endYear}`

export const notice = `Copyright ${years} ${holder}`

export { holder }

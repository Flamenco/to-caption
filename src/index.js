/*!
 * to-caption
 *
 * Copyright 2016-2026 Steven Spungin
 * Released under the MIT license
 */

/**
 * Converts camelCase and delimited (dot, underscore, dash) strings to a caption.
 *
 * Leading and trailing delimiters are ignored.  Multiple delimiters are ignored.
 */

const DELIMITERS = '._-'

const rxUpper = /[A-Z]/

/**
 * Splits a string on delimiters, dropping empty words
 *
 * @param {string} str
 * @return {string[]}
 */
function toWords(str) {
  const words = []
  let word = ''
  for (const ch of str) {
    if (DELIMITERS.includes(ch)) {
      if (word) {
        words.push(word)
      }
      word = ''
    } else {
      word += ch
    }
  }
  if (word) {
    words.push(word)
  }
  return words
}

/**
 * Uppercases the first character and puts a space before each later uppercase letter
 *
 * @param {string} word
 * @return {string}
 */
function captionWord(word) {
  let caption = word[0].toUpperCase()
  for (const ch of word.substring(1)) {
    caption += rxUpper.test(ch) ? ' ' + ch : ch
  }
  return caption
}

/**
 * @param {string} word
 * @return {string}
 */
function titlecaseWord(word) {
  return word[0] + word.substring(1).toLowerCase()
}

/**
 *
 * @param str The string to convert
 * @param options onAllUppercase: undefined | 'default' | 'keep' | 'titlecase'
 * @return {string}
 */
export default function toCaption(str, options) {
  if (typeof str !== 'string') {
    return ''
  }
  const { onAllUppercase } = options || {}
  if (str === str.toUpperCase()) {
    if (onAllUppercase === 'keep') {
      return str
    }
    if (onAllUppercase === 'titlecase') {
      return toWords(str).map(titlecaseWord).join(' ')
    }
  }
  return toWords(str).map(captionWord).join(' ')
}

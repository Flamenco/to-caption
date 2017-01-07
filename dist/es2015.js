/*!
 * to-caption
 *
 * Copyright 2016 Steven Spungin
 * Released under the MIT license
 */

/**
 * Converts camelCase and delimited (dot, underscore, dash) strings to a caption.
 *
 * Leading and trailing delimiters are ignored.  Multiple delimiters are ignored.
 */

const rxUpper = /[A-Z]/;

export function toCaption(str) {
    const ret = [];
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];

        switch (ch) {
            case '_':
            case '.':
            case '-':
                if (ret.length > 0) {
                    let nextChar,
                        found = false;
                    while (i + 1 < str.length && !found) {
                        i++;
                        nextChar = str[i];
                        switch (nextChar) {
                            case '_':
                            case '.':
                            case '-':
                                break;
                            default:
                                found = true;
                                break;
                        }
                    }
                    if (found) {
                        ret.push(' ');
                        ret.push(nextChar.toUpperCase());
                    }
                }
                break;
            default:
                if (ret.length === 0) {
                    ret.push(ch.toUpperCase());
                } else {
                    if (rxUpper.test(ch)) {
                        ret.push(' ');
                    }
                    ret.push(ch);
                }
        }
    }

    return ret.join('');
}

/*!
 * to-caption
 *
 * Copyright 2016-2026 Steven Spungin
 * Released under the MIT license
 */

// Types for the CommonJS and browser (UMD) build; the declarations live in src/index.d.ts
declare const toCaption: typeof import('../src/index.js').default

export = toCaption

export as namespace toCaption

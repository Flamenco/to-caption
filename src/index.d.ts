/*!
 * to-caption
 *
 * Copyright 2016-2026 Steven Spungin
 * Released under the MIT license
 */

export interface ToCaptionOptions {
  /**
   * How to caption a string with no lowercase letters.
   * 'keep' returns it unchanged, 'titlecase' capitalizes each word,
   * anything else spaces every capital as its own word
   */
  onAllUppercase?: 'default' | 'keep' | 'titlecase' | null
}

declare function toCaption(text?: string | null, options?: ToCaptionOptions | null): string

export default toCaption

# to-caption

Converts camelCase, PascalCase and delimited strings to captions

> Delimiters are dot, underscore, and dash: \[ . _ - \]

## Examples
foo.bar / foo_bar / fooBar / foo-bar
> Foo Bar

\_hello_world\_
> Hello World

thisIsATest
> This Is A Test

## Usage

```bash
npm install --save to-caption
```

### ES module

```javascript
import toCaption from 'to-caption'

toCaption('helloWorld') // 'Hello World'
```

### CommonJS

```javascript
const toCaption = require('to-caption')

toCaption('helloWorld') // 'Hello World'
```

TypeScript declarations are included for both.

### Browser
A webpacked UMD build is included at `dist/toCaption.js`. The function is exported as `window.toCaption(...)`

```html
<html>
<head>
  <script src="https://unpkg.com/to-caption/dist/toCaption.js"></script>
  <script>
    console.log(toCaption('helloWorld'))
  </script>
</head>
</html>
```

## Rules
* Delimiters are period, dash, and underscore
* Leading, trailing and repeated delimiters are ignored
* Each delimiter becomes a single space, and the character after it is uppercased
* The first character is uppercased
* Uppercase letters are prefixed with spaces
* Any other character, such as a slash or a space, is kept as it is

## More samples
This table should give you an idea of the process.

ID | Label | Comment
-|-|-
this.is.a.test | This Is A Test
foo | Foo
Foo | Foo
foobar | Foobar
fooBar | Foo Bar
FooBar | Foo Bar
foo_bar | Foo Bar
foo.bar | Foo Bar
foo-bar | Foo Bar
foo/bar | Foo/bar | Slash is not a delimiter
\_foo | Foo
foo_ | Foo
\_foo\_ | Foo
\_foo_bar\_ | Foo Bar
\_\_foo | Foo
foo\_\_ | Foo
\-\-foo--bar\-\- | Foo Bar
FOOBAR | F O O B A R | See the `onAllUppercase` option to avoid this behavior
FOOBAR | FOOBAR | onAllUppercase = 'keep'
FOOBAR | Foobar | onAllUppercase = 'titlecase'
FOO_BAR | Foo Bar | onAllUppercase = 'titlecase'

## Options

The second argument is optional, and may be `undefined` or `null`

### onAllUppercase

```javascript
toCaption('HELLO', { onAllUppercase: 'keep' })
```

Sets the behavior when the string has no lowercase letters

#### 'keep'
The string is returned unchanged (HELLO)

#### 'titlecase'
Each delimited word becomes titlecase (HELLO_WORLD becomes Hello World)

#### 'default', undefined, null, or anything else
The string has spaces between each letter, as if each letter was a word (H E L L O)

## Development

```bash
npm run build        # webpack the UMD build into dist/
npm run copyright    # set the copyright year range in LICENSE and every source header
npm run lint         # eslint, including the no-semicolon and single-quote rules
npm test             # mocha, against both the ES module and the CommonJS build
npm run check:types  # verify the published types resolve for every consumer
npm run check:homepage  # confirm the homepage in package.json answers
```

`npm publish` runs all of these first, through `prepublishOnly`

The copyright holder and start year are set once, in `config.copyright` in `package.json`. The end year is always the current year, and `npm run lint` fails on any header that is out of date

The files in `test2/` are manual checks: `node test2/node_import.js`, `node test2/node_require.cjs`, and `test2/test.html` in a browser

## License
MIT. Check the LICENSE file for all the details.

# to-caption

Converts camelCase and delimited strings to captions.

>Delimiters are dot, underscore, and dash. \[ . _ - \]

## Examples
foo.bar / foo_bar / fooBar / foo-bar
>Foo Bar

\_hello_world\_
>Hello World

thisIsATest
>This Is A Test

## Usage
### Node / NPM
```bash
npm install --save to-caption
```

```javascript
const toCaption = require('to-caption');
const myCaption = toCaption('helloWorld');
// myCaption should now be 'Hello World';
```
### Browser
A webpacked distribution is included at dist/toCaption.js.  The function is exported at `window.toCaption(...)`
```html
<html>
<head>
  <script src="../dist/bundle.js"></script>
  <script>
    console.log(toCaption('helloWorld'))
  </script>
</head>
</html>
```


## Rules
* Delimiters are period, dash, and underscore.
* Leading and trailing delimiters are ignored.
* The first non-delimited character is capitalized (if not already capitalized).
* Underscores, dots, and slashes are replaced with spaces and the following non-delimiter character is uppercased.
* Uppercase letters are prefixed with spaces.

# More Samples
This table should give you an idea of the process.

ID|Label| Comment
-|-|-
this.is.a.test | This Is A Test
foo|Foo
Foo|Foo
foobar|Foobar
fooBar| Foo Bar
foo_bar | Foo Bar
foo.bar| Foo Bar
foo-bar | Foo Bar
\_foo|Foo
foo_ | Foo
\_foo\_| Foo
\_foo_bar\_ | Foo Bar
\_\_foo | Foo
foo\_\_ | Foo
\-\-foo--bar\-\- | Foo Bar
FOOBAR | F O O B A R | See option for `onAllUppercase` to avoid this behavior.
FOOBAR | FOOBAR | onAllUppercase = 'keep'
FOOBAR | Foobar | onAllUppercase = 'titlecase'

# Options

## onAllUppercase

```
toCaption('HELLO', {onAllUppercase: 'keep'})
```

This option will set the default behavior when the string is all uppercase
### 'keep'
The string will remain all uppercase. (HELLO)

### 'titlecase'
The string will become titlecase. (Hello)

### 'default', undefined, null, or anything else
The string will have spaces between each letter, as if each letter was a word. (H E L L O)

# License
MIT. Check the LICENSE file for all the details.

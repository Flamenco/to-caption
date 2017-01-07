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
```bash
npm install --save to-caption
```

```javascript
var toCaption = require('to-caption');
const myCaption = toCaption('helloWorld');
// myCaption should now be 'Hello World';
```
## Rules
* Delimiters are period, dash, and underscore.
* Leading and trailing delimiters are ignored.
* The first non-delimited character is capitalized (if not already capitalized).
* Underscores, dots, and slashes are replaced with spaces and the following non-delimiter character is uppercased.
* Uppercase letters are prefixed with spaces.

# More Samples
This table should give you an idea of the process.

ID|Label
-|-
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

# License
MIT. Check the LICENSE file for all the details.
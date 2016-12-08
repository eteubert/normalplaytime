# NormalPlayTime Parser

Parser for Normal Play Time (RFC 2326).

## Installation

```bash
npm install normalplaytime
```

## Example

```js
var npt = require('normalplaytime');

var ms1 = npt.parse("1");   // return 1000
var ms2 = npt.parse("1.2"); // return 1200

```

More Specs: (output from `npm test`)

```
should return null for invalid strings
should return 1000 for "1"
should return 1234 for "1.234"
should return 754000 for "12:34"
should return 754560 for "12:34.56"
should return 62000 for "1:2"
should return 3723400 for "1:2:3.4"
```

## Development

```
npm install
npm test
```

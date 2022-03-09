# echo

> echo command from bash ported to node.js

## Installation

```bash
npm install --save @bash-commands/echo
```

## Usage

```node
const echo = require('@bash-commands/echo');

// .... Your code here ....
function main() {
  try {
    // usage with default options
    echo(); // print 'echo working'

    // usage with custom options
    echo('Hello World!', {
      color: 'red',
      background: 'black',
      filter: 'bright',
    });
  } catch (err) {
    console.error(err);
  }
}
```

## Configuration (optional)

| Parameter | Type | Default | Description |
| --------- | ----- | ------- | ---------- |
| message   | `string` | `echo working` | Message to print to the stdout |
| options   | `object` | `{color: Colors, background: Backgrounds, filter: Filters}` | Configuration for the echo command, like passing `color` for text color, defining the background color (with `background`) or applying `filter` to the stdout text |

## Colors and filters

- `Colors`:

```typescript
  enum Colors {
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
  }
```

- `Backgrounds`:

```typescript
  enum Backgrounds {
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
  }
```

- `Filters`:

```typescript
  enum Filters {
    'reset',
    'bright',
    'dim',
    'underscore',
    'blink',
    'reverse',
    'hidden',
  }
```

## License

[![License: ISC](https://img.shields.io/badge/License-ISC-red.svg)](https://opensource.org/licenses/ISC)

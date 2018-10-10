# styled-base (WIP)

[![Version][version-badge]][npm]

[version-badge]: https://img.shields.io/npm/v/styled-base.svg?style=flat-square

[npm]: https://www.npmjs.com/package/styled-base

## Getting Started 

### 1. Install

```shell
npm install styled-base
# or
yarn add styled-base
```

### 2. Import

```js
import Base from 'styled-base'
```

### 3. Use

```jsx
<Base 
  css={{ 
    color: 'white',
    backgroundColor: 'black',
    ':hover': {
      backgroundColor: 'blue',
    },
  }}
>
  Hello World
</Base>
```

## Theming

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Base from 'styled-base'

const theme = {
  spacing: [
    '0',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
  ],
  colors: {
    blue: '#07f',
    gray: '#ccc',
  },
}

export default props => (
  <ThemeProvider theme={theme}>
    <Base 
      css={{
        display: 'inline-block',
        padding: '$spacing.1 $spacing.2',
        color: '$colors.blue',
      }}
    >
      Hello World
    </Base>
  </ThemeProvider>
)
```

You can theme individual components by passing a `theme` object directly:

```jsx
import React from 'react'
import Base from 'styled-base'

const theme = {
  colors: {
    green: '#0f7',
  },
}

export default props => (
  <Base
    theme={theme}
    css={{ color: '$colors.green' }}
  >
    Hello World
  </Base>
)
```

## Pseudo-selectors

```jsx
<Base
  css={{
    color: 'blue',
    ':hover': {
      color: 'red',
    },
    '::before': {
      content: '"✌️"',
    },
  }}
>
  Hello World
</Base>
```

## Responsive styles

```js
const theme = {
  spacing: [
    '0',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
  ],
  breakpoints: [
    '576px',
    '768px',
    '992px',
    '1200px',
  ],
}
```

```jsx
<Base
  css={{
    padding: ['$spacing.1', '$spacing.2'],
  }}
/>
  Hello World
</Base>
```

## Further reading

* [Patterns for Style Composition in React](http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/) by [Brent Jackson](https://twitter.com/jxnblk)

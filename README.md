# styled-base

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
    '&:hover': {
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
  colors: {
    blue: '#07f',
    gray: '#ccc',
  },
  spacing: [
    '0',
    '4px',
    '8px',
    '16px',
    '24px',
    '32px',
  ],
}

export default props => (
  <ThemeProvider theme={theme}>
    <Base 
      css={{ 
        padding: 'spacing.2',
        color: 'colors.blue',
      }}
    >
      Hello World
    </Base>
  </ThemeProvider>
)
```

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
    css={{ color: 'colors.green' }}
  >
    Hello World
  </Base>
)
```

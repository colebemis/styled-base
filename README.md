# styled-base (WIP)

[![Version][version-badge]][npm]

[version-badge]: https://img.shields.io/npm/v/styled-base.svg?style=flat-square

[npm]: https://www.npmjs.com/package/styled-base

## Table of contents

* [Motivation](#motivation)
* [Getting started](#getting-started)
* [Props](#props)
  * [`as`](#as)
  * [`css`](#css)
  * [`theme`](#theme)
* [Usage](#usage)
  * [Theming](#theming)
  * [Pseudo-selectors](#pseudo-selectors)
  * [Responsive styles](#responsive-styles)
  * [Extending](#extending)
* [Further reading](#further-reading)

## Motivation

*Work in progress*

## Getting started 

**1. Install**

```shell
npm install styled-base styled-components@beta
# or
yarn add styled-base styled-components@beta
```

**2. Import**

```js
import Base from 'styled-base'
```

**3. Use**

```jsx
<Base
  as="span"
  css={{ 
    color: 'white',
    backgroundColor: 'black',
    '&::before': {
      content: '"🌎"',
    },
  }}
>
  Hello World
</Base>
```

## Props

### `as`

Type: `string` or `func`

```jsx
<Base as="button" />
<Base as={Link} />
```

### `css`

Type: `object`

```jsx
<Base css={{ fontFamily: 'sans-serif', color: 'red' }} />
```

### `theme`

Type: `object`

## Usage

### Theming

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

#### Setting a default theme

```js
import { createBase } from 'styled-base'
import theme from './path/to/theme'

const Base = createBase(theme)

export default Base
```

### Pseudo-selectors

```jsx
<Base
  css={{
    color: 'blue',
    '&:hover': {
      color: 'red',
    },
    '&::before': {
      content: '"🌎"',
    },
  }}
>
  Hello World
</Base>
```

### Responsive styles

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
    padding: [
      '$spacing.1', // 4px at all viewport widths
      '$spacing.2', // 8px from the next breakpoint (576px) and up
      '$spacing.3', // 16px from the next breakpoint (768px) and up
    ],
  }}
/>
  Hello World
</Base>
```

To skip setting a value at a particular breakpoint, use a `null` value in the array:

```jsx
<Base
  css={{
    padding: [
      '$spacing.1', // 4px at all viewport widths
      null,         // skip the next breakpoint (576px) (stays 4px)
      '$spacing.2', // 8px from the next breakpoint (768px) and up
    ],
  }}
/>
  Hello World
</Base>
```

### Extending

```jsx
import React from 'react'
import Base from 'styled-base'

function Container({ css, ...props }) {
  return (
    <Base
      css={{
        margin: '0 auto',
        maxWidth: '960px',
        ...css,
      }}
      {...props}
    />
  )
}
```

## Further reading

* [Patterns for Style Composition in React](http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/) by [Brent Jackson](https://twitter.com/jxnblk)

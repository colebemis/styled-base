import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import Base from '..'

it('accepts an `as` prop to change the rendered DOM element', () => {
  const { container } = render(<Base as="span">Hello World</Base>)

  expect(container.firstChild).toMatchSnapshot()
})

it('accepts a `css` prop', () => {
  const { container } = render(<Base css={{ color: 'red' }}>Hello World</Base>)

  expect(container.firstChild).toMatchSnapshot()
})

it('accepts a `theme` prop', () => {
  const theme = {
    colors: {
      blue: '#07f',
    },
  }

  const { container } = render(
    <Base theme={theme} css={{ color: '$colors.blue' }}>
      Hello World
    </Base>,
  )

  expect(container.firstChild).toMatchSnapshot()
})

describe('`css` prop', () => {
  it('supports nesting', () => {
    const { container } = render(
      <Base
        css={{
          boxSizing: 'border-box',
          '.foo': { color: 'red' },
          '& *, & *::before, & *::after': { boxSizing: 'inherit' },
        }}
      >
        Hello World
      </Base>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('supports pseudo-classes and pseudo-elements', () => {
    const { container } = render(
      <Base
        css={{
          color: 'red',
          '&:hover': { color: 'blue' },
          '&::before': { content: '"🌎"' },
        }}
      >
        Hello World
      </Base>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('evaluates theme keys prefixed with "$"', () => {
    const theme = {
      spacing: ['0', '4px', '8px', '16px', '24px', '32px'],
      colors: {
        blue: '#07f',
        gray: '#ccc',
      },
    }

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Base
          css={{
            display: 'inline-block',
            padding: '$spacing.1 $spacing.2',
            margin: '-$spacing.1 auto',
            color: '$colors.blue',
            backgroundColor: '$foo',
          }}
        >
          Hello World
        </Base>
      </ThemeProvider>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('supports responsive values', () => {
    const theme = {
      spacing: ['0', '4px', '8px', '16px', '24px', '32px'],
      fontSizes: ['12px', '14px', '16px', '20px', '24px'],
      breakpoints: ['576px', '768px', '992px'],
    }

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Base
          css={{
            width: ['100%', '50%'],
            margin: [],
            padding: ['$spacing.0', '$spacing.1', '$spacing.2', '$spacing.3'],
            fontSize: [
              null,
              '$fontSizes.0',
              null,
              '$fontSizes.1',
              '$fontSizes.2',
            ],
          }}
        >
          Hello World
        </Base>
      </ThemeProvider>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('provides default breakpoints', () => {
    const { container } = render(
      <Base css={{ width: ['100%', '90%', '80%', '70%', '60%'] }}>
        Hello World
      </Base>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})

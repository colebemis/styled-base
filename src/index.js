import { object } from 'prop-types'
import styled from 'styled-components'

const DEFAULT_BREAKPOINTS = ['576px', '768px', '992px', '1200px']

const Base = styled.div(props => transform(props.css, props.theme))

function transform(css, theme) {
  if (!css) return null

  const breakpoints = [
    null,
    ...(get('breakpoints', theme) || DEFAULT_BREAKPOINTS).map(toMediaQuery),
  ]

  return Object.entries(css).reduce((acc, [property, value]) => {
    if (Array.isArray(value)) {
      const declarations = value.reduce((declarations, currentValue, index) => {
        if (index >= breakpoints.length) return declarations

        if (breakpoints[index]) {
          declarations[breakpoints[index]] = {
            ...acc[breakpoints[index]],
            [property]: supplant(currentValue, theme),
          }
        } else {
          declarations[property] = supplant(currentValue, theme)
        }

        return declarations
      }, {})

      return { ...acc, ...declarations }
    }

    if (typeof value === 'object') {
      return { ...acc, [property]: transform(value, theme) }
    }

    return { ...acc, [property]: supplant(value, theme) }
  }, {})
}

function supplant(value, obj) {
  if (typeof value !== 'string') return value

  return value.replace(
    /\$[(a-z)(A-Z)(0-9)(.)]+/g,
    match => get(match.slice(1), obj) || match,
  )
}

function get(path, obj) {
  return path
    .split('.')
    .reduce((acc, key) => (acc && acc[key] ? acc[key] : null), obj)
}

function toMediaQuery(value) {
  return `@media screen and (min-width: ${value})`
}

Base.propTypes = {
  /** Style object */
  css: object,
}

export default Base

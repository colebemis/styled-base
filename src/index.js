import { object } from 'prop-types'
import styled from 'styled-components'

const Base = styled.div(props => transform(props.css, props.theme))

function transform(css, theme) {
  if (!css) return null

  return Object.entries(css).reduce((acc, [property, value]) => {
    switch (typeof value) {
      case 'object':
        acc[property] = transform(value, theme)
        break

      case 'string':
        acc[property] = supplant(value, theme)
        break

      default:
        acc[property] = value
    }

    return acc
  }, {})
}

function supplant(string, obj) {
  return string.replace(
    /\$[(a-z)(A-Z)(0-9)(.)]+/g,
    match => get(match.slice(1), obj) || match,
  )
}

function get(path, obj) {
  return path
    .split('.')
    .reduce((acc, key) => (acc && acc[key] ? acc[key] : null), obj)
}

Base.propTypes = {
  /** Style object */
  css: object,
}

export default Base

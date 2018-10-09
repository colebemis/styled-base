import { object } from 'prop-types'
import styled from 'styled-components'

const Base = styled.div(props => props.css)

Base.propTypes = {
  /** Style object */
  css: object,
}

export default Base

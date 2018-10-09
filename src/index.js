import { object } from 'prop-type'
import styled from 'styled-components'

const Base = styled.div(props => props.css)

Base.propTypes = {
  /** Style object */
  css: object,
}

export default Base

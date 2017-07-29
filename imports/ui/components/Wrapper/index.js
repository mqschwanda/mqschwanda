/**
  The `<Wrapper/>` component...
**/

import styled from 'styled-components';

export default styled.div`
  ${props => (props.fullWidth ? 'width: 100%;' : '')}
  ${props => (props.centerText ? 'text-align: center;' : '')}
`;

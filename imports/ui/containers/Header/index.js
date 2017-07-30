/* eslint-disable max-len */

import React from 'react';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { content } from 'modules';
import { H1, H2, H3, H4, H5, H6, P, Wrapper } from 'components';

export default class Header extends React.PureComponent {
  render() {
    return (
      <Wrapper centerText fullWidth>
        <H1 {...content.header}/>
        <H2 {...content.header}/>
        <H3 {...content.header}/>
        <H4 {...content.header}/>
        <H5 {...content.header}/>
        <H6 {...content.header}/>
        <P>
          Here is some text to write in the center
        </P>
      </Wrapper>
    );
  }
}

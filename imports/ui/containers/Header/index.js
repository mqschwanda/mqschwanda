/* eslint-disable max-len */

import React from 'react';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { content, flowtype } from 'modules';
import { H1, Wrapper } from 'components';

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.flowtype = flowtype.bind(this);
  }
  componentDidMount() {
    this.flowtype({ minFont: 12, maxFont: 40 });
  }
  render() {
    return (
      <Wrapper centerText fullWidth>
        <H1 {...content.header}/>
      </Wrapper>
    );
  }
}

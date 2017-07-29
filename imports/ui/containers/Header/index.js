/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { content } from 'modules';

import { H1, Wrapper } from 'components';

export default class Header extends React.PureComponent {
  render() {
    return (
      <Wrapper centerText fullWidth>
        <H1 {...content.header}/>
      </Wrapper>
    );
  }
}

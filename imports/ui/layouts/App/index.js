/* eslint-disable no-unused-expressions, max-len */

import React from 'react';
import PropTypes from 'prop-types';
import sizeMe from 'react-sizeme'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'; // eslint-disable-line no-unused-vars

import { Header } from 'containers';
// import { content } from 'modules';
import { updateSize } from 'reducers/size';

@sizeMe()
@connect()
export default class App extends React.PureComponent {
  static propTypes = { size: PropTypes.object }
  shouldComponentUpdate(nextProps) { return this.props.size !== nextProps.size; }
  componentDidUpdate() { this.props.dispatch(updateSize(this.props.size)); }
  render() { return <Header />; }
}

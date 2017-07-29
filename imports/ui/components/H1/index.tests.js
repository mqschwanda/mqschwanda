/**

**/
import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';

import H1 from './index';

const shallowComponent = (props = {}) => shallow(<H1 {...props} />);
const mountComponent = (props = {}) => mount(<H1 {...props} />);

describe('<H1 />', () => {
  if (Meteor.isClient) {
    it('should render a `<h1>` tag', () => {
      const Component = shallowComponent();
      expect(Component.type()).toEqual('h1');
    });
    describe('props', () => {
      it('should adopt a `children` prop', () => {
        const children = (<h1>Test</h1>);
        const Component = mountComponent({ children });
        expect(Component.props().children).toEqual(children);
      });
      it('should render children from it\'s `children` prop', () => {
        const children = (<h1>Test</h1>);
        const Component = shallowComponent({ children });
        expect(Component.contains(children)).toBe(true);
      });
    });
  }
});

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import md5 from 'md5';

import Gravatar from '../src/gravatar';
import Avatar from '../src/avatar';
import Email from '../src/email';

describe('<Gravatar />', () => {
  let wrapper;

  before(() => {
    wrapper = mount(<Gravatar />);
  });

  it('should contain <Avatar />-component', () => {
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('should contain <Email />-component', () => {
    expect(wrapper.find(Email)).to.have.length(1);
  });

  it('should have an initial email state', () => {
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should have an initial src state', () => {
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state on clicking \'fetch\'', () => {
    wrapper.setState({ email: 'hello@ifelse.io' });
    wrapper.find('button').simulate('click');

    expect(wrapper.state('email')).to.equal('hello@ifelse.io');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('hello@ifelse.io')}?s=200`);
  });
});

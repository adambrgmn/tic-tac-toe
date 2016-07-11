// import React from 'react';
// import { mount, shallow } from 'enzyme';
// import { expect } from 'chai';
//
// import { App } from './index';
//
// describe('Component: <App />', () => {
//   it('should render a root div', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('div')).to.have.length(1);
//   });
//
//   it('should render Menu if showScreen is equal to menu', () => {
//     const wrapper = mount(<App showScreen="menu" />);
//     expect(wrapper.find('.menu')).to.have.length(1);
//   });
//
//   it('should render Game if showScreen is equal to game', () => {
//     const wrapper = mount(<App showScreen="menu" />);
//     expect(wrapper.find('.menu')).to.have.length(1);
//   });
//
//   it('should render Settings if showSettings is true', () => {
//     const wrapper = mount(<App showSettings />);
//     expect(wrapper.find('.settings')).to.have.length(1);
//   });
//
//   it('should have props properly setup', () => {
//     const wrapper = mount(<App showScreen="menu" showSettings={false} />);
//     expect(wrapper.props().showScreen).to.equal('menu');
//     expect(wrapper.props().showSettings).to.equal(false);
//
//     wrapper.setProps({ showScreen: 'game', showSettings: true });
//     expect(wrapper.props().showScreen).to.equal('game');
//     expect(wrapper.props().showSettings).to.equal(true);
//   });
// });

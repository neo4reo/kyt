import test from 'ava';
var React= require('react');
var chai = require('chai');
var enzyme= require('enzyme');
var jsdom = require('jsdom');
import Demo from '../demo.js';
test('one', t => {
    var sheet = {
      classes: {
        demo: "demo"
      }
    };
    const wrapper = enzyme.shallow(
      <Demo/>);
    t.pass(chai.assert.isTrue(wrapper.hasClass('demo')));
});
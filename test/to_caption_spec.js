/*!
 * to-caption
 *
 * Copyright 2016 Steven Spungin
 * Released under the MIT license
 */

import {expect} from "chai";
import toCaption from "../src/index";

describe('toCaption', () => {

  it('converts lowercase', () => {
    expect(toCaption('foobar')).to.equal('Foobar');
  });

  it('accepts uppercast', () => {
    expect(toCaption('Foobar')).to.equal('Foobar');
  });

  it('converts camelcase', () => {
    expect(toCaption('fooBar')).to.equal('Foo Bar');
  });

  it('converts dot', () => {
    expect(toCaption('foo.bar')).to.equal('Foo Bar');
  });

  it('converts dash', () => {
    expect(toCaption('foo-bar')).to.equal('Foo Bar');
  });

  it('converts underscore', () => {
    expect(toCaption('foo_bar')).to.equal('Foo Bar');
  });

  it('converts multiple delimiters', () => {
    expect(toCaption('foo----bar')).to.equal('Foo Bar');
  });

  it('converts multiple prefix ', () => {
    expect(toCaption('-----foo-bar')).to.equal('Foo Bar');
  });

  it('converts multiple suffix ', () => {
    expect(toCaption('foo-bar----')).to.equal('Foo Bar');
  });

  it('accepts null ', () => {
    expect(toCaption(null)).to.equal('');
  });

  it('accepts undefined ', () => {
    expect(toCaption(undefined)).to.equal('');
  });

  it('accepts nothing ', () => {
    expect(toCaption()).to.equal('');
  });

  it('handles all uppercase -> default', () => {
    expect(toCaption('HELLO')).to.equal('H E L L O');
  });

  it('handles all uppercase -> titlecase', () => {
    expect(toCaption('HELLO', {onAllUppercase: 'titlecase'})).to.equal('Hello');
  });

  it('handles all uppercase with separator -> titlecase', () => {
    expect(toCaption('HELLO_WORLD', {onAllUppercase: 'titlecase'})).to.equal('Hello World');
  });

  it('handles all uppercase -> keep', () => {
    expect(toCaption('HELLO', {onAllUppercase: 'keep'})).to.equal('HELLO');
  });

});


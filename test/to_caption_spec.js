/*!
 * to-caption
 *
 * Copyright 2016 Steven Spungin
 * Released under the MIT license
 */

import {expect} from "chai";
import {toCaption} from "../src/index";

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
});


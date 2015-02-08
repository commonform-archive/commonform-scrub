/* jshint mocha: true */
var expect = require('chai').expect;
var scrub = require('..');

var validForm = {content: ['test']};

var validProject = {
  commonform: '0.0.1',
  metadata: {title: 'Test'},
  values: {},
  preferences: {},
  form: validForm
};

describe('scrub', function() {
  it('is a function', function() {
    expect(scrub)
      .to.be.a('function');
  });

  it('throws an error for an invalid project', function() {
    expect(function() {
      scrub({});
    })
      .to.throw('Invalid project');
  });
});

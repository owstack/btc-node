'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export btccore-lib', function() {
    var btccore = require('../');
    should.exist(btccore.lib);
    should.exist(btccore.lib.Transaction);
    should.exist(btccore.lib.Block);
  });
});

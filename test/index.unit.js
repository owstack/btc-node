'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export btc-lib', function() {
    var btcLib = require('../');
    should.exist(btcLib.lib);
    should.exist(btcLib.lib.Transaction);
    should.exist(btcLib.lib.Block);
  });
});

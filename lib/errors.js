'use strict';

var createError = require('errno').create;

var BtccoreNodeError = createError('BtccoreNodeError');

var RPCError = createError('RPCError', BtccoreNodeError);

module.exports = {
  Error: BtccoreNodeError,
  RPCError: RPCError
};

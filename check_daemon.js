/*jslint node: true */
"use strict";
var check_daemon = require('intervaluecore-1.0-testnet/check_daemon.js');

check_daemon.checkDaemonAndRestart('node start.js', 'node start.js > log');


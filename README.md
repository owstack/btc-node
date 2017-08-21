Btccore Node
============

A Bitcoin full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Bitcoin Core with additional indexing](https://github.com/owstack/bitcoin/tree/0.12.1-btccore) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Attribution

This repository was created by copy forking [bitcore-node 3a86782] (https://github.com/bitpay/bitcore-node/commit/3a867824d66a96ab26af37fa3b3da2cd16e62f4a).

## Install

```bash
npm install -g btccore-node
btccore-node start
```

Note: For your convenience, we distribute bitcoind binaries for x86_64 Linux and x86_64 Mac OS X. Upon npm install, the binaries for your platform will be downloaded. For more detailed installation instructions, or if you want to compile the project yourself, then please see the Btccore branch of [Bitcoin Core with additional indexing](https://github.com/owstack/bitcoin/tree/0.12.1-btccore).

## Prerequisites

- GNU/Linux x86_32/x86_64, or OSX 64bit *(for bitcoind distributed binaries)*
- Node.js v0.10, v0.12 or v4
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~200GB of disk storage
- ~8GB of RAM

## Configuration

Btccore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Btccore Node.

```bash
btccore-node create -d <bitcoin-data-dir> mynode
cd mynode
btccore-node install <service>
btccore-node install https://github.com/yourname/helloworld
```

This will create a directory with configuration files for your node and install the necessary dependencies. For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Btccore:

- [Explorer API](https://github.com/owstack/explorer-api)
- [Explorer](https://github.com/owstack/ows-explorer)
- [Btccore Wallet Service](https://github.com/owstack/btccore-wallet-service)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Bitcoind](docs/services/bitcoind.md) - Interface to Bitcoin Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/owstack/btccore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/owstack/btccore-node/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack.

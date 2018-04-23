#!/usr/bin/env node

var Web3 = require('web3');


if (typeof web3 !== 'undefined') {
	console.log('web3 is already defined')
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  //web3 = new Web3(new Web3.providers.HttpProvider("https://rpc3.makerdao.com"));
  //web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/zWDtcNMhNMHMyMYpiVs5"))
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

console.log('--------------------');
console.log('Web3 version: ' + web3.version.api);
console.log('Node: ' + web3.version.node);
console.log('Network: ' + web3.version.network);
console.log('Current Provider: ' + web3.currentProvider);
console.log('--------------------');
console.log('');


var proxyResgistryAbi = [
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "proxies",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "build",
        "outputs": [
          {
            "name": "proxy",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "proxiesCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "build",
        "outputs": [
          {
            "name": "proxy",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "factory_",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ];


 var dsProxyAbi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner_",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_target",
          "type": "address"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "name": "response",
          "type": "bytes32"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_code",
          "type": "bytes"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "execute",
      "outputs": [
        {
          "name": "target",
          "type": "address"
        },
        {
          "name": "response",
          "type": "bytes32"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "cache",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "authority_",
          "type": "address"
        }
      ],
      "name": "setAuthority",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_cacheAddr",
          "type": "address"
        }
      ],
      "name": "setCache",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "authority",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_cacheAddr",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": true,
      "inputs": [
        {
          "indexed": true,
          "name": "sig",
          "type": "bytes4"
        },
        {
          "indexed": true,
          "name": "guy",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "foo",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "bar",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "wad",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "fax",
          "type": "bytes"
        }
      ],
      "name": "LogNote",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "authority",
          "type": "address"
        }
      ],
      "name": "LogSetAuthority",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "LogSetOwner",
      "type": "event"
    }
  ];


  var dsTokenAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "stop",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "guy",
          "type": "address"
        },
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner_",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "dst",
          "type": "address"
        },
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "guy",
          "type": "address"
        },
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "name_",
          "type": "bytes32"
        }
      ],
      "name": "setName",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "stopped",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "authority_",
          "type": "address"
        }
      ],
      "name": "setAuthority",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "guy",
          "type": "address"
        },
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dst",
          "type": "address"
        },
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dst",
          "type": "address"
        },
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "push",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "dst",
          "type": "address"
        },
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "move",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "start",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "authority",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "guy",
          "type": "address"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "guy",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "pull",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "symbol_",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "guy",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "guy",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "authority",
          "type": "address"
        }
      ],
      "name": "LogSetAuthority",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "LogSetOwner",
      "type": "event"
    },
    {
      "anonymous": true,
      "inputs": [
        {
          "indexed": true,
          "name": "sig",
          "type": "bytes4"
        },
        {
          "indexed": true,
          "name": "guy",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "foo",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "bar",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "wad",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "fax",
          "type": "bytes"
        }
      ],
      "name": "LogNote",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "src",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "guy",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "src",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "dst",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "wad",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ];

  loadObject = (abi, address) => {
    return web3.eth.contract(abi).at(address);
  }

  getProxyOwner = (proxy) => {
    return new Promise((resolve, reject) => {
      this.loadObject(dsProxyAbi, proxy).owner((e, r) => {
        if (!e) {
          resolve(r);
        } else {
          reject(e);
        }
      });
    });
  }

var proxyRegistryAddress = "0xaa63c8683647ef91b3fdab4b4989ee9588da297b";
var proxyRegistryContract = web3.eth.contract(proxyResgistryAbi).at(proxyRegistryAddress);
var myWalletAddress = "0xaB2025180df1f3f3c4ab7790202bF1EA0D873130";
var c = proxyRegistryContract.proxiesCount(myWalletAddress);
console.log("Result from synch call is: ", c);
console.log("Number of proxies: ", c.toNumber());

for (let i = 0; i < c.toNumber(); i++) {
	var proxy = proxyRegistryContract.proxies(myWalletAddress, i);
	proxyObj = web3.eth.contract(dsProxyAbi).at(proxy);
	var owner = proxyObj.owner();
	console.log(proxy, " : " , owner);
}

proxy = proxyRegistryContract.proxies(myWalletAddress, 4);


var DAI = "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359";
var MKR = "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2";
var WETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

var daiContract = web3.eth.contract(dsTokenAbi).at(DAI);
var mkrContract = web3.eth.contract(dsTokenAbi).at(MKR);
var wethContract = web3.eth.contract(dsTokenAbi).at(WETH);

console.log("DAI: ", daiContract.balanceOf(myWalletAddress).toNumber());
console.log("MKR: ", mkrContract.balanceOf(myWalletAddress).toNumber());
console.log("WETH: ", wethContract.balanceOf(myWalletAddress).toNumber());

console.log("DAI approval for proxy: ", daiContract.allowance(myWalletAddress, proxy).toNumber());
console.log("MKR approval for proxy: ", mkrContract.allowance(myWalletAddress, proxy).toNumber());
console.log("WETH approval for proxy: ", wethContract.allowance(myWalletAddress, proxy).toNumber());


console.log("Now using async call");

proxyRegistryContract.proxiesCount(myWalletAddress, async (e, r) => {
	if (!e) {
		console.log("Result from asynch: ", r);
		console.log(r.gt(0));
		console.log(r.toNumber());
	}
})

var i = proxyRegistryContract.proxies(myWalletAddress, 1, console.log);





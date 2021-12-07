(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        198: function(e, t) {
            function n(e) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                    t
            }
            n.keys = function() {
                    return []
                },
                n.resolve = n,
                e.exports = n,
                n.id = 198
        },
        199: function(e, t) {},
        206: function(e, t, n) {
            e.exports = n(513)
        },
        227: function(e, t) {},
        236: function(e, t) {},
        254: function(e, t) {},
        256: function(e, t) {},
        272: function(e, t) {},
        273: function(e, t) {},
        335: function(e, t) {},
        337: function(e, t) {},
        369: function(e, t) {},
        371: function(e, t) {},
        372: function(e, t) {},
        377: function(e, t) {},
        379: function(e, t) {},
        385: function(e, t) {},
        387: function(e, t) {},
        400: function(e, t) {},
        412: function(e, t) {},
        415: function(e, t) {},
        420: function(e, t) {},
        428: function(e, t) {},
        504: function(e, t, n) {},
        507: function(e, t) {},
        508: function(e, t) {},
        509: function(e, t) {},
        510: function(e, t) {},
        511: function(e, t) {},
        512: function(e, t) {},
        513: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(6),
                i = n.n(a),
                s = n(201),
                u = n.n(s),
                r = (n(211),
                    n(16)),
                p = n.n(r),
                o = n(32),
                l = n(5),
                d = n(12),
                y = n(10),
                c = n(7),
                m = n(13),
                b =





                [{ "inputs": [{ "internalType": "address", "name": "_dexRouter", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amountBNB", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amountBOG", "type": "uint256" }], "name": "AutoLiquify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "duration", "type": "uint256" }], "name": "BuybackMultiplierActive", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "MASK", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WBNB", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "approveMax", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "adr", "type": "address" }], "name": "authorize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "autoBuybackEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "autoLiquidityReceiver", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "clearBuybackMultiplier", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "distributorAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCirculatingSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "accuracy", "type": "uint256" }], "name": "getLiquidityBacking", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getMultipliedFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "selling", "type": "bool" }], "name": "getTotalFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "adr", "type": "address" }], "name": "isAuthorized", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "target", "type": "uint256" }, { "internalType": "uint256", "name": "accuracy", "type": "uint256" }], "name": "isOverLiquified", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "launch", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "launchedAt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "launchedAtTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "marketingFeeReceiver", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "router", "outputs": [{ "internalType": "contract IDEXRouter", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_enabled", "type": "bool" }, { "internalType": "uint256", "name": "_cap", "type": "uint256" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }, { "internalType": "uint256", "name": "_period", "type": "uint256" }], "name": "setAutoBuybackSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "numerator", "type": "uint256" }, { "internalType": "uint256", "name": "denominator", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "setBuybackMultiplierSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_minPeriod", "type": "uint256" }, { "internalType": "uint256", "name": "_minDistribution", "type": "uint256" }], "name": "setDistributionCriteria", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "gas", "type": "uint256" }], "name": "setDistributorSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_autoLiquidityReceiver", "type": "address" }, { "internalType": "address", "name": "_marketingFeeReceiver", "type": "address" }], "name": "setFeeReceivers", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_liquidityFee", "type": "uint256" }, { "internalType": "uint256", "name": "_buybackFee", "type": "uint256" }, { "internalType": "uint256", "name": "_reflectionFee", "type": "uint256" }, { "internalType": "uint256", "name": "_marketingFee", "type": "uint256" }, { "internalType": "uint256", "name": "_feeDenominator", "type": "uint256" }], "name": "setFees", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "setIsDividendExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "setIsFeeExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "holder", "type": "address" }, { "internalType": "bool", "name": "exempt", "type": "bool" }], "name": "setIsTxLimitExempt", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_enabled", "type": "bool" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "setSwapBackSettings", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_target", "type": "uint256" }, { "internalType": "uint256", "name": "_denominator", "type": "uint256" }], "name": "setTargetLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "setTxLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "swapThreshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "adr", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "bool", "name": "triggerBuybackMultiplier", "type": "bool" }], "name": "triggerZeusBuyback", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "adr", "type": "address" }], "name": "unauthorize", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }]




            , w = n(107), f = n.n(w), T = (n(504),
                a.Component,
                n(506),
                function(e) {
                    function t(e) {
                        var n;
                        return Object(l.a)(this, t),
                            (n = Object(d.a)(this, Object(y.a)(t).call(this, e))).balanceBUSDRewards = 0,
                            n.totalBUSDRewards = 0,
                            n.networkId = 0,
                            n.bigNumber = "1000000000000000000",
                            n.babyBUSTContract = "0x02f53Aa9CAE455cd2ddbAa790507F8F838A0ec50",
                            n.busdApp = null,
                            n.web3 = null,
                            n.CheckWalletConnection = function() {
                                return n.state.account.length > 0 ? i.a.createElement("button", {
                                    class: "bdr1",
                                    onClick: function() {
                                        n.disconnect()
                                    }
                                }, n.state.account.substr(0, 6), "..", n.state.account.substr(38, 4)) : i.a.createElement("button", {
                                    class: "bdr1",
                                    onClick: function() {
                                        n.connect()
                                    }
                                }, "Connect")
                            },
                            n.ReadNetworkAndPage = function() {
                                return n.state.networkId,
                                    null
                            },
                            n.state = {
                                account: "",
                                loading: !0,
                                networkId: 0,
                                balanceOf: 0,
                                walletRewards: 0,
                                totalBUSDRewards: 0,
                                balanceBUSDRewards: 0
                            },
                            n
                    }
                    return Object(m.a)(t, e),
                        Object(c.a)(t, [{
                            key: "componentWillMount",
                            value: function() {
                                var e = Object(o.a)(p.a.mark(function e() {
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        this.loadWeb3();
                                                case 2:
                                                    if (null === this.web3) {
                                                        e.next = 7;
                                                        break
                                                    }
                                                    return e.next = 5,
                                                        this.loadNetwork();
                                                case 5:
                                                    return e.next = 7,
                                                        this.loadContract();
                                                case 7:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }, e, this)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "loadWeb3",
                            value: function() {
                                var e = Object(o.a)(p.a.mark(function e() {
                                    var t = this;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    window.ethereum ? (window.web3 = new f.a(window.ethereum),
                                                            this.web3 = window.web3) : window.web3 ? (window.web3 = new f.a(window.web3.currentProvider),
                                                            this.web3 = window.web3) : window.alert("This dAPP supports Metamask, Trustwallet and Safepal, no active web3 connection was found on your browser."),
                                                        window.ethereum || window.web3 ? (window.ethereum.on("accountsChanged", function(e) {}),
                                                            window.ethereum.on("networkChanged", function(e) {
                                                                t.setState({
                                                                    networkId: e
                                                                })
                                                            })) : console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live");
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }, e, this)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "wait",
                            value: function(e) {
                                return new Promise(function(t, n) {
                                    return setTimeout(t, e)
                                })
                            }
                        }, {
                            key: "loadNetwork",
                            value: function() {
                                var e = Object(o.a)(p.a.mark(function e() {
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.t0 = this,
                                                        e.next = 3,
                                                        this.web3.eth.net.getId();
                                                case 3:
                                                    e.t1 = e.sent,
                                                        e.t2 = {
                                                            networkId: e.t1
                                                        },
                                                        e.t0.setState.call(e.t0, e.t2);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }, e, this)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "loadContract",
                            value: function() {
                                var e = Object(o.a)(p.a.mark(function e() {
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return this.busdApp = new this.web3.eth.Contract(b, this.babyBUSTContract),
                                                        e.t0 = this,
                                                        e.next = 4,
                                                        this.busdApp.methods.getTotalDividendsDistributed().call();
                                                case 4:
                                                    e.t1 = e.sent,
                                                        e.t2 = this.bigNumber,
                                                        e.t3 = (e.t1 / e.t2).toFixed(2),
                                                        e.t4 = {
                                                            totalBUSDRewards: e.t3
                                                        },
                                                        e.t0.setState.call(e.t0, e.t4);
                                                case 9:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }, e, this)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "connect",
                            value: function() {
                                var e = Object(o.a)(p.a.mark(function e() {
                                    var t;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        window.ethereum.enable();
                                                case 2:
                                                    return e.next = 4,
                                                        this.web3.eth.getAccounts();
                                                case 4:
                                                    return t = e.sent,
                                                        this.setState({
                                                            account: t[0]
                                                        }),
                                                        e.t0 = this,
                                                        e.next = 9,
                                                        this.busdApp.methods.getAccountDividendsInfo(this.state.account).call();
                                                case 9:
                                                    e.t1 = e.sent[4],
                                                        e.t2 = this.bigNumber,
                                                        e.t3 = (e.t1 / e.t2).toFixed(2),
                                                        e.t4 = {
                                                            walletRewards: e.t3
                                                        },
                                                        e.t0.setState.call(e.t0, e.t4);
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }, e, this)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "disconnect",
                            value: function() {
                                var e = Object(o.a)(p.a.mark(function e() {
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    this.setState({
                                                        account: "",
                                                        walletRewards: 0
                                                    });
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }, e, this)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "claim",
                            value: function() {
                                var e = Object(o.a)(p.a.mark(function e() {
                                    var t = this;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                        new Promise(function(e, n) {
                                                            t.busdApp.methods.claim().send({
                                                                from: t.state.account,
                                                                gas: t.claimBUSDGas
                                                            }).on("confirmation", function(t) {
                                                                e()
                                                            }).on("error", function(e) {
                                                                n(e)
                                                            })
                                                        });
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }, e)
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "readWallet",
                            value: function() {
                                var e = Object(o.a)(p.a.mark(function e() {
                                    var t;
                                    return p.a.wrap(function(e) {
                                        for (;;)
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return t = document.getElementById("walletToCheck").value,
                                                        e.prev = 1,
                                                        e.t0 = this,
                                                        e.next = 5,
                                                        this.busdApp.methods.getAccountDividendsInfo(t).call();
                                                case 5:
                                                    e.t1 = e.sent[4],
                                                        e.t2 = this.bigNumber,
                                                        e.t3 = (e.t1 / e.t2).toFixed(2),
                                                        e.t4 = {
                                                            balanceBUSDRewards: e.t3
                                                        },
                                                        e.t0.setState.call(e.t0, e.t4),
                                                        e.next = 14;
                                                    break;
                                                case 12:
                                                    e.prev = 12,
                                                        e.t5 = e.catch(1);
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }, e, this, [
                                        [1, 12]
                                    ])
                                }));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }]),
                        Object(c.a)(t, [{
                            key: "render",
                            value: function() {
                                var e = this;
                                return i.a.createElement("div", null, i.a.createElement("div", {
                                    className: "bgnew"
                                }, i.a.createElement("div", {
                                    className: "container"
                                }, i.a.createElement("div", {
                                    className: "row py-3 py-lg-5"
                                }, i.a.createElement("div", {
                                    className: "col-12 mx-auto"
                                }, i.a.createElement("div", {
                                    className: "row justify-content-center align-items-center"
                                }, i.a.createElement("div", {
                                    className: "col-12"
                                }, i.a.createElement("div", {
                                    className: "webclip"
                                }, i.a.createElement("div", {
                                    className: "walletConnect"
                                }, i.a.createElement(this.CheckWalletConnection, null), i.a.createElement("a", {
                                    href: "https://t.me/ShibaDollars",
                                    class: "bdr1"
                                }, "Telegram")))))), i.a.createElement(this.ReadNetworkAndPage, null), i.a.createElement("div", {
                                    className: "col-12"
                                }, i.a.createElement("main", {
                                    role: "main",
                                    className: "blkoverlay text-center py-5 px-3 mt-4"
                                }, i.a.createElement("div", {
                                    className: "content mr-auto ml-auto top-s"
                                }, i.a.createElement("div", {
                                    className: "row mb-5 pb-4"
                                }, i.a.createElement("div", {
                                    className: "col-12"
                                }, i.a.createElement("div", {
                                    className: "col-12 mr-auto ml-auto"
                                }, i.a.createElement("a", {
                                    href: "https://t.me/ShibaDollars",
                                    class: "bob"
                                }, i.a.createElement("img", {
                                    id: "img-s",
                                    src: "../images/dis.png"
                                }, )), i.a.createElement("a", {
                                    href: "https://t.me/ShibaDollars",
                                    class: "bob"
                                }, i.a.createElement("img", {
                                    id: "img-s",
                                    src: "../images/insta.png"
                                }, )), i.a.createElement("a", {
                                    href: "https://t.me/ShibaDollars",
                                    class: "bob"
                                }, i.a.createElement("img", {
                                    id: "img-s",
                                    src: "../images/fb.png"
                                }, )), i.a.createElement("a", {
                                    href: "https://t.me/ShibaDollars",
                                    class: "bob"
                                }, i.a.createElement("img", {
                                    id: "img-s",
                                    src: "../images/tele.png"
                                }, )), i.a.createElement("a", {
                                    href: "https://t.me/ShibaDollars",
                                    class: "bob"
                                }, i.a.createElement("img", {
                                    id: "img-s",
                                    src: "../images/tweet.png"
                                }, ))), i.a.createElement("div", {
                                    className: "font2 mb-4"
                                }, "Connected Wallet Rewards: ", i.a.createElement("span", {
                                    id: "walletRewards"
                                }, this.state.walletRewards), " BUSD"), i.a.createElement("button", {
                                    className: "bdr2",
                                    onClick: function() {
                                        return e.claim()
                                    }
                                }, "Claim"), i.a.createElement("span", {
                                    className: "font5"
                                }, "Note: rewards are sent automatically to your wallet! ", i.a.createElement("br", null), "If you want to claim, gas fees will be incurred."), " ")), i.a.createElement("div", {
                                    className: "row mb-5 pb-4"
                                }, i.a.createElement("div", {
                                    className: "col-12"
                                }, i.a.createElement("input", {
                                    className: "bdr",
                                    type: "text",
                                    id: "walletToCheck",
                                    placeholder: "Input your wallet address here"
                                }), i.a.createElement("button", {
                                    className: "bdr1",
                                    onClick: function() {
                                        return e.readWallet()
                                    }
                                }, "Check Balance "))), i.a.createElement("div", {
                                    className: "row"
                                }, i.a.createElement("div", {
                                    className: "col-12"
                                }, i.a.createElement("div", {
                                    className: "row justify-content-center"
                                }, i.a.createElement("div", {
                                    className: "col-12 col-md-6 col-lg-5 bg-txt"
                                }, i.a.createElement("span", {
                                    className: "font3"
                                }, "Collected Rewards: ", i.a.createElement("div", {
                                    id: "balanceBUSDRewards"
                                }, this.state.balanceBUSDRewards), " BUSD")), i.a.createElement("div", {
                                    className: "col-12 col-md-6 col-lg-5 bg-txt "
                                }, i.a.createElement("span", {
                                    className: "font4"
                                }, "Rewards paid to all holders: ", i.a.createElement("div", {
                                    id: "totalBUSDRewards"
                                }, this.state.totalBUSDRewards), "BUSD "))))))))))))
                            }
                        }]),
                        t
                }(a.Component));
            u.a.render(i.a.createElement(T, null), document.getElementById("root"))
        }
    },
    [
        [206, 2, 1]
    ]
]);
//# sourceMappingURL=main.f5708009.chunk.js.map
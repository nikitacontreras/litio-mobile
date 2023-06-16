"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_lan_port_scanner_1 = require("react-native-lan-port-scanner");
//Returns `LSNetworkInfo`
var networkInfo = await react_native_lan_port_scanner_1.default.getNetworkInfo();
var config = {
    networkInfo: networkInfo,
    ports: [8080],
    timeout: 1000,
    threads: 150
};
const open = react_native_lan_port_scanner_1.default.startScan(config, function (totalHosts, hostScanned) {
    console.log(hostScanned / totalHosts);
}, function (result) {
    console.log(result);
}, function (results) {
    console.log(results);
});
export default open;
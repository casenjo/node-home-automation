var wol = require('wake_on_lan');

exports.turnOn = function(mac) {
    wol.wake(mac);
    return true;
}
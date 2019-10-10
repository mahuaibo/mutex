'use strict';

let mutexHash = "b30930e99fdbdaf0b6a6a4c10794135153bc2585f33480a792ce9bcaf91312f1";
global[mutexHash] = {};
let mutex = global[mutexHash];
module.exports = {
    lock: async (key, callback) => {
        if (key == undefined || key == '') {
            console.warn('The key is invalid:', key);
            return;
        }
        if (mutex[key] == undefined || !mutex[key]) {
            mutex[key] = true;
            if (callback != undefined) {
                await callback(key);
            }
        }
    },
    locked: async (key) => {
        if (mutex[key] == undefined) {
            return false;
        }
        return mutex[key];
    },
    unlock: async (key) => {
        if (mutex[key]) {
            mutex[key] = false;
        }
    }
};
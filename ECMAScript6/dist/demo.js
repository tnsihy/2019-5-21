'use strict';

var proxy = new Proxy({
    name: 'Tom',
    age: 18
}, {
    ownKeys: function ownKeys(target) {
        return ['name'];
    }
});
Object.keys(proxy);
console.log(Object.keys(proxy));

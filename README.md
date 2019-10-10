# easy-mutex

This package is the mutex tool for nodejs

## Getting Started

```
npm i easy-mutex

var mutex = require("easy-mutex")
```

## Examples

example 1:
```
await mutex.lock('key1',function (key) {
    // ...
    await mutex.unlock(key);
})

```

example 2:
```
await mutex.lock('key2')

if(mutex.locked('key2')) {
    // ...
}

if(await mutex.locked('key2')) {
    // ...
}

await mutex.unlock('key2')
```
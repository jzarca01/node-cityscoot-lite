# node-bird

Lite version of [node-cityscoot](https://github.com/jzarca01/node-cityscoot)

## Usage

```javascript
const Cityscoot = require('node-cityscoot-lite');
const city = new Cityscoot();
```

For a cool example, see _example/index.js_

### Get Scooters

```javascript
await city.getScooters(cityId);
// Paris: 4
// Nice: 6
// Milan: 9
// Rome: 10
```

### Get Scooter by code

```javascript
await city.getScooter(cityId, scooterName);
// cityId: 4
// scooterName: 5193
```

### Get zon es

```javascript
await city.getZones();
```

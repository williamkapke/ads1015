
// the ADS1015 and ADS1115 have the same API- just different specs.
// so this lib just implements the changes to that lib
const ADS1115 = require('ads1115')

module.exports = (bus, addr = 0x48, delay = 10, shift = 4) => ADS1115(bus, addr, delay, shift)
module.exports.open = (busNum, addr, provider = 'i2c-bus') => {
  return require(provider).openPromisified(busNum).then((bus) => module.exports(bus, addr))
}

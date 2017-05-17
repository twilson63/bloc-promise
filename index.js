const { curry, merge, not } = require('ramda')
const cuid = require('cuid')

module.exports = curry((adapter, blocType, payload) => {
  return new Promise((resolve, reject) => {
    let handled = false
    const target = cuid()
    adapter.once(target, res => {
      if (not(handled)) {
        resolve(res)
        hanlded = true
      }
    })
    setTimeout(_ => {
      if (not(handled)) {
        reject({ message: 'Error - Service Not Responding...' })
        handled = true
      }
    }, 3000)
    adapter.emit(blocType, merge(payload, { target }))
  })
})

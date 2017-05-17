const test = require('tape')

const bus = require('nanobus')()
const exec = require('./')(bus)

bus.once('FOO', payload => {
  process.nextTick(function() {
    bus.emit(payload.target, { message: 'bar', ok: true })
  })
})

test('successfully call a bloc', t => {
  exec('FOO', { bar: 'boop' }).then(res => {
    t.equals('bar', res.message)
    t.ok(res.ok)
    t.end()
  })
})

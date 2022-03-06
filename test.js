const it = require('tapzero').test

const { show, parse } = require('./apes.js')

it('parse', t=>{
    t.ok(parse('x = weth.balance()'))
})

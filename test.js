const it = require('tapzero').test
const parseError = new RegExp('^could not parse$')

const { show, parse } = require('./apes.js')

it('parseBasicValid', t=>{
    t.ok(parse('x = weth.balance()'))
})

// can't parse if no lvalue provided
it('parseInvalidNullLvalue', t=> {
    t.throws( _ => {parse('=weth.balance()')}, parseError)
})

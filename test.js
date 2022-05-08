const it = require('tapzero').test
const parseError = new RegExp('^could not parse$')

const { show, parse } = require('./apes.js')

it('parseBasicValid', t=>{
    t.ok(parse('x = weth.balance()'))
})

/// Testing Invalid Lvalues
it('parseInvalidNullLvalue', t=> {
    t.throws( _ => {parse('=weth.balance()')}, parseError)
})

it('parseInvalidDecimalLvalue', t => {
    t.throws(_ => {parse("32=weth.balance()")}, parseError)
})

it('parseInvalidTypeLValue', t => {
    t.throws( _ => {parse("string x = weth.balance()"), parseError})
})
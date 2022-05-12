const it = require('tapzero').test
const parseError = new RegExp('^could not parse$')

const { show, parse } = require('./apes.js')

// Testing valid Lvalues
it('parseBasicValid', t=>{
    t.ok(parse('x = weth.balance()'))
})

it('parseTypedLvalueArraySingle', t => {
    t.ok(parse('[uint x] = weth.balance()'))
})

it('parseTypedLvalueArrayMultiple', t => {
    t.ok(parse('[uint x,bytes32 y] = weth.balance()'))
})

it('parseTyepdLvalueArrayMultipleOddSpacing', t => {
    t.ok(parse('[uint x ,bytes32 y]= weth.balance()'))
})

it('parseTyepdLvalueArrayMultipleAllSpacing', t => {
    t.ok(parse('[  uint  x  ,  bytes32  y  ]  =  weth.balance(  )  '))
})

it('parseTypedLValueNoArrayUint', t => {
    t.ok(parse('uint x = weth.balance()'))
})

it('parseTypedLValueNoArrayBytes32', t=> {
    t.ok(parse('bytes32 x = weth.balance()'))
})

/// Testing Invalid Lvalues
it('parseInvalidNullLvalue', t => {
    t.throws( _ => {parse('=weth.balance()')}, parseError)
})

it('parseInvalidLEmptyLvalue', t => {
    t.throws( _ => {parse(' =weth.balance()')})
})

it('parseInvalidDecnumLvalue', t => {
    t.throws(_ => {parse("32=weth.balance()")}, parseError)
})

it('parseInvalidLValueArrayMultipleNoCommas', t => {
    t.throws(_ => {
        parse('[uint x uint y] = weth.balance()')
    }, parseError)
})

it('parseInvalidLValueArrayMultipleExtraCommans', t => {
    t.throws(_ => {
        parse('[uint x,uint y,] = weth.balance()')
    }, parseError)
})

it('parseInvalidTypedLvalue', t => {
    t.throws(_ => {parse('badtype x = weth.balance()')}, parseError)
})

it('parseInvalidTypedLValueMultipleTyes', t => {
    t.throws(_ => {parse('uint bytes32 x = weth.balance()')})
})

it('parseInvalidTypedLvalueArray', t => {
    t.throws(_ => {
        parse('[uint x, badtype y] = weth.balance()')
    }, parseError)
})

// Test Valid Rvalues

it('parseValidRvalue', t => {
    t.ok(parse('x = weth.balanceOf(uint 123)'))
})

// Test Invalid Rvalues
it('parseInvalidRvalueNoType', t => {
    t.throws( _ => {
        parse('x = weth.balanaceOf(123)')
    }, parseError)
})
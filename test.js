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

it('parseTypedLvalueArraySingleInt', t => {
    t.ok(parse('[int x] = weth.balance()'))
})

it('parseTypedLvalueArrayMultiple', t => {
    t.ok(parse('[uint x,bytes32 y] = weth.balance()'))
})

it('parseTypedLvalueArrayMultipleInt', t => {
    t.ok(parse('[int x,int y] = weth.balance()'))
})

it('parseTyepdLvalueArrayMultipleOddSpacing', t => {
    t.ok(parse('[uint x ,bytes32 y]= weth.balance()'))
})

it('parseTyepdLvalueArrayMultipleAllSpacing', t => {
    t.ok(parse('[  uint  x  ,  bytes32  y  ]  =  weth.balance(  )  '))
})

it('parseTypedLValueNoArrayAddress', t => {
    t.ok(parse('address x = weth.balance()'))
})

it('parseTypedLValueNoArrayBool', t => {
    t.ok(parse('bool x = weth.balance()'))
})

it('parseTypedLValueNoArrayInt', t => {
    t.ok(parse('int x = weth.balance()'))
})

it('parseTypedLValueNoArrayUint', t => {
    t.ok(parse('uint x = weth.balance()'))
})

it('parseTypedLValueNoArrayBytes32', t=> {
    t.ok(parse('bytes32 x = weth.balance()'))
})

it('parseTypedLValueNoArrayFixed', t => {
    t.ok(parse('fixed x = weth.balance()'))
})

it('parseTypedLValueNoArrayUfixed', t => {
    t.ok(parse('ufixed x = weth.balance()'))
})

it('parseTypedLValueNoArrayFunction', t => {
    t.ok(parse('function x = weth.balance()'))
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

it('parseValidTypedRvalueInt', t => {
    t.ok(parse('x = weth.balanceOf(int 123)'))
})

// Test Invalid Rvalues
it('parseInvalidRvalueNoType', t => {
    t.throws( _ => {
        parse('x = weth.balanaceOf(123)')
    }, parseError)
})

// Test with callopts (missing grammar for callopts ?)
it('parseValidCallOpts', t => {
    t.throws( _ => {
        parse('x = weth.transfer{gas: 20}(int 123)')
    }, parseError)
})

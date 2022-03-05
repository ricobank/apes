
Aesthetically Pleasing Ethereum Statements

An `apeline` is a single EVM call expressed in a human-readable form.
An `apeline` parser extracts the interlaced ABI, values, and options from the `apeline`, and generates encoded calldata.

`[type value, ...] = addr.funcName.calltype{callopts}(type value, ...)`

- `type` is an EVM ABI type (like `uint256`)
- `value` is a literal value (parses depending on type), or a variable name
- `addr` is an address (literal or variable)
- `funcName` is the function name
- `calltype` is `call`, `view`, or `delc`
- `callopts` is (optional) `{gas: _, value: _}`


## examples

```
$DMAP.set(bytes32 'hello', bytes32 'bob', bytes32 0x1)
$WETH.transfer(address $BOB, uint 100wad)
```
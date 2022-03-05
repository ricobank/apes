const
  ebnf = require('ebnf')
  usage = `
Usage:
  apes <apeline>
`
  gram = `
APELINE ::= (decnum)+
WS      ::= [#x20#x09#x0A#x0D]+   /* Space | Tab | \n | \r */
decnum  ::= [0-9]+
`
  toss = (s) => { throw new Error(s) }
  rules = ebnf.Grammars.W3C.getRules(gram)
  parser = new ebnf.Parser(rules)
  line = process.argv.length > 2 ? process.argv[2] : toss(usage)
  ast = parser.getAST(line)
  show = (t) =>
    t.children.length == 0
      ? `(${t.type} ${t.text})`
      : `(${t.type} ${t.children.map(show)})`

console.log(show(ast))

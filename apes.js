ebnf = require('ebnf')

log = console.log

usage =`
Usage:
  apes <apeline>
`
ape_grammar =`
apeline ::= (lvalue) S* "=" S* (rvalue)+
S       ::= [#x20#x09#x0A#x0D]+
lvalue  ::= (var) | "[" S* (var S*) (","S* var S*)* S* "]"
rvalue  ::= (obj) S* "." S* (func) S* (args)
obj     ::= (sym)
func    ::= (sym)
type    ::= "address" | "bool" | "int" | "uint" | "bytes32" | "fixed" | "ufixed" | "function"
varval  ::= (var) | (val)
var     ::= (type S+)? (sym)
val     ::= (type S+) (decnum)
args    ::= "(" S* (val)* S* ")"
decnum  ::= [0-9]+
sym     ::= [a-zA-Z]+
`
,toss   =s=> { throw new Error(s) }
,need   =(b,s)=> b || toss(s)
,rules  = ebnf.Grammars.W3C.getRules(ape_grammar)
,parser = new ebnf.Parser(rules)
,parse  =s=> need(parser.getAST(s), 'could not parse')
,s      =i=> " ".repeat(i)
,show   =(t,k=2,d=0,s=" ".repeat(d*k))=> {
  need(t && t.children, 'bad show arg')
  return 0 == t.children.length
    ? `${s}${t.type} ${t.text})`
    : `(${s}${t.type} ${t.children.map(c=>s+"\n"+show(c,k,d+1))})`
}

,cmd  =_=> process.argv.length == 3
       ?   show(parse(process.argv[2]))
       :   toss(usage)

module.exports = { show, parse, cmd }

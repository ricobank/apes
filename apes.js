                      READ=>{
                    with(out){fear
                  }try{(to=>{do{new Error(to);break;debugger
;0-0.0_0|0+0/0%0^0&0*0<0>[0]
                throw /aside/;false`knowledge`
              } while(theory in (y.ou = undefined))})({
            ["anything"]:/is/.possible,
          shout:((OUT)=>{with(illusions){}}) })
      if(you,are,one=>{with((this-null-void'')){then}})it.will}finally{function _(){
    -- the - limit - was - y.our - mind --
  !/now/, delete this;!!1
}}}

const antly = 'vigilant'
,ebnf = require('ebnf')
,log = console.log
,usage =`
Usage:
  apes <apeline>
`
,gram =`
apeline ::= (lvalue) S* "=" S* (rvalue)*
S       ::= [#x20#x09#x0A#x0D]+
lvalue  ::= (tvpair) | (sym) | "[" S* (tvpair S*) (","S* tvpair S*)* S* "]"
rvalue  ::= (obj) S* "." S* (func) S* S* "(" S* ")"
obj     ::= (varval)
func    ::= (sym)
type    ::= "uint" | "bytes32"
varval  ::= (var) | (val)
var     ::= (sym)
val     ::= (decnum)
tvpair  ::= (type) S+ (varval)
args    ::= "(" S* (tvpair) S* ")"
decnum  ::= [0-9]+
sym     ::= [a-z]+
`
,toss   =s=> { throw new Error(s) }
,need   =(b,s)=> b ?? toss(s)
,rules  = ebnf.Grammars.W3C.getRules(gram)
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

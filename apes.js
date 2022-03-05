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
apeline ::= (lvalue) S* "=" S* (rvalue) S* ";"? EOF
S       ::= [#x20#x09#x0A#x0D]+  /* space \t \n \r */
sym     ::= [a-z]+
lvalue  ::= "[" S* tvpair* S* "]"
rvalue  ::= (obj) S* "." S* (func) S* S* "(" S* ")"
obj     ::= (varval)
func    ::= (sym)
type    ::= "uint"
varval  ::= (var) | (val)
var     ::= (sym)
val     ::= (decnum)
tvpair  ::= (type) S+ (varval)
args    ::= "(" S* (tvpair) S* ")"
decnum  ::= [0-9]+
`
,toss   =s=> { throw new Error(s) }
,rules  = ebnf.Grammars.W3C.getRules(gram)
,parser = new ebnf.Parser(rules)
,line   = process.argv.length > 2 ? process.argv[2] : toss(usage)
,ast    = parser.getAST(line)
,s      =i=> " ".repeat(i)
,show   =(t,k=2,d=0,s=" ".repeat(d*k))=>
  0 == t.children.length
    ? `${s}${t.type} ${t.text})`
    : `(${s}${t.type} ${t.children.map(c=>s+"\n"+show(c,k,d+1))})`

0
,log(line)
,log(show(ast))



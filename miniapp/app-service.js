	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
	/*v0.5vv_20180905_syb_scopedata*/global.__wcc_version__='v0.5vv_20180905_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'buyConfirm'])
Z([3,'closeSkuModal'])
Z([3,'goods-sku'])
Z([[7],[3,'goods']])
Z([[7],[3,'hiddenSkuModal']])
Z([[7],[3,'skuimage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'comfirmLoginTapHandler'])
Z([[7],[3,'hiddenLoginModel']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'audio'])
Z([[7],[3,'audios']])
Z([3,'audioID'])
Z([3,'audioPlayerTapHandler'])
Z([3,'audioplayer'])
Z([[6],[[7],[3,'audio']],[3,'duration']])
Z([[6],[[7],[3,'audio']],[3,'audioID']])
Z([[6],[[7],[3,'audio']],[3,'subtitle']])
Z([[6],[[7],[3,'audio']],[3,'percent']])
Z([[6],[[7],[3,'audio']],[3,'playtime']])
Z([[6],[[7],[3,'audio']],[3,'image']])
Z([[6],[[7],[3,'audio']],[3,'statusImage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'audio'])
Z([[7],[3,'audios']])
Z([3,'audioID'])
Z([3,'audioPlayerTapHandler'])
Z([3,'audioplayer'])
Z([[6],[[7],[3,'audio']],[3,'duration']])
Z([[6],[[7],[3,'audio']],[3,'audioID']])
Z([[6],[[7],[3,'audio']],[3,'subtitle']])
Z([[6],[[7],[3,'audio']],[3,'percent']])
Z([[6],[[7],[3,'audio']],[3,'playtime']])
Z([[6],[[7],[3,'audio']],[3,'image']])
Z([[6],[[7],[3,'audio']],[3,'statusImage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'=='],[[7],[3,'viewIndex']],[1,0]])
Z([[2,'=='],[[7],[3,'viewIndex']],[1,1]])
Z([[7],[3,'answerText']])
Z([3,'nextTapHandler'])
Z([[7],[3,'btnstyle']])
Z([[7],[3,'hiddenResultModal']])
Z([[7],[3,'resultText']])
Z([[7],[3,'tip']])
Z([[2,'=='],[[7],[3,'viewIndex']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/audioplayer/audioplayer.wxml','./components/goodsSKU/goodsSKU.wxml','./components/loginmodal/loginmodal.wxml','./components/resultmodal/resultmodal.wxml','./pages/index/index.wxml','./pages/logs/logs.wxml','./pages/product/goods/goods.wxml','./pages/product/index/index.wxml','./pages/product/order/order.wxml','./pages/product/orderlist/orderlist.wxml','./pages/profile/index/index.wxml','./pages/safety/article/article.wxml','./pages/safety/articledetail/articledetail.wxml','./pages/safety/audios/audios.wxml','./pages/safety/index/index.wxml','./pages/safety/survey/survey.wxml','./pages/safety/videodetail/videodetail.wxml','./pages/safety/videos/videos.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oH=_mz(z,'goodsSKU',['bindbuyConfirm',0,'bindcloseSkuModal',1,'class',1,'goods',2,'hidden',3,'skuimage',4],[],e,s,gg)
_(r,oH)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oJ=_mz(z,'loginmodal',['bindconfirm',0,'hidden',1],[],e,s,gg)
_(r,oJ)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var xQ=_v()
_(r,xQ)
var oR=function(cT,fS,hU,gg){
var cW=_mz(z,'audioplayer',['bindtap',3,'class',1,'duartion',2,'id',3,'intro',4,'percent',5,'playtime',6,'posterPath',7,'statusImagePath',8],[],cT,fS,gg)
_(hU,cW)
return hU
}
xQ.wxXCkey=4
_2z(z,1,oR,e,s,gg,xQ,'audio','index','audioID')
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var lY=_v()
_(r,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_mz(z,'audioplayer',['bindtap',3,'class',1,'duartion',2,'id',3,'intro',4,'percent',5,'playtime',6,'posterPath',7,'statusImagePath',8],[],e2,t1,gg)
_(b3,x5)
return b3
}
lY.wxXCkey=4
_2z(z,1,aZ,e,s,gg,lY,'audio','index','audioID')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,1,e,s,gg)){c8.wxVkey=1
}
else if(_oz(z,2,e,s,gg)){c8.wxVkey=2
var h9=_mz(z,'resultmodal',['answer',3,'bindnextquestion',1,'btnstyle',2,'hidden',3,'result',4,'tip',5],[],e,s,gg)
_(c8,h9)
}
else if(_oz(z,9,e,s,gg)){c8.wxVkey=3
}
else{c8.wxVkey=4
}
c8.wxXCkey=1
c8.wxXCkey=3
_(r,f7)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/audioplayer/audioplayer.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/audioplayer/audioplayer.wxml'] = $gwx( './components/audioplayer/audioplayer.wxml' );
		__wxAppCode__['components/goodsSKU/goodsSKU.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/goodsSKU/goodsSKU.wxml'] = $gwx( './components/goodsSKU/goodsSKU.wxml' );
		__wxAppCode__['components/loginmodal/loginmodal.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/loginmodal/loginmodal.wxml'] = $gwx( './components/loginmodal/loginmodal.wxml' );
		__wxAppCode__['components/resultmodal/resultmodal.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['components/resultmodal/resultmodal.wxml'] = $gwx( './components/resultmodal/resultmodal.wxml' );
		__wxAppCode__['pages/index/index.json'] = {"disableScroll":true,"usingComponents":{"loginmodal":"../../components/loginmodal/loginmodal","audioplayer":"../../components/audioplayer/audioplayer","goodsSKU":"../../components/goodsSKU/goodsSKU"}};
		__wxAppCode__['pages/index/index.wxml'] = $gwx( './pages/index/index.wxml' );
		__wxAppCode__['pages/product/goods/goods.json'] = {"disableScroll":true,"usingComponents":{"goodsSKU":"../../../components/goodsSKU/goodsSKU"}};
		__wxAppCode__['pages/product/goods/goods.wxml'] = $gwx( './pages/product/goods/goods.wxml' );
		__wxAppCode__['pages/product/index/index.json'] = {"disableScroll":true,"usingComponents":{"loginmodal":"../../../components/loginmodal/loginmodal"}};
		__wxAppCode__['pages/product/index/index.wxml'] = $gwx( './pages/product/index/index.wxml' );
		__wxAppCode__['pages/safety/audios/audios.json'] = {"navigationBarTitleText":"儿童安全音频","disableScroll":true,"usingComponents":{"audioplayer":"../../../components/audioplayer/audioplayer"}};
		__wxAppCode__['pages/safety/audios/audios.wxml'] = $gwx( './pages/safety/audios/audios.wxml' );
		__wxAppCode__['pages/safety/index/index.json'] = {"navigationBarTitleText":"小黄人儿童安全课堂","disableScroll":true,"usingComponents":{"audioplayer":"../../../components/audioplayer/audioplayer"}};
		__wxAppCode__['pages/safety/index/index.wxml'] = $gwx( './pages/safety/index/index.wxml' );
		__wxAppCode__['pages/safety/survey/survey.json'] = {"navigationBarTitleText":"小黄人儿童安全测试","disableScroll":true,"usingComponents":{"resultmodal":"../../../components/resultmodal/resultmodal"}};
		__wxAppCode__['pages/safety/survey/survey.wxml'] = $gwx( './pages/safety/survey/survey.wxml' );
	
	define("data/question.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=[{question:"1、一辆小汽车有几块视野盲区？",answerA:"四块",answerB:"六块",answerC:"八块",result:"C",tip:"汽车A柱造成的左右视野盲区，B柱造成左右视野盲区，C柱造成的左右视野盲区,以及车头盲区和车尾盲区。",qimage:"1.png"},{question:"2、下面关于安全气囊的说法，哪一个是错误的？",answerA:"当儿童头部与气囊仪表盘接近时，一旦碰撞造成气囊打开，会对头部形成几百公斤的冲击力。",answerB:"当儿童坐在正向安装的安全座椅里时，是不可以被放置在有安全气囊的座位上的。",answerC:"当儿童坐在反向安装的安全座椅里时，是不可以被放置在有安全气囊的座位上的。",result:"B",tip:"当儿童坐在反向安装的安全座椅里时，气囊爆炸打开会接触椅背，椅背会对脆弱的头部和颈部造成伤害。",qimage:"2.png"},{question:"3、下列关于安全带的说法，哪一个是正确的？",answerA:"四岁以下的儿童不可以使用车内安全带，四岁以上才可以。",answerB:"儿童直接使用车内安全带，有可能在车辆碰撞时勒住儿童颈部和腹部，导致颈骨折断或器官受损。",answerC:"如果要给儿童使用车内成人安全带，则必须让儿童坐在有安全气囊的座位上。",result:"B",tip:"只有当儿童满了12岁或者身高高于1米5时，才可以直接使用车内的安全带。",qimage:"3.png"},{question:"4、下列关于儿童留在车内的说法，哪一个是正确的？",answerA:"家长如果只是离开一小会儿，儿童是可以在车里等他们回来的。",answerB:"家长离开一小会儿并且把儿童独自留在车内，应该在离开之前确保车门和车窗都已经锁好。",answerC:"夏天天气炎热，封闭的车内温度急剧上升，20分钟内就可能超过50℃，这对留在车内的儿童是致命的。",result:"C",tip:"封闭车内温度急剧上升，高温环境会对小朋友的身体器官造成严重伤害，任何时候都不允许将儿童独自留在车内！",qimage:"4.png"},{question:"5、下列关于家长抱儿童乘车的说法，哪种是错误的？",answerA:"只有刚出生的婴儿才可以由家长抱在怀里乘车。婴儿很小、很轻，即使发生意外，家长也能很好的保护。",answerB:"任何时候家长都不可以将儿童抱在怀里乘车，尤其是婴儿阶段。",answerC:"家长抱儿童乘车，一旦发生交通事故，很有可能会加重儿童受到伤害或导致死亡。",result:"A",tip:"无论儿童处在哪个年龄段，都不可以抱在怀里乘车。汽车发生碰撞事故时，身体产生的冲击力会数倍于身体的重量，家长是无法抱住的！",qimage:"5.png"},{question:"6、下列哪种办法，可以最有效地避免儿童误开车门？",answerA:"让司机打开中控锁。",answerB:"让司机打开儿童安全锁。",answerC:"让司机设置行驶自动上锁。",result:"B",tip:"中控锁是可以通过车内解锁键打开的，只有儿童安全锁才能真正避免儿童误开车门。",qimage:"6.png"},{question:"7、乘车时不可以将头、手伸出窗外，下列哪种说法是错误的？",answerA:"只有当车窗带有防夹手功能时，才可以将头、手伸出窗外。",answerB:"当儿童将头、手伸出窗外时，很容易与外界车辆发生擦碰，尤其是在车流量较大的地方。",answerC:"在车流量很小的地方，儿童也不可以将头、手伸出窗外。",result:"A",tip:"任何情况下儿童都不可以将头、手伸出窗外，以免发生擦碰或者异物进入眼睛。",qimage:"7.png"},{question:"8、关于车内摆放物品或者携带宠物，下列哪个说法是错误的？",answerA:"车内不可以放置多余的物品，尤其是比较重或者比较尖锐的物品。",answerB:"有宠物一起乘车时，应该给宠物也配备相应的安全装备，例如宠物安全带、宠物防滑垫、隔离网等。",answerC:"体型较小的宠物可以抱在怀里，不一定要配备宠物安全装备。",result:"C",tip:"无论是宠物还是车内其他物品，都应该配备相应的安全装备，以防发生事故时，这些物品或宠物会以车速冲撞起来，造成二次伤害。",qimage:"8.png"},{question:"9、下列关于安全座椅的说法，哪个是正确的？",answerA:"3岁以下的小朋友乘车必须使用安全座椅。年纪稍大之后，尤其是3岁以后，就可以不坐安全座椅了。",answerB:"安全座椅有常规的大座椅和安全增高垫两种类型。大座椅更贵，但是比增高垫更安全。",answerC:"汽车发生意外事故时，安全座椅能将儿童的死亡率降低71%。",result:"C",tip:"只有当儿童满了12岁或身高达到1米5时，才可以不再使用安全座椅。3岁以上儿童可以使用安全增高垫。正规的增高垫必须经过ECE或者CCC等权威机构的碰撞测试。",qimage:"9.png"},{question:"10、下列关于安全增高垫的说法，哪一个是错误的？",answerA:"安全增高垫是一种轻便、易携式的安全座椅，一般适合3-12岁的小朋友使用。",answerB:"安全增高垫通过抬高儿童身高，并改变安全带的穿行路线，让身高不足1米5的儿童安全使用安全带。",answerC:"车里有了安全座椅就不再需要安全增高垫。",result:"C",tip:"即便车里有了安全座椅，家中也需要常备一个安全增高垫，以备儿童在乘坐其他车辆时方便使用，保障乘车安全。",qimage:"10.png"}];module.exports={safetyQuestions:e}; 
 			}); 
		define("osann.config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={apiUrl:"https://wx.osann-china.com/api/v1",payUrl:"https://wx.osann-china.com/pay/v1",mediaUrl:"https://cdn.osann-china.com"}; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0"+t};module.exports={formatTime:function(e){var n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),u=e.getHours(),a=e.getMinutes(),i=e.getSeconds();return[n,r,o].map(t).join("/")+" "+[u,a,i].map(t).join(":")},formatSecond:function(e){return[parseInt(e/60),e%60].map(t).join(":")},formatTimeStr:function(e){return[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()].map(t).join("")}}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("osann.config.js");App({onLaunch:function(){var o=this;wx.checkSession({success:function(){var e=wx.getStorageSync("sessionid"),n=wx.getStorageSync("userid"),s=wx.getStorageSync("userInfo");""!=e&&""!=n&&s?(o.globalData.openid=e,o.globalData.userid=n,console.log("storage sessionid = ",e," and userid = ",n),o.globalData.userInfo=s,console.log("storage userInfo : ",o.globalData.userInfo)):(console.log("re-login and fetch userinfo again ..."),o.wxloginwithsession())},fail:function(){o.wxloginwithsession()}})},wxloginwithsession:function(){var e=this;wx.login({success:function(n){n.code?(console.log("Code is "+n.code),wx.request({url:o.apiUrl+"/login",method:"POST",data:{code:n.code},success:function(o){console.log("remote sessionid : ",o.data),e.globalData.openid=o.data,wx.setStorage({key:"sessionid",data:o.data})}})):console.log("登录失败！"+n.errMsg)}})},globalData:{openid:"",userid:0,userInfo:null,rpxRatio:1,score:0,qIndex:0,currentArticleUrl:"",currentVideoUrl:"",currentVideoPoster:"",currentSubtitle:"",currentIntro:"",currentAudioIndex:-1,orderInfo:{}}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/audioplayer/audioplayer';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/audioplayer/audioplayer.js';	define("components/audioplayer/audioplayer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../osann.config.js");Component({properties:{posterPath:{type:String,value:e.mediaUrl+"/audios/10.jpg"},statusImagePath:{type:String,value:"../../images/play.png"},playtime:{type:String,value:"00.00"},percent:{type:Number,value:0},duartion:{type:String,value:"59:59"},intro:{type:String,value:"听欧颂爷爷讲故事"}},data:{},methods:{}}); 
 			}); 	require("components/audioplayer/audioplayer.js");
 		__wxRoute = 'components/goodsSKU/goodsSKU';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/goodsSKU/goodsSKU.js';	define("components/goodsSKU/goodsSKU.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}var n=require("../../osann.config.js");Component({properties:{goods:{type:Object,value:{price:parseFloat(419).toFixed(2),title:"测试商品标题",skus:[{name:"minions Vacation",checked:!0},{name:"minions Eyes",checked:!1},{name:"minions Banane",checked:!1},{name:"minions Mel&Kevin&Bob",checked:!1}],images:[]}},skuimage:{type:String},num:{type:Number,value:1},hidden:{type:Boolean}},data:{currentIndex:0},methods:{closeSkuModal:function(e){this.triggerEvent("closeSkuModal")},buyConfirm:function(e){var n=this,a={color:n.data.goods.skus[n.data.currentIndex].name,num:n.data.num,image:n.data.goods.images[n.data.currentIndex]};n.triggerEvent("buyConfirm",a)},selectSkuColor:function(a){var t=this,i=a.currentTarget.id,o=t.data.goods.skus,r=t.data.goods.images;if(o[t.data.currentIndex].checked=!1,0==o[i].checked){var s;o[i].checked=!0,t.setData((s={currentIndex:i},e(s,"goods.skus",o),e(s,"skuimage",n.mediaUrl+r[i]),s))}},increaseNum:function(e){this.setData({num:this.data.num+1})},decreaseNum:function(e){var n=this,a=n.data.num-1;1<=a&&n.setData({num:a})}}}); 
 			}); 	require("components/goodsSKU/goodsSKU.js");
 		__wxRoute = 'components/loginmodal/loginmodal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/loginmodal/loginmodal.js';	define("components/loginmodal/loginmodal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../utils/util");Component({options:{},properties:{title:{type:String},hidden:{type:Boolean},confirmColor:{type:String,observer:function(t){this.setData({tintColor:"color:"+t})}}},data:{},methods:{confirm:function(t){this.triggerEvent("confirm",t.detail)}},ready:function(){}}); 
 			}); 	require("components/loginmodal/loginmodal.js");
 		__wxRoute = 'components/resultmodal/resultmodal';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/resultmodal/resultmodal.js';	define("components/resultmodal/resultmodal.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../osann.config.js");Component({options:{},properties:{result:{type:String},answer:{type:String},tip:{type:String},hidden:{type:Boolean},btnstyle:{type:String}},attached:function(){this.setData({btnstyle:t.mediaUrl+"/images/btncontinue.png"})},data:{},methods:{nextquestion:function(){this.triggerEvent("nextquestion")}},ready:function(){}}); 
 			}); 	require("components/resultmodal/resultmodal.js");
 		__wxRoute = 'pages/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/index/index.js';	define("pages/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../osann.config.js");getApp();Page({data:{serviceImgUrl:e.mediaUrl+"/images/service.gif",safetySurvey:e.mediaUrl+"/images/index-safety-survey.jpg",safetyClass:e.mediaUrl+"/images/index-safety-class.jpg"},onLoad:function(e){},onShow:function(e){},onShareAppMessage:function(a){return{title:"小黄人守护儿童安全出行",path:"/pages/index/index",imageUrl:e.mediaUrl+"/images/index-share.jpg",success:function(e){},fail:function(e){},complete:function(){}}},safetySurveyTapHandler:function(e){wx.navigateTo({url:"/pages/safety/survey/survey"})},safetyClassTapHandler:function(e){wx.navigateTo({url:"/pages/safety/index/index"})}}); 
 			}); 	require("pages/index/index.js");
 		__wxRoute = 'pages/logs/logs';__wxRouteBegin = true; 	define("pages/logs/logs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../utils/util.js");Page({data:{logs:[]},onLoad:function(){this.setData({logs:(wx.getStorageSync("logs")||[]).map(function(a){return t.formatTime(new Date(a))})})}}); 
 			}); 	require("pages/logs/logs.js");
 		__wxRoute = 'pages/product/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/product/index/index.js';	define("pages/product/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../../../osann.config.js"),a=getApp();Page({data:{goods:[],goodsIndex:o.mediaUrl+"/images/goods-index.jpg",goodsCoupon:o.mediaUrl+"/images/goods-coupon.jpg",goodsBanner:o.mediaUrl+"/images/goods-banner.jpg",showCouponDetail:!0,hiddenLoginModel:!0},wxfetchUserInfoWithOpenID:function(o){var e=this,n=this;wx.getSetting({success:function(t){console.log("auth -> ",t),t.authSetting["scope.userInfo"]?(console.log("已经授权，无需弹出系统授权框，可以直接调用getUserInfo获取用户信息"),wx.getUserInfo({lang:"zh_CN",withCredentials:!0,success:function(t){a.globalData.userInfo=t.userInfo,console.log("non-open-type UserInfo : ",a.globalData.userInfo),wx.setStorage({key:"userInfo",data:a.globalData.userInfo}),n.wxdecryptUserInfo(o,t.rawData,t.signature,t.iv,t.encryptedData),e.userInfoReadyCallback&&e.userInfoReadyCallback(t)}})):(console.log("未授权，请调起授权登录"),n.setData({hiddenLoginModel:!1}))}})},comfirmLoginTapHandler:function(o){var e=this;e.setData({hiddenLoginModel:!0}),console.log("open-type userinfo ",o.detail),wx.setStorage({key:"userInfo",data:o.detail.userInfo}),e.wxdecryptUserInfo(a.globalData.openid,o.detail.rawData,o.detail.signature,o.detail.iv,o.detail.encryptedData)},wxdecryptUserInfo:function(e,n,t,s,i){wx.request({url:o.apiUrl+"/userinfo/decryption",method:"POST",data:{openid:e,rawData:n,signature:t,iv:s,encryptedData:i},success:function(o){console.log("decrypt userinfo successful : ",o),wx.setStorage({key:"userid",data:o.data}),a.globalData.userid=parseInt(o.data)},fail:function(o){console.log("decrypt userinfo failure : ",o)}})},goodsCouponTapHandler:function(o){var e=this;0===a.globalData.userid&&""!==a.globalData.openid&&(console.log("authorized ...."),e.wxfetchUserInfoWithOpenID(a.globalData.openid)),e.setData({showCouponDetail:!1})},GetCouponTapHandler:function(e){var n=this;wx.request({url:o.apiUrl+"/coupon/new",method:"POST",data:{openid:a.globalData.openid,userid:a.globalData.userid,coupon_id:1,coupon_name:"小黄人立减红包",status:0,source:5},success:function(o){wx.showToast({title:"领取成功",image:"../../../images/success.png",duration:1e3,mask:!0,success:function(){},fail:function(){},complete:function(){}})}}),n.setData({showCouponDetail:!0})},goodsBannerTapHandler:function(){var o=this;0===a.globalData.userid&&""!==a.globalData.openid&&(console.log("authorized ...."),o.wxfetchUserInfoWithOpenID(a.globalData.openid));var e="goodsID="+o.data.goods[0].goodsID+"&price="+o.data.goods[0].price+"&title="+o.data.goods[0].goods_title;wx.navigateTo({url:"/pages/product/goods/goods?"+e})},onLoad:function(e){wx.showLoading({title:"努力加载 ..."});var n=this;console.log("goods-index app ->",a.globalData),0===a.globalData.userid&&""!==a.globalData.openid&&(console.log("authorized ...."),n.wxfetchUserInfoWithOpenID(a.globalData.openid)),wx.request({url:o.apiUrl+"/goods",method:"POST",success:function(o){o.data.data.forEach(function(o){o.price=o.price/100}),n.setData({goods:o.data.data}),console.log(n.data.goods)},fail:function(a){console.log("failure from ",o.apiUrl+"/goods"),console.log(a)},complete:function(){wx.hideLoading()}})},buynowTapHandler:function(o){var e=o.currentTarget.id,n=this;0===a.globalData.userid&&""!==a.globalData.openid&&(console.log("authorized ...."),n.wxfetchUserInfoWithOpenID(a.globalData.openid));var t="goodsID="+n.data.goods[e].goodsID+"&price="+n.data.goods[e].price+"&title="+n.data.goods[e].goods_title;wx.navigateTo({url:"/pages/product/goods/goods?"+t})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"小黄人守护儿童乘车安全底线",path:"/pages/product/index/index",imageUrl:o.mediaUrl+"/images/goods-share.jpg",success:function(o){},fail:function(o){},complete:function(){}}}}); 
 			}); 	require("pages/product/index/index.js");
 		__wxRoute = 'pages/product/goods/goods';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/product/goods/goods.js';	define("pages/product/goods/goods.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o,a,e){return a in o?Object.defineProperty(o,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[a]=e,o}var a=require("../../../osann.config.js"),e=require("../../../utils/util.js"),t=getApp();Page({data:{imageContent:[],serviceImgUrl:a.mediaUrl+"/images/contact.jpg",buynowImgUrl:a.mediaUrl+"/images/buynow.jpg",goods:{},skuimage:"",hiddenSkuModal:!0},onLoad:function(e){var t;wx.showLoading({title:"努力加载 ..."});var n=this;n.setData((t={},o(t,"goods.goodsID",e.goodsID),o(t,"goods.price",e.price),o(t,"goods.title",e.title),t)),console.log(e),wx.request({url:a.apiUrl+"/goods/content",method:"POST",data:{goodsID:Number(e.goodsID)},success:function(e){var t,i=new Array;new Array;e.data.data.content.forEach(function(o,e){i[e]=a.mediaUrl+o});var d=[];e.data.data.skus.forEach(function(o,a){var e={name:"",checked:!1};e.name=o,d[a]=e}),d[0].checked=!0,n.setData((t={imageContent:i},o(t,"goods.skus",d),o(t,"goods.images",e.data.data.sku_images),o(t,"skuimage",a.mediaUrl+e.data.data.sku_images[0]),t))},fail:function(o){console.log("failure from ",a.apiUrl+"/goods/content"),console.log(o)},complete:function(){wx.hideLoading()}})},buynowTapHandler:function(o){this.setData({hiddenSkuModal:!1})},buyConfirm:function(o){var a=this,n=e.formatTimeStr(new Date);t.globalData.orderInfo={sku:o.detail.color,num:o.detail.num,image:o.detail.image,title:a.data.goods.title,price:100*a.data.goods.price,goodsID:a.data.goods.goodsID,openid:t.globalData.openid,userid:t.globalData.userid,total:o.detail.num*a.data.goods.price*100,orderNO:n+t.globalData.userid,coupon:5e3},console.log("basic order : ",t.globalData.orderInfo),wx.navigateTo({url:"/pages/product/order/order"}),a.setData({hiddenSkuModal:!0})},closeSkuModal:function(){this.setData({hiddenSkuModal:!0})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"小黄人守护儿童乘车安全底线",path:"/pages/product/index/index",imageUrl:a.mediaUrl+"/images/goods-share.jpg",success:function(o){},fail:function(o){},complete:function(){}}}}); 
 			}); 	require("pages/product/goods/goods.js");
 		__wxRoute = 'pages/safety/index/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/safety/index/index.js';	define("pages/safety/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var e=require("../../../osann.config.js"),t=require("../../../utils/util.js"),o=getApp(),i=wx.createInnerAudioContext();Page({data:{videos:[],audios:[],articles:[],safetyIndexBanner:e.mediaUrl+"/images/safety-index-banner.jpg",safetyIndexBK:e.mediaUrl+"/images/safety-index-bk.jpg"},safetyIndexBannerTapHandler:function(){wx.navigateTo({url:"/pages/safety/survey/survey"})},onLoad:function(n){wx.showLoading({title:"努力加载 ..."});var r=this;wx.request({url:e.apiUrl+"/safety/index",method:"POST",success:function(a){console.log(a),a.data.data.videos.forEach(function(a){a.image=e.mediaUrl+"/"+a.image,a.url=e.mediaUrl+"/"+a.url}),a.data.data.audios.forEach(function(a){a.image=e.mediaUrl+"/"+a.image,a.url=e.mediaUrl+"/"+a.url,a.playtime="00:00",a.percent=0,a.statusImage="../../images/play.png"}),a.data.data.articles.forEach(function(a){a.image=e.mediaUrl+"/"+a.image}),r.setData({videos:a.data.data.videos,audios:a.data.data.audios,articles:a.data.data.articles,videoPoster:a.data.data.videos[0].image}),console.log(r.data.videos),console.log(r.data.audios),console.log(r.data.articles)},fail:function(a){console.log("failure from ",e.apiUrl+"/safety/index"),console.log(a)},complete:function(){wx.hideLoading()}}),i.onPlay(function(){console.log("start to play music ",i.src);var e="audios["+o.globalData.currentAudioIndex+"].statusImage";r.setData(a({},e,"../../images/pause.png"))}),i.onError(function(a){console.log(a.errCode),wx.showToast({title:"网络错误，请稍后再试 ..."})}),i.onTimeUpdate(function(){if(0<=o.globalData.currentAudioIndex){var e,n="audios["+o.globalData.currentAudioIndex+"].playtime",l="audios["+o.globalData.currentAudioIndex+"].percent";r.setData((e={},a(e,n,t.formatSecond(i.currentTime.toFixed(0))),a(e,l,i.currentTime.toFixed(2)/i.duration.toFixed(2)*100),e))}}),i.onEnded(function(){var e;console.log("播放结束 ...请重置播放器 ...");var t="audios["+o.globalData.currentAudioIndex+"].playtime",i="audios["+o.globalData.currentAudioIndex+"].percent",n="audios["+o.globalData.currentAudioIndex+"].statusImage";r.setData((e={},a(e,t,"00:00"),a(e,i,0),a(e,n,"../../images/play.png"),e))})},videoPlayerTapHandler:function(a){var e=this;o.globalData.currentVideoUrl=e.data.videos[0].url,o.globalData.currentVideoPoster=e.data.videos[0].image,o.globalData.currentSubtitle=e.data.videos[0].subtitle,o.globalData.currentIntro=e.data.videos[0].intro,wx.navigateTo({url:"/pages/safety/videodetail/videodetail"})},audioPlayerTapHandler:function(e){var t=this,n=e.currentTarget.id-1;if(n==o.globalData.currentAudioIndex)if(i.paused){u="audios["+o.globalData.currentAudioIndex+"].statusImage";t.setData(a({},u,"../../images/pause.png")),i.play()}else{u="audios["+o.globalData.currentAudioIndex+"].statusImage";t.setData(a({},u,"../../images/play.png")),i.pause()}else{if(0<=o.globalData.currentAudioIndex){var r,l="audios["+o.globalData.currentAudioIndex+"].playtime",d="audios["+o.globalData.currentAudioIndex+"].percent",u="audios["+o.globalData.currentAudioIndex+"].statusImage";t.setData((r={},a(r,l,"00:00"),a(r,d,0),a(r,u,"../../images/play.png"),r)),i.stop()}o.globalData.currentAudioIndex=n,i.src=t.data.audios[o.globalData.currentAudioIndex].url,i.play()}},articleTapHandler:function(a){var e=this;console.log(a),o.globalData.currentArticleUrl=e.data.articles[a.currentTarget.id-1].url,wx.navigateTo({url:"/pages/safety/articledetail/articledetail"}),console.log(o.globalData.currentArticleUrl)},moreVideoTapHandler:function(a){wx.navigateTo({url:"/pages/safety/videos/videos"})},moreAudioTapHandler:function(a){wx.navigateTo({url:"/pages/safety/audios/audios"})},moreArticleTapHandler:function(a){wx.navigateTo({url:"/pages/safety/article/article"})},onReady:function(){},onShow:function(){},restoreAudioPlayer:function(){if(0<=o.globalData.currentAudioIndex){var e;i.stop();var t=this,n="audios["+o.globalData.currentAudioIndex+"].playtime",r="audios["+o.globalData.currentAudioIndex+"].percent",l="audios["+o.globalData.currentAudioIndex+"].statusImage";t.setData((e={},a(e,n,"00:00"),a(e,r,0),a(e,l,"../../images/play.png"),e)),o.globalData.currentAudioIndex=-1}},onHide:function(){this.restoreAudioPlayer()},onUnload:function(){this.restoreAudioPlayer()},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(a){return{title:"小黄人安全课堂开讲啦",path:"/pages/safety/index/index",imageUrl:e.mediaUrl+"/images/class-share.jpg",success:function(a){},fail:function(a){},complete:function(){}}}}); 
 			}); 	require("pages/safety/index/index.js");
 		__wxRoute = 'pages/safety/videos/videos';__wxRouteBegin = true; 	define("pages/safety/videos/videos.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../osann.config.js"),a=getApp();Page({data:{videos:[],safetyVideoBanner:e.mediaUrl+"/images/safety-video-banner.jpg"},onLoad:function(a){wx.showLoading({title:"努力加载 ..."});var t=this;wx.request({url:e.apiUrl+"/safety/videos",method:"POST",success:function(a){a.data.data.forEach(function(a){a.image=e.mediaUrl+"/"+a.image,a.url=e.mediaUrl+"/"+a.url}),t.setData({videos:a.data.data}),console.log(t.data.videos)},fail:function(a){console.log("failure from ",e.apiUrl+"/safety/videos"),console.log(a)},complete:function(){wx.hideLoading()}})},playerTapHandler:function(e){var t=this;console.log(e.currentTarget),a.globalData.currentVideoUrl=t.data.videos[e.currentTarget.id-1].url,a.globalData.currentVideoPoster=t.data.videos[e.currentTarget.id-1].image,a.globalData.currentSubtitle=t.data.videos[e.currentTarget.id-1].subtitle,a.globalData.currentIntro=t.data.videos[e.currentTarget.id-1].intro,wx.navigateTo({url:"/pages/safety/videodetail/videodetail"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"小黄人安全乘车视频",path:"/pages/safety/videos/videos",success:function(e){},fail:function(e){},complete:function(){}}}}); 
 			}); 	require("pages/safety/videos/videos.js");
 		__wxRoute = 'pages/safety/audios/audios';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/safety/audios/audios.js';	define("pages/safety/audios/audios.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function a(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var e=require("../../../osann.config.js"),t=require("../../../utils/util.js"),o=getApp(),n=wx.createInnerAudioContext();Page({data:{audios:[],safetyAudioBanner:e.mediaUrl+"/images/safety-audio-banner.jpg"},onLoad:function(i){wx.showLoading({title:"努力加载 ..."});var u=this;wx.request({url:e.apiUrl+"/safety/audios",method:"POST",success:function(a){a.data.data.forEach(function(a){a.image=e.mediaUrl+"/"+a.image,a.url=e.mediaUrl+"/"+a.url,a.playtime="00:00",a.percent=0,a.statusImage="../../images/play.png"}),u.setData({audios:a.data.data}),console.log(u.data.audios)},fail:function(a){console.log("failure from ",e.apiUrl+"/safety/audios"),console.log(a)},complete:function(){wx.hideLoading()}}),n.onPlay(function(){console.log("start to play music ",n.src);var e="audios["+o.globalData.currentAudioIndex+"].statusImage";u.setData(a({},e,"../../images/pause.png"))}),n.onError(function(a){console.log(a.errCode),wx.showToast({title:"网络错误，请稍后再试 ..."})}),n.onTimeUpdate(function(){if(0<=o.globalData.currentAudioIndex){var e,i="audios["+o.globalData.currentAudioIndex+"].playtime",r="audios["+o.globalData.currentAudioIndex+"].percent";u.setData((e={},a(e,i,t.formatSecond(n.currentTime.toFixed(0))),a(e,r,n.currentTime.toFixed(2)/n.duration.toFixed(2)*100),e))}}),n.onEnded(function(){var e;console.log("播放结束 ...请重置播放器 ...");var t="audios["+o.globalData.currentAudioIndex+"].playtime",n="audios["+o.globalData.currentAudioIndex+"].percent",i="audios["+o.globalData.currentAudioIndex+"].statusImage";u.setData((e={},a(e,t,"00:00"),a(e,n,0),a(e,i,"../../images/play.png"),e))})},audioPlayerTapHandler:function(e){var t=this,i=e.currentTarget.id-1;if(i==o.globalData.currentAudioIndex)if(n.paused){d="audios["+o.globalData.currentAudioIndex+"].statusImage";t.setData(a({},d,"../../images/pause.png")),n.play()}else{d="audios["+o.globalData.currentAudioIndex+"].statusImage";t.setData(a({},d,"../../images/play.png")),n.pause()}else{if(0<=o.globalData.currentAudioIndex){var u,r="audios["+o.globalData.currentAudioIndex+"].playtime",s="audios["+o.globalData.currentAudioIndex+"].percent",d="audios["+o.globalData.currentAudioIndex+"].statusImage";t.setData((u={},a(u,r,"00:00"),a(u,s,0),a(u,d,"../../images/play.png"),u)),n.stop()}o.globalData.currentAudioIndex=i,n.src=t.data.audios[o.globalData.currentAudioIndex].url,n.play()}},onReady:function(){},onShow:function(){},restoreAudioPlayer:function(){if(0<=o.globalData.currentAudioIndex){var e;n.stop();var t=this,i="audios["+o.globalData.currentAudioIndex+"].playtime",u="audios["+o.globalData.currentAudioIndex+"].percent",r="audios["+o.globalData.currentAudioIndex+"].statusImage";t.setData((e={},a(e,i,"00:00"),a(e,u,0),a(e,r,"../../images/play.png"),e)),o.globalData.currentAudioIndex=-1}},onHide:function(){this.restoreAudioPlayer()},onUnload:function(){this.restoreAudioPlayer()},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"小黄人安全乘车音频",path:"/pages/safety/audios/audios",success:function(a){},fail:function(a){},complete:function(){}}}}); 
 			}); 	require("pages/safety/audios/audios.js");
 		__wxRoute = 'pages/safety/article/article';__wxRouteBegin = true; 	define("pages/safety/article/article.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../osann.config.js"),t=getApp();Page({data:{articles:[],safetyArticleBanner:a.mediaUrl+"/images/safety-article-banner.jpg"},onLoad:function(t){wx.showLoading({title:"努力加载 ..."});var e=this;wx.request({url:a.apiUrl+"/safety/articles",method:"POST",success:function(t){t.data.data.forEach(function(t){t.image=a.mediaUrl+"/"+t.image}),e.setData({articles:t.data.data}),console.log(e.data.articles)},fail:function(t){console.log("failure from ",a.apiUrl+"/safety/articles"),console.log(t)},complete:function(){wx.hideLoading()}})},articleTapHandler:function(a){var e=this;console.log(a),t.globalData.currentArticleUrl=e.data.articles[a.currentTarget.id-1].url,wx.navigateTo({url:"/pages/safety/articledetail/articledetail"}),console.log(t.globalData.currentArticleUrl)},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"小黄人安全乘车文章",path:"/pages/safety/article/article",success:function(a){},fail:function(a){},complete:function(){}}}}); 
 			}); 	require("pages/safety/article/article.js");
 		__wxRoute = 'pages/safety/survey/survey';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'pages/safety/survey/survey.js';	define("pages/safety/survey/survey.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var a=require("../../../data/question.js"),e=require("../../../osann.config.js"),t=getApp();Page({data:{titleURL:"../../../images/title-rule.png",qsList:[],questionText:"",answerA:"",answerB:"",answerC:"",result:"",resultText:"回答错误",answerText:"答案：",tip:"",qimage:"",viewIndex:0,hiddenResultModal:!0,btnstyle:"btncontinue.png",resultImage:"",btnStartImage:e.mediaUrl+"/images/btnstart.png",surveyBackground:e.mediaUrl+"/images/safety-survey-background.jpg",sharingImagePath:""},onLoad:function(e){this.setData({qsList:a.safetyQuestions})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){console.log("reset survey ...");var a=this;t.globalData.qIndex=0,t.globalData.score=0,a.setData({questionText:"",answerA:"",answerB:"",answerC:"",result:"",resultText:"回答错误",answerText:"答案：",tip:"",qimage:"",viewIndex:0,hiddenResultModal:!0,btnstyle:"btncontinue.png"})},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(a){return{title:"测一测安全底线在哪里",path:"/pages/safety/survey/survey",imageUrl:e.mediaUrl+"/images/survey-share.jpg",success:function(a){},fail:function(a){},complete:function(){}}},startSurveyTapHandler:function(a){var e=this;t.globalData.qIndex=0,e.setData({viewIndex:1,titleURL:"../../../images/title-question.png",questionText:e.data.qsList[t.globalData.qIndex].question,answerA:e.data.qsList[t.globalData.qIndex].answerA,answerB:e.data.qsList[t.globalData.qIndex].answerB,answerC:e.data.qsList[t.globalData.qIndex].answerC,qimage:"../../../images/"+e.data.qsList[t.globalData.qIndex].qimage,result:e.data.qsList[t.globalData.qIndex].result})},answerTapHandler:function(a){var e="回答错误",s=this;s.data.result==a.currentTarget.id&&(e="回答正确",t.globalData.score+=10),s.setData({hiddenResultModal:!1,resultText:e,answerText:"答案："+s.data.result,tip:s.data.qsList[t.globalData.qIndex].tip})},nextTapHandler:function(){var a=this;if(0<=t.globalData.qIndex&&9>t.globalData.qIndex)t.globalData.qIndex++,a.setData({hiddenResultModal:!0,questionText:a.data.qsList[t.globalData.qIndex].question,answerA:a.data.qsList[t.globalData.qIndex].answerA,answerB:a.data.qsList[t.globalData.qIndex].answerB,answerC:a.data.qsList[t.globalData.qIndex].answerC,qimage:"../../../images/"+a.data.qsList[t.globalData.qIndex].qimage,result:a.data.qsList[t.globalData.qIndex].result}),9==t.globalData.qIndex&&a.setData({btnstyle:e.mediaUrl+"/images/btncompleted.png"});else if(9==t.globalData.qIndex){t.globalData.qIndex=0,a.setData({viewIndex:2,titleURL:"../../../images/title-result.png"}),console.log("Score : ",t.globalData.score);var s="";100==t.globalData.score?s="../../../images/best.png":80==t.globalData.score||90==t.globalData.score?s="../../../images/good.png":60==t.globalData.score||70==t.globalData.score?s="../../../images/qualified.png":60>t.globalData.score&&(s="../../../images/non-qualified.png"),a.setData({resultImage:s}),t.globalData.score=0}},snapshotTapHandler:function(){var a=this;console.log("create snapshot image ..."),wx.showLoading({title:"正在生成 ..."});var e=wx.createCanvasContext("sharingCanvas",a);e.drawImage("../../../images/safety-survey-background.jpg",0,0,750,1206),e.drawImage("../../../images/title-result.png",212,215,335,72),e.drawImage("../../../images/wxqrcode.png",125,923,500,185),wx.getStorage({key:"userInfo",success:function(t){console.log(t.data),wx.getImageInfo({src:t.data.avatarUrl,success:function(t){console.log("local avatar info is ",t),e.drawImage(t.path,290,662,136,136),e.drawImage(a.data.resultImage,41,324,668,553),e.draw(),setTimeout(function(){wx.canvasToTempFilePath({canvasId:"sharingCanvas",success:function(e){console.log(e.tempFilePath),a.setData({sharingImagePath:e.tempFilePath,viewIndex:3}),wx.hideLoading()},fail:function(a){console.log(a)}},a)},200)}})}})},saveImageTapHandler:function(a){console.log("保存到相册");var e=this;wx.getSetting({success:function(a){a.authSetting["scope.writePhotosAlbum"]?e.saveImageToPhotosAlbum():wx.authorize({scope:"scope.writePhotosAlbum",success:function(a){e.saveImageToPhotosAlbum()},fail:function(a){wx.showToast({title:"存储海报失败"})}})}})},saveImageToPhotosAlbum:function(){var a=this;wx.saveImageToPhotosAlbum({filePath:this.data.sharingImagePath,success:function(e){console.log("保存成功 ..."),wx.showToast({title:"海报保存成功",icon:"success",complete:function(e){a.setData({viewIndex:2})}})},fail:function(){wx.showToast({title:"海报保存失败",icon:"none"})}})}}); 
 			}); 	require("pages/safety/survey/survey.js");
 		__wxRoute = 'pages/profile/index/index';__wxRouteBegin = true; 	define("pages/profile/index/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../../../osann.config.js");getApp();Page({data:{goonImage:o.mediaUrl+"/images/goon.png"},onLoad:function(o){},unpaidOrder:function(){wx.navigateTo({url:"/pages/product/orderlist/orderlist?status=0"})},unshippedOrder:function(){wx.navigateTo({url:"/pages/product/orderlist/orderlist?status=1"})},unreceiptOrder:function(){wx.navigateTo({url:"/pages/product/orderlist/orderlist?status=2"})},refundingOrder:function(){wx.navigateTo({url:"/pages/product/orderlist/orderlist?status=3"})},completedOrder:function(){wx.navigateTo({url:"/pages/product/orderlist/orderlist?status=4"})},addressTapHandler:function(o){wx.chooseAddress({success:function(o){console.log(o.userName),console.log(o.postalCode),console.log(o.provinceName),console.log(o.cityName),console.log(o.countyName),console.log(o.detailInfo),console.log(o.nationalCode),console.log(o.telNumber)}})},makePhoneCallTapHandler:function(o){wx.makePhoneCall({phoneNumber:"027-87228982"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){}}); 
 			}); 	require("pages/profile/index/index.js");
 		__wxRoute = 'pages/safety/articledetail/articledetail';__wxRouteBegin = true; 	define("pages/safety/articledetail/articledetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var n=getApp();Page({data:{currentUrl:"https://mp.weixin.qq.com/s/OrKD0dY9DqC5gRVq-MJyDQ"},onLoad:function(t){var e=this,o=n.globalData.currentArticleUrl;void 0!==t.url&&(o=decodeURIComponent(t.url)),e.setData({currentUrl:o})},onReady:function(){},onShow:function(){var n=this;console.log("Debug for webview url is ",n.data.currentUrl)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"小黄人安全乘车文章",path:"/pages/safety/articledetail/articledetail?url="+encodeURIComponent(n.globalData.currentArticleUrl),success:function(n){},fail:function(n){},complete:function(){}}}}); 
 			}); 	require("pages/safety/articledetail/articledetail.js");
 		__wxRoute = 'pages/safety/videodetail/videodetail';__wxRouteBegin = true; 	define("pages/safety/videodetail/videodetail.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../osann.config.js"),e=getApp();Page({data:{url:"",poster:"",subtitle:"",intro:"",safetyVideoBanner:t.mediaUrl+"/images/safety-video-banner.jpg"},onLoad:function(t){var o=this,n=e.globalData.currentVideoUrl,a=e.globalData.currentVideoPoster,r=e.globalData.currentSubtitle,i=e.globalData.currentIntro;void 0!==t.url&&(n=decodeURIComponent(t.url),a=decodeURIComponent(t.poster),r=t.title,i=t.intro),o.setData({url:n,poster:a,subtitle:r,intro:i})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){return{title:"小黄人安全乘车视频",path:"/pages/safety/videodetail/videodetail"+("?url="+encodeURIComponent(e.globalData.currentVideoUrl)+"&poster="+encodeURIComponent(e.globalData.currentVideoPoster)+"&title="+e.globalData.currentSubtitle+"&intro="+e.globalData.currentIntro),success:function(t){},fail:function(t){},complete:function(){}}}}); 
 			}); 	require("pages/safety/videodetail/videodetail.js");
 		__wxRoute = 'pages/product/order/order';__wxRouteBegin = true; 	define("pages/product/order/order.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function o(o,e,a){return e in o?Object.defineProperty(o,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[e]=a,o}var e=require("../../../osann.config.js"),a=getApp();Page({data:{withoutAddress:!0,expressInfo:{mobile:"027-87878787",consignee:"欧阳武隽",province:"湖北省",city:"武汉市",distric:"东湖高新技术开发区",address:"光谷大道6066号武汉高科中心B座6608号"},order:{title:"小程序测试品牌儿童安全座椅防磨垫子isofix接口",price:parseFloat(500).toFixed(2),num:2,total:parseFloat(450).toFixed(2),image:"https://cdn.osann-china.com/goods/1/sku/1.jpg"},hasCoupon:!1},fetchAddressFromWx:function(){var e=this;wx.chooseAddress({success:function(a){var r;console.log(a),e.setData((r={},o(r,"expressInfo.consignee",a.userName),o(r,"expressInfo.mobile",a.telNumber),o(r,"expressInfo.province",a.provinceName),o(r,"expressInfo.city",a.cityName),o(r,"expressInfo.district",a.countyName),o(r,"expressInfo.address",a.detailInfo),r)),e.data.withoutAddress&&e.setData({withoutAddress:!1}),console.log(e.data.expressInfo),wx.setStorage({key:"expressInfo",data:e.data.expressInfo})}})},confirmPayOrder:function(){var o=this;o.data.withoutAddress?wx.showToast({title:"请填写完整的快递信息",icon:"none",duration:1e3}):wx.request({url:e.apiUrl+"/order/new",method:"POST",data:{openid:a.globalData.orderInfo.openid,userid:a.globalData.orderInfo.userid,goodsID:a.globalData.orderInfo.goodsID,orderno:a.globalData.orderInfo.orderNO,sku:a.globalData.orderInfo.sku,title:a.globalData.orderInfo.title,image:a.globalData.orderInfo.image,num:a.globalData.orderInfo.num,price:a.globalData.orderInfo.price,total_amount:a.globalData.orderInfo.total,pay_amount:a.globalData.orderInfo.pay_amount,coupon_amount:a.globalData.orderInfo.coupon,consignee:o.data.expressInfo.consignee,mobile:o.data.expressInfo.mobile,province:o.data.expressInfo.province,city:o.data.expressInfo.city,district:o.data.expressInfo.distric,address:o.data.expressInfo.address},success:function(o){console.log("create order success -> ",o),console.log("orderinfo -> ",a.globalData.orderInfo),wx.request({url:e.payUrl+"/unifiedorder",method:"POST",data:{openid:a.globalData.orderInfo.openid,userid:a.globalData.orderInfo.userid,body:a.globalData.orderInfo.title,order_no:a.globalData.orderInfo.orderNO,total_fee:a.globalData.orderInfo.pay_amount},success:function(o){wx.requestPayment({timeStamp:o.data.timeStamp,nonceStr:o.data.nonceStr,package:o.data.package,signType:o.data.signType,paySign:o.data.paySign,success:function(o){console.log("pay success -> ",o),wx.redirectTo({url:"/pages/product/orderlist/orderlist?status=1"})},fail:function(o){console.log("pay fail -> ",o),wx.redirectTo({url:"/pages/product/orderlist/orderlist?status=0"})}})},fail:function(o){console.log("make pay-order failure -> ",o)},complete:function(o){console.log("make pay-order success -> ",o)}})},fail:function(o){console.log("create order failure -> ",o)},complete:function(o){console.log("create order complete -> ",o)}})},onLoad:function(r){var t=this;wx.getStorage({key:"expressInfo",success:function(o){t.setData({expressInfo:o.data,withoutAddress:!1})}}),wx.request({url:e.apiUrl+"/coupon/available",method:"POST",data:{openid:a.globalData.openid},success:function(o){console.log("available coupon info -> ",o," -> ",o.data.data),0===o.data.code?(a.globalData.orderInfo.coupon=5e3,a.globalData.orderInfo.pay_amount=a.globalData.orderInfo.total-a.globalData.orderInfo.coupon,t.setData({hasCoupon:!0})):(a.globalData.orderInfo.coupon=0,a.globalData.orderInfo.pay_amount=a.globalData.orderInfo.total)},fail:function(o){console.log("failure from ",e.apiUrl+"/coupon/available")},complete:function(r){if(console.log("now -> ",a.globalData.orderInfo),null!=a.globalData.orderInfo){var n;t.setData((n={},o(n,"order.title",a.globalData.orderInfo.title),o(n,"order.price",parseFloat(a.globalData.orderInfo.price/100).toFixed(2)),o(n,"order.image",e.mediaUrl+a.globalData.orderInfo.image),o(n,"order.num",a.globalData.orderInfo.num),o(n,"order.total",parseFloat(a.globalData.orderInfo.pay_amount/100).toFixed(2)),n))}console.log("now order -> ",t.data.order)}})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){}}); 
 			}); 	require("pages/product/order/order.js");
 		__wxRoute = 'pages/product/orderlist/orderlist';__wxRouteBegin = true; 	define("pages/product/orderlist/orderlist.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o=require("../../../osann.config.js"),e=getApp();Page({data:{statusType:["待付款","待发货","待收货","退换货","已完成"],currentType:0,tabClass:["","","","",""],orderList:[]},onLoad:function(o){console.log(o),this.setData({currentType:o.status})},statusTapHandler:function(o){var e=o.currentTarget.dataset.index,t=this;t.setData({currentType:e}),t.onShow()},cancelOrderTap:function(e){wx.showModal({title:"提示",content:"请确认是否要删除当前未支付订单，删除后无法找回。",success:function(t){t.confirm?(console.log("用户确定 - 删除订单"),console.log(e.currentTarget),wx.request({url:o.apiUrl+"/goods/delete",method:"POST",data:{orderno:e.currentTarget.dataset.orderno},success:function(o){console.log("删除订单 -> ",e.currentTarget.dataset.orderno)},fail:function(e){console.log("failure from ",o.apiUrl+"/goods/delete"),console.log(e)}})):t.cancel&&console.log("用户取消 - 删除订单")}})},toPayOrderTap:function(e){var t=this.data.orderList[e.currentTarget.dataset.index];console.log("order list -> ",t),wx.request({url:o.payUrl+"/unifiedorder",method:"POST",data:{openid:t.openid,userid:Number(t.userid),body:t.goods_title,order_no:t.order_no,total_fee:Number(t.pay_amount)},success:function(o){console.log("pay params -> ",o.data),wx.requestPayment({timeStamp:o.data.timeStamp,nonceStr:o.data.nonceStr,package:o.data.package,signType:o.data.signType,paySign:o.data.paySign,success:function(o){console.log("pay success -> ",o),wx.redirectTo({url:"/pages/product/orderlist/orderlist?status=1"})},fail:function(o){console.log("pay fail -> ",o),wx.showToast({title:"支付失败，请稍后再尝试支付",icon:"none",duration:1e3}),wx.redirectTo({url:"/pages/product/orderlist/orderlist?status=0"})}})},fail:function(o){console.log("make pay-order failure -> ",o)},complete:function(o){console.log("make pay-order success -> ",o)}})},toShippedTap:function(o){wx.showToast({title:"已成功提醒商家发货，小主请耐心等待！",icon:"none",duration:1e3})},buyAgainTapHandler:function(o){var e=o.currentTarget.dataset.goods,t="goodsID="+e.goods_id+"&price="+e.goods_price+"&title="+e.goods_title;wx.redirectTo({url:"/pages/product/goods/goods?"+t})},onReady:function(){},onShow:function(){var t=this;wx.showLoading();var a=this;wx.request({url:o.apiUrl+"/order/list/openid",method:"post",data:{openid:e.globalData.openid,status:parseInt(a.data.currentType)},success:function(e){wx.hideLoading(),console.log("order info -> ",e.data);var n=e.data.data;0==e.data.code&&null!=e.data.data?(e.data.data.forEach(function(e,t){n[t].goods_image=o.mediaUrl+e.goods_image,n[t].goods_price=parseFloat(e.goods_price/100).toFixed(2)}),a.setData({orderList:n})):t.setData({orderList:null})},fail:function(o){console.log("获取订单失败 -> ",o)}})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){}}); 
 			}); 	require("pages/product/orderlist/orderlist.js");
 	
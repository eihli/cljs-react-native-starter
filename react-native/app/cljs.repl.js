goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26988){
var map__26989 = p__26988;
var map__26989__$1 = (((((!((map__26989 == null))))?(((((map__26989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26989):map__26989);
var m = map__26989__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26989__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26989__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26993_27304 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26994_27305 = null;
var count__26995_27306 = (0);
var i__26996_27307 = (0);
while(true){
if((i__26996_27307 < count__26995_27306)){
var f_27318 = chunk__26994_27305.cljs$core$IIndexed$_nth$arity$2(null,i__26996_27307);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27318], 0));


var G__27319 = seq__26993_27304;
var G__27320 = chunk__26994_27305;
var G__27321 = count__26995_27306;
var G__27322 = (i__26996_27307 + (1));
seq__26993_27304 = G__27319;
chunk__26994_27305 = G__27320;
count__26995_27306 = G__27321;
i__26996_27307 = G__27322;
continue;
} else {
var temp__5735__auto___27323 = cljs.core.seq(seq__26993_27304);
if(temp__5735__auto___27323){
var seq__26993_27324__$1 = temp__5735__auto___27323;
if(cljs.core.chunked_seq_QMARK_(seq__26993_27324__$1)){
var c__4609__auto___27325 = cljs.core.chunk_first(seq__26993_27324__$1);
var G__27326 = cljs.core.chunk_rest(seq__26993_27324__$1);
var G__27327 = c__4609__auto___27325;
var G__27328 = cljs.core.count(c__4609__auto___27325);
var G__27329 = (0);
seq__26993_27304 = G__27326;
chunk__26994_27305 = G__27327;
count__26995_27306 = G__27328;
i__26996_27307 = G__27329;
continue;
} else {
var f_27330 = cljs.core.first(seq__26993_27324__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_27330], 0));


var G__27333 = cljs.core.next(seq__26993_27324__$1);
var G__27334 = null;
var G__27335 = (0);
var G__27336 = (0);
seq__26993_27304 = G__27333;
chunk__26994_27305 = G__27334;
count__26995_27306 = G__27335;
i__26996_27307 = G__27336;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27337 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_27337], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_27337)))?cljs.core.second(arglists_27337):arglists_27337)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27006_27340 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27007_27341 = null;
var count__27008_27342 = (0);
var i__27009_27343 = (0);
while(true){
if((i__27009_27343 < count__27008_27342)){
var vec__27057_27344 = chunk__27007_27341.cljs$core$IIndexed$_nth$arity$2(null,i__27009_27343);
var name_27345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27057_27344,(0),null);
var map__27060_27346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27057_27344,(1),null);
var map__27060_27347__$1 = (((((!((map__27060_27346 == null))))?(((((map__27060_27346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27060_27346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27060_27346):map__27060_27346);
var doc_27348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27060_27347__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27060_27347__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27345], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27349], 0));

if(cljs.core.truth_(doc_27348)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27348], 0));
} else {
}


var G__27355 = seq__27006_27340;
var G__27356 = chunk__27007_27341;
var G__27357 = count__27008_27342;
var G__27358 = (i__27009_27343 + (1));
seq__27006_27340 = G__27355;
chunk__27007_27341 = G__27356;
count__27008_27342 = G__27357;
i__27009_27343 = G__27358;
continue;
} else {
var temp__5735__auto___27360 = cljs.core.seq(seq__27006_27340);
if(temp__5735__auto___27360){
var seq__27006_27364__$1 = temp__5735__auto___27360;
if(cljs.core.chunked_seq_QMARK_(seq__27006_27364__$1)){
var c__4609__auto___27365 = cljs.core.chunk_first(seq__27006_27364__$1);
var G__27366 = cljs.core.chunk_rest(seq__27006_27364__$1);
var G__27367 = c__4609__auto___27365;
var G__27368 = cljs.core.count(c__4609__auto___27365);
var G__27369 = (0);
seq__27006_27340 = G__27366;
chunk__27007_27341 = G__27367;
count__27008_27342 = G__27368;
i__27009_27343 = G__27369;
continue;
} else {
var vec__27090_27370 = cljs.core.first(seq__27006_27364__$1);
var name_27371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090_27370,(0),null);
var map__27093_27372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27090_27370,(1),null);
var map__27093_27373__$1 = (((((!((map__27093_27372 == null))))?(((((map__27093_27372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27093_27372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27093_27372):map__27093_27372);
var doc_27374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093_27373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27093_27373__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_27371], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_27375], 0));

if(cljs.core.truth_(doc_27374)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_27374], 0));
} else {
}


var G__27378 = cljs.core.next(seq__27006_27364__$1);
var G__27379 = null;
var G__27380 = (0);
var G__27381 = (0);
seq__27006_27340 = G__27378;
chunk__27007_27341 = G__27379;
count__27008_27342 = G__27380;
i__27009_27343 = G__27381;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27109 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27110 = null;
var count__27111 = (0);
var i__27112 = (0);
while(true){
if((i__27112 < count__27111)){
var role = chunk__27110.cljs$core$IIndexed$_nth$arity$2(null,i__27112);
var temp__5735__auto___27384__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27384__$1)){
var spec_27385 = temp__5735__auto___27384__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27385)], 0));
} else {
}


var G__27386 = seq__27109;
var G__27387 = chunk__27110;
var G__27388 = count__27111;
var G__27389 = (i__27112 + (1));
seq__27109 = G__27386;
chunk__27110 = G__27387;
count__27111 = G__27388;
i__27112 = G__27389;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__27109);
if(temp__5735__auto____$1){
var seq__27109__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27109__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__27109__$1);
var G__27390 = cljs.core.chunk_rest(seq__27109__$1);
var G__27391 = c__4609__auto__;
var G__27392 = cljs.core.count(c__4609__auto__);
var G__27393 = (0);
seq__27109 = G__27390;
chunk__27110 = G__27391;
count__27111 = G__27392;
i__27112 = G__27393;
continue;
} else {
var role = cljs.core.first(seq__27109__$1);
var temp__5735__auto___27395__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___27395__$2)){
var spec_27418 = temp__5735__auto___27395__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_27418)], 0));
} else {
}


var G__27419 = cljs.core.next(seq__27109__$1);
var G__27420 = null;
var G__27421 = (0);
var G__27422 = (0);
seq__27109 = G__27419;
chunk__27110 = G__27420;
count__27111 = G__27421;
i__27112 = G__27422;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__27424 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__27425 = cljs.core.ex_cause(t);
via = G__27424;
t = G__27425;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27208 = datafied_throwable;
var map__27208__$1 = (((((!((map__27208 == null))))?(((((map__27208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27208):map__27208);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27208__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27208__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27208__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27209 = cljs.core.last(via);
var map__27209__$1 = (((((!((map__27209 == null))))?(((((map__27209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27209):map__27209);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27209__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27209__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27209__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27210 = data;
var map__27210__$1 = (((((!((map__27210 == null))))?(((((map__27210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27210):map__27210);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27210__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27210__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27210__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27211 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27211__$1 = (((((!((map__27211 == null))))?(((((map__27211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27211):map__27211);
var top_data = map__27211__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27220 = phase;
var G__27220__$1 = (((G__27220 instanceof cljs.core.Keyword))?G__27220.fqn:null);
switch (G__27220__$1) {
case "read-source":
var map__27221 = data;
var map__27221__$1 = (((((!((map__27221 == null))))?(((((map__27221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27221):map__27221);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27221__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27221__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27223 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27223__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27223,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27223);
var G__27223__$2 = (cljs.core.truth_((function (){var fexpr__27226 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27226.cljs$core$IFn$_invoke$arity$1 ? fexpr__27226.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27226.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27223__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27223__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27223__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27223__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27229 = top_data;
var G__27229__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27229);
var G__27229__$2 = (cljs.core.truth_((function (){var fexpr__27230 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27230.cljs$core$IFn$_invoke$arity$1 ? fexpr__27230.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27230.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27229__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27229__$1);
var G__27229__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27229__$2);
var G__27229__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27229__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27229__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27229__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27231 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27231,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27231,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27231,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27231,(3),null);
var G__27234 = top_data;
var G__27234__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27234,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27234);
var G__27234__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27234__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27234__$1);
var G__27234__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27234__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27234__$2);
var G__27234__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27234__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27234__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27234__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27234__$4;
}

break;
case "execution":
var vec__27235 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__27207_SHARP_){
var or__4185__auto__ = (p1__27207_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__27250 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27250.cljs$core$IFn$_invoke$arity$1 ? fexpr__27250.cljs$core$IFn$_invoke$arity$1(p1__27207_SHARP_) : fexpr__27250.call(null,p1__27207_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__27251 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27251__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27251,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27251);
var G__27251__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27251__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27251__$1);
var G__27251__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27251__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27251__$2);
var G__27251__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27251__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27251__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27251__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27251__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27220__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27259){
var map__27260 = p__27259;
var map__27260__$1 = (((((!((map__27260 == null))))?(((((map__27260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27260):map__27260);
var triage_data = map__27260__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27260__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__27262 = phase;
var G__27262__$1 = (((G__27262 instanceof cljs.core.Keyword))?G__27262.fqn:null);
switch (G__27262__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27263 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27264 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27265 = loc;
var G__27266 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27267_27463 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27268_27464 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27269_27465 = true;
var _STAR_print_fn_STAR__temp_val__27270_27466 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27269_27465);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27270_27466);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27253_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27253_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27268_27464);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27267_27463);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27263,G__27264,G__27265,G__27266) : format.call(null,G__27263,G__27264,G__27265,G__27266));

break;
case "macroexpansion":
var G__27271 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27272 = cause_type;
var G__27273 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27274 = loc;
var G__27275 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27271,G__27272,G__27273,G__27274,G__27275) : format.call(null,G__27271,G__27272,G__27273,G__27274,G__27275));

break;
case "compile-syntax-check":
var G__27276 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27277 = cause_type;
var G__27278 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27279 = loc;
var G__27280 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27276,G__27277,G__27278,G__27279,G__27280) : format.call(null,G__27276,G__27277,G__27278,G__27279,G__27280));

break;
case "compilation":
var G__27281 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27282 = cause_type;
var G__27283 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27284 = loc;
var G__27285 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27281,G__27282,G__27283,G__27284,G__27285) : format.call(null,G__27281,G__27282,G__27283,G__27284,G__27285));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__27286 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__27287 = symbol;
var G__27288 = loc;
var G__27289 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27290_27472 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27291_27473 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27292_27474 = true;
var _STAR_print_fn_STAR__temp_val__27293_27475 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27292_27474);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27293_27475);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27256_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27256_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27291_27473);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27290_27472);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27286,G__27287,G__27288,G__27289) : format.call(null,G__27286,G__27287,G__27288,G__27289));
} else {
var G__27295 = "Execution error%s at %s(%s).\n%s\n";
var G__27296 = cause_type;
var G__27297 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27298 = loc;
var G__27299 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27295,G__27296,G__27297,G__27298,G__27299) : format.call(null,G__27295,G__27296,G__27297,G__27298,G__27299));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27262__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

goog.provide('shadow.cljs.devtools.client.react_native');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.object');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.react_native !== 'undefined') && (typeof shadow.cljs.devtools.client.react_native.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.react_native.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.react_native !== 'undefined') && (typeof shadow.cljs.devtools.client.react_native.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.react_native.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.react_native.ws_msg = (function shadow$cljs$devtools$client$react_native$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.react_native.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.react_native.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.react_native.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$react_native$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.react_native.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.react_native.devtools_msg = (function shadow$cljs$devtools$client$react_native$devtools_msg(var_args){
var G__29932 = arguments.length;
switch (G__29932) {
case 1:
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1 = (function (x){
return console.log(x);
}));

(shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return console.log(x,y);
}));

(shadow.cljs.devtools.client.react_native.devtools_msg.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.react_native.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$react_native$src_is_loaded_QMARK_(p__29933){
var map__29934 = p__29933;
var map__29934__$1 = (((((!((map__29934 == null))))?(((((map__29934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29934):map__29934);
var src = map__29934__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29934__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29934__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.react_native.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.react_native.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.react_native.script_eval = (function shadow$cljs$devtools$client$react_native$script_eval(code){
return goog.global.eval(code);
});
shadow.cljs.devtools.client.react_native.do_js_load = (function shadow$cljs$devtools$client$react_native$do_js_load(sources){
var seq__29936 = cljs.core.seq(sources);
var chunk__29937 = null;
var count__29938 = (0);
var i__29939 = (0);
while(true){
if((i__29939 < count__29938)){
var map__29960 = chunk__29937.cljs$core$IIndexed$_nth$arity$2(null,i__29939);
var map__29960__$1 = (((((!((map__29960 == null))))?(((((map__29960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29960):map__29960);
var src = map__29960__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29960__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29960__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$2("load JS",resource_name);

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.react_native.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__30106 = seq__29936;
var G__30107 = chunk__29937;
var G__30108 = count__29938;
var G__30109 = (i__29939 + (1));
seq__29936 = G__30106;
chunk__29937 = G__30107;
count__29938 = G__30108;
i__29939 = G__30109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29936);
if(temp__5735__auto__){
var seq__29936__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29936__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__29936__$1);
var G__30110 = cljs.core.chunk_rest(seq__29936__$1);
var G__30111 = c__4609__auto__;
var G__30112 = cljs.core.count(c__4609__auto__);
var G__30113 = (0);
seq__29936 = G__30110;
chunk__29937 = G__30111;
count__29938 = G__30112;
i__29939 = G__30113;
continue;
} else {
var map__29970 = cljs.core.first(seq__29936__$1);
var map__29970__$1 = (((((!((map__29970 == null))))?(((((map__29970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29970):map__29970);
var src = map__29970__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29970__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29970__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$2("load JS",resource_name);

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.react_native.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__30115 = cljs.core.next(seq__29936__$1);
var G__30116 = null;
var G__30117 = (0);
var G__30118 = (0);
seq__29936 = G__30115;
chunk__29937 = G__30116;
count__29938 = G__30117;
i__29939 = G__30118;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.react_native.do_js_reload = (function shadow$cljs$devtools$client$react_native$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.react_native.do_js_load(sources);
}),complete_fn);
});
shadow.cljs.devtools.client.react_native.load_sources = (function shadow$cljs$devtools$client$react_native$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__29987 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__29987) : callback.call(null,G__29987));
} else {
var G__29988 = shadow.cljs.devtools.client.env.files_url();
var G__29989 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__29990 = "POST";
var G__29991 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__29992 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__29988,G__29989,G__29990,G__29991,G__29992);
}
});
shadow.cljs.devtools.client.react_native.noop = (function shadow$cljs$devtools$client$react_native$noop(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30121 = arguments.length;
var i__4790__auto___30122 = (0);
while(true){
if((i__4790__auto___30122 < len__4789__auto___30121)){
args__4795__auto__.push((arguments[i__4790__auto___30122]));

var G__30123 = (i__4790__auto___30122 + (1));
i__4790__auto___30122 = G__30123;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.cljs.devtools.client.react_native.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.cljs.devtools.client.react_native.noop.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return null;
}));

(shadow.cljs.devtools.client.react_native.noop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.cljs.devtools.client.react_native.noop.cljs$lang$applyTo = (function (seq29993){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29993));
}));

shadow.cljs.devtools.client.react_native.handle_build_complete = (function shadow$cljs$devtools$client$react_native$handle_build_complete(p__29995){
var map__29996 = p__29995;
var map__29996__$1 = (((((!((map__29996 == null))))?(((((map__29996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29996):map__29996);
var msg = map__29996__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29996__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29996__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__29999 = info;
var map__29999__$1 = (((((!((map__29999 == null))))?(((((map__29999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29999):map__29999);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29999__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29999__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$react_native$handle_build_complete_$_iter__30001(s__30002){
return (new cljs.core.LazySeq(null,(function (){
var s__30002__$1 = s__30002;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30002__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__30007 = cljs.core.first(xs__6292__auto__);
var map__30007__$1 = (((((!((map__30007 == null))))?(((((map__30007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30007):map__30007);
var src = map__30007__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30007__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30007__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__30002__$1,map__30007,map__30007__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__29999,map__29999__$1,sources,compiled,map__29996,map__29996__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$react_native$handle_build_complete_$_iter__30001_$_iter__30003(s__30004){
return (new cljs.core.LazySeq(null,((function (s__30002__$1,map__30007,map__30007__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__29999,map__29999__$1,sources,compiled,map__29996,map__29996__$1,msg,info,reload_info){
return (function (){
var s__30004__$1 = s__30004;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30004__$1);
if(temp__5735__auto____$1){
var s__30004__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30004__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__30004__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__30006 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__30005 = (0);
while(true){
if((i__30005 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__30005);
cljs.core.chunk_append(b__30006,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__30127 = (i__30005 + (1));
i__30005 = G__30127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30006),shadow$cljs$devtools$client$react_native$handle_build_complete_$_iter__30001_$_iter__30003(cljs.core.chunk_rest(s__30004__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30006),null);
}
} else {
var warning = cljs.core.first(s__30004__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$react_native$handle_build_complete_$_iter__30001_$_iter__30003(cljs.core.rest(s__30004__$2)));
}
} else {
return null;
}
break;
}
});})(s__30002__$1,map__30007,map__30007__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__29999,map__29999__$1,sources,compiled,map__29996,map__29996__$1,msg,info,reload_info))
,null,null));
});})(s__30002__$1,map__30007,map__30007__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__29999,map__29999__$1,sources,compiled,map__29996,map__29996__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$react_native$handle_build_complete_$_iter__30001(cljs.core.rest(s__30002__$1)));
} else {
var G__30129 = cljs.core.rest(s__30002__$1);
s__30002__$1 = G__30129;
continue;
}
} else {
var G__30130 = cljs.core.rest(s__30002__$1);
s__30002__$1 = G__30130;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30017){
var map__30018 = p__30017;
var map__30018__$1 = (((((!((map__30018 == null))))?(((((map__30018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30018):map__30018);
var src = map__30018__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30018__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30018__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.react_native.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__30020){
var map__30022 = p__30020;
var map__30022__$1 = (((((!((map__30022 == null))))?(((((map__30022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30022):map__30022);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30022__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources)));
if(cljs.core.seq(sources_to_get)){
return shadow.cljs.devtools.client.react_native.load_sources(sources_to_get,(function (p1__29994_SHARP_){
return shadow.cljs.devtools.client.react_native.do_js_reload(msg,p1__29994_SHARP_,shadow.cljs.devtools.client.react_native.noop);
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.react_native.repl_error = (function shadow$cljs$devtools$client$react_native$repl_error(e){
console.error("repl/invoke error",e.message,e);

return shadow.cljs.devtools.client.env.repl_error(e);
});
shadow.cljs.devtools.client.react_native.repl_invoke = (function shadow$cljs$devtools$client$react_native$repl_invoke(p__30032){
var map__30037 = p__30032;
var map__30037__$1 = (((((!((map__30037 == null))))?(((((map__30037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30037):map__30037);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30037__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30037__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return eval(js);
}),shadow.cljs.devtools.client.react_native.repl_error);
return shadow.cljs.devtools.client.react_native.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.react_native.repl_require = (function shadow$cljs$devtools$client$react_native$repl_require(p__30048,done){
var map__30049 = p__30048;
var map__30049__$1 = (((((!((map__30049 == null))))?(((((map__30049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30049):map__30049);
var msg = map__30049__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__30051){
var map__30052 = p__30051;
var map__30052__$1 = (((((!((map__30052 == null))))?(((((map__30052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30052):map__30052);
var src = map__30052__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30052__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.react_native.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.react_native.load_sources(sources_to_load,(function (sources__$1){
shadow.cljs.devtools.client.react_native.do_js_load(sources__$1);

shadow.cljs.devtools.client.react_native.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.react_native.repl_init = (function shadow$cljs$devtools$client$react_native$repl_init(p__30055,done){
var map__30056 = p__30055;
var map__30056__$1 = (((((!((map__30056 == null))))?(((((map__30056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30056):map__30056);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30056__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30056__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.react_native.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.react_native.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.react_native.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.react_native.do_js_load(sources);

shadow.cljs.devtools.client.react_native.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1("REPL init successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.react_native.repl_set_ns = (function shadow$cljs$devtools$client$react_native$repl_set_ns(p__30081){
var map__30082 = p__30081;
var map__30082__$1 = (((((!((map__30082 == null))))?(((((map__30082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30082):map__30082);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30082__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30082__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.react_native.repl_ns_ref,ns);

return shadow.cljs.devtools.client.react_native.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.react_native.handle_message = (function shadow$cljs$devtools$client$react_native$handle_message(p__30084,done){
var map__30085 = p__30084;
var map__30085__$1 = (((((!((map__30085 == null))))?(((((map__30085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30085):map__30085);
var msg = map__30085__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30085__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__30087_30131 = type;
var G__30087_30132__$1 = (((G__30087_30131 instanceof cljs.core.Keyword))?G__30087_30131.fqn:null);
switch (G__30087_30132__$1) {
case "repl/invoke":
shadow.cljs.devtools.client.react_native.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.react_native.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.react_native.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.react_native.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.react_native.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.react_native.handle_build_complete(msg);

break;
case "build-failure":

break;
case "build-init":

break;
case "build-start":

break;
case "pong":

break;
case "client/stale":
shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1("Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1(["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.react_native.ws_connect = (function shadow$cljs$devtools$client$react_native$ws_connect(){
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"react-native","react-native",-1543085138));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.react_native.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.react_native.handle_message);
}));

(socket.onopen = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.react_native.ws_msg);

return shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1("WebSocket disconnected!");

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.react_native.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
}));

return (socket.onerror = (function (e){
return console.error(["WebSocket connect failed:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e.message),"\n","It was trying to connect to: ",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ws_url,(0),clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(ws_url,"/",(6))),"\n"].join(''));
}));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___30135 = cljs.core.deref(shadow.cljs.devtools.client.react_native.socket_ref);
if(cljs.core.truth_(temp__5735__auto___30135)){
var s_30136 = temp__5735__auto___30135;
shadow.cljs.devtools.client.react_native.devtools_msg.cljs$core$IFn$_invoke$arity$1("connection reset!");

(s_30136.onclose = (function (e){
return null;
}));

s_30136.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.react_native.socket_ref,null);
} else {
}

shadow.cljs.devtools.client.react_native.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.react_native.js.map

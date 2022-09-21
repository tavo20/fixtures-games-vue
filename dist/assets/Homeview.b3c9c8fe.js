import{_ as L,d as ge,u as K,a as Z,t as se,o as h,c as v,b as m,e as _,F as ee,r as te,f as N,g as we,h as ae,p as ye,i as pe,j as _e,k as D,l as F,w as z,m as be,n as X}from"./index.0434928e.js";const Te=e=>(ye("data-v-350dcc0e"),e=e(),pe(),e),Ce={class:"container-general"},ke=Te(()=>m("h2",null,"Leagues",-1)),De={__name:"League",props:{leagues:{type:Array,default:[]}},setup(e){const a=e,t=ge(()=>we(()=>import("./LeagueCo.58250392.js"),["assets/LeagueCo.58250392.js","assets/LeagueCo.01f63bdf.css","assets/index.0434928e.js","assets/index.9bf1de04.css"])),r=K();Z();let{leagues:n}=se(a);function i(o){r.push({path:`/home/league/${o.league}`})}return(o,l)=>(h(),v("section",null,[m("div",Ce,[ke,_(n)&&_(n).length?(h(!0),v(ee,{key:0},te(_(n),s=>(h(),ae(_(t),{is:s,key:s._id,onClick:()=>i(s),league:s},null,8,["is","onClick","league"]))),128)):N("",!0)])]))}},Oe=L(De,[["__scopeId","data-v-350dcc0e"]]),xe={},Me=m("h2",null,"Information",-1),Pe=[Me];function Se(e,a){return h(),v("div",null,Pe)}const We=L(xe,[["render",Se]]),Ue="/assets/calendar.86adcafb.png",Ee="/assets/star.b48fd479.png",Ye="/assets/star-fill.72c0af0f.png",$e={class:"container-logo-league"},Fe=["src"],Ne={class:"games"},Le={class:"container-game"},qe=["onClick"],Re={key:0,class:"img-only-start",src:Ee,alt:""},Ie={key:1,class:"img-fill-star",src:Ye,alt:""},He={class:"team team-home"},Ve=["src"],je={key:0,class:"hour"},Ge={key:1,class:"center"},Qe={class:"team team-away"},Ae=["src"],Be={__name:"Game",props:{league:{type:Object,default:{}}},setup(e){const a=t=>{t.favorite=!t.favorite};return(t,r)=>(h(),v("div",null,[m("div",$e,[m("div",null,[m("img",{src:e.league.league.logo,alt:"logo-league"},null,8,Fe)]),m("h3",null,[_e(D(e.league.league.name)+" ",1),m("span",null,D(e.league.league.country),1)])]),m("div",Ne,[(h(!0),v(ee,null,te(e.league.fixtures,n=>(h(),v("div",Le,[m("div",{class:"x-div center",onClick:()=>a(n)},[n.favorite?N("",!0):(h(),v("img",Re)),n.favorite?(h(),v("img",Ie)):N("",!0)],8,qe),m("div",He,[m("div",null,D(n.teams.home.name),1),m("figure",null,[m("img",{src:n.teams.home.logo,alt:""},null,8,Ve)])]),n.fixture.status.short!=="FT"?(h(),v("div",je,D(n.hour),1)):(h(),v("div",Ge,D(n.score.fulltime.home)+" - "+D(n.score.fulltime.away),1)),m("div",Qe,[m("figure",null,[m("img",{src:n.teams.away.logo,alt:""},null,8,Ae)]),m("div",null,D(n.teams.away.name),1)])]))),256))])]))}},Xe={class:"container-date"},Je=["value"],ze={class:"icon-calendar-container"},Ke={key:0,class:"league-container"},Ze={key:1,class:"without-games"},et={__name:"Games",props:["fixtures","dateFixtures"],emits:["changeDate"],setup(e,{emit:a}){const t=e;K(),Z();let r=F(!1),{fixtures:n,dateFixtures:i}=se(t);n.value||(r.value=!0),z(n,(s,u)=>{if(!s){r.value=!0;return}r.value=!1});const o=async s=>{const u=s.target.value;a("changeDate",{date:u})},l=()=>{const s=document.getElementById("viewCalendar");s&&s.showPicker()};return(s,u)=>(h(),v("section",null,[m("div",Xe,[m("input",{type:"date",id:"viewCalendar",name:"trip-start",min:"2022-01-01",max:"2022-12-31",value:_(i),onChange:o},null,40,Je),m("div",ze,[m("div",{onClick:l},D(_(i)),1),m("img",{onClick:l,class:"img-calendar",src:Ue,alt:""})])]),_(r)?(h(),v("div",Ze," There are no matches for this date. ")):(h(),v("div",Ke,[(h(!0),v(ee,null,te(_(n),(f,c)=>(h(),ae(Be,{key:c,league:f},null,8,["league"]))),128))]))]))}},tt=L(et,[["__scopeId","data-v-f746af2d"]]),at={},rt={class:"loading"};function nt(e,a){return h(),v("div",rt," ... ")}const it=L(at,[["render",nt],["__scopeId","data-v-c828d895"]]);function M(e){if(e===null||e===!0||e===!1)return NaN;var a=Number(e);return isNaN(a)?a:a<0?Math.ceil(a):Math.floor(a)}function w(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function T(e){w(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&a==="[object Date]"?new Date(e.getTime()):typeof e=="number"||a==="[object Number]"?new Date(e):((typeof e=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function ot(e,a){w(2,arguments);var t=T(e).getTime(),r=M(a);return new Date(t+r)}var st={};function V(){return st}function ut(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}function lt(e){return w(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function dt(e){if(w(1,arguments),!lt(e)&&typeof e!="number")return!1;var a=T(e);return!isNaN(Number(a))}function ct(e,a){w(2,arguments);var t=M(a);return ot(e,-t)}var ft=864e5;function mt(e){w(1,arguments);var a=T(e),t=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var r=a.getTime(),n=t-r;return Math.floor(n/ft)+1}function I(e){w(1,arguments);var a=1,t=T(e),r=t.getUTCDay(),n=(r<a?7:0)+r-a;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function ue(e){w(1,arguments);var a=T(e),t=a.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(t+1,0,4),r.setUTCHours(0,0,0,0);var n=I(r),i=new Date(0);i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0);var o=I(i);return a.getTime()>=n.getTime()?t+1:a.getTime()>=o.getTime()?t:t-1}function ht(e){w(1,arguments);var a=ue(e),t=new Date(0);t.setUTCFullYear(a,0,4),t.setUTCHours(0,0,0,0);var r=I(t);return r}var vt=6048e5;function gt(e){w(1,arguments);var a=T(e),t=I(a).getTime()-ht(a).getTime();return Math.round(t/vt)+1}function H(e,a){var t,r,n,i,o,l,s,u;w(1,arguments);var f=V(),c=M((t=(r=(n=(i=a==null?void 0:a.weekStartsOn)!==null&&i!==void 0?i:a==null||(o=a.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&n!==void 0?n:f.weekStartsOn)!==null&&r!==void 0?r:(s=f.locale)===null||s===void 0||(u=s.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&t!==void 0?t:0);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=T(e),g=y.getUTCDay(),b=(g<c?7:0)+g-c;return y.setUTCDate(y.getUTCDate()-b),y.setUTCHours(0,0,0,0),y}function le(e,a){var t,r,n,i,o,l,s,u;w(1,arguments);var f=T(e),c=f.getUTCFullYear(),y=V(),g=M((t=(r=(n=(i=a==null?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:a==null||(o=a.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:y.firstWeekContainsDate)!==null&&r!==void 0?r:(s=y.locale)===null||s===void 0||(u=s.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(c+1,0,g),b.setUTCHours(0,0,0,0);var S=H(b,a),O=new Date(0);O.setUTCFullYear(c,0,g),O.setUTCHours(0,0,0,0);var W=H(O,a);return f.getTime()>=S.getTime()?c+1:f.getTime()>=W.getTime()?c:c-1}function wt(e,a){var t,r,n,i,o,l,s,u;w(1,arguments);var f=V(),c=M((t=(r=(n=(i=a==null?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:a==null||(o=a.locale)===null||o===void 0||(l=o.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&n!==void 0?n:f.firstWeekContainsDate)!==null&&r!==void 0?r:(s=f.locale)===null||s===void 0||(u=s.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&t!==void 0?t:1),y=le(e,a),g=new Date(0);g.setUTCFullYear(y,0,c),g.setUTCHours(0,0,0,0);var b=H(g,a);return b}var yt=6048e5;function pt(e,a){w(1,arguments);var t=T(e),r=H(t,a).getTime()-wt(t,a).getTime();return Math.round(r/yt)+1}function d(e,a){for(var t=e<0?"-":"",r=Math.abs(e).toString();r.length<a;)r="0"+r;return t+r}var _t={y:function(e,a){var t=e.getUTCFullYear(),r=t>0?t:1-t;return d(a==="yy"?r%100:r,a.length)},M:function(e,a){var t=e.getUTCMonth();return a==="M"?String(t+1):d(t+1,2)},d:function(e,a){return d(e.getUTCDate(),a.length)},a:function(e,a){var t=e.getUTCHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(e,a){return d(e.getUTCHours()%12||12,a.length)},H:function(e,a){return d(e.getUTCHours(),a.length)},m:function(e,a){return d(e.getUTCMinutes(),a.length)},s:function(e,a){return d(e.getUTCSeconds(),a.length)},S:function(e,a){var t=a.length,r=e.getUTCMilliseconds(),n=Math.floor(r*Math.pow(10,t-3));return d(n,a.length)}};const k=_t;var P={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},bt={G:function(e,a,t){var r=e.getUTCFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,a,t){if(a==="yo"){var r=e.getUTCFullYear(),n=r>0?r:1-r;return t.ordinalNumber(n,{unit:"year"})}return k.y(e,a)},Y:function(e,a,t,r){var n=le(e,r),i=n>0?n:1-n;if(a==="YY"){var o=i%100;return d(o,2)}return a==="Yo"?t.ordinalNumber(i,{unit:"year"}):d(i,a.length)},R:function(e,a){var t=ue(e);return d(t,a.length)},u:function(e,a){var t=e.getUTCFullYear();return d(t,a.length)},Q:function(e,a,t){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(a){case"Q":return String(r);case"QQ":return d(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,a,t){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(a){case"q":return String(r);case"qq":return d(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,a,t){var r=e.getUTCMonth();switch(a){case"M":case"MM":return k.M(e,a);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,a,t){var r=e.getUTCMonth();switch(a){case"L":return String(r+1);case"LL":return d(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,a,t,r){var n=pt(e,r);return a==="wo"?t.ordinalNumber(n,{unit:"week"}):d(n,a.length)},I:function(e,a,t){var r=gt(e);return a==="Io"?t.ordinalNumber(r,{unit:"week"}):d(r,a.length)},d:function(e,a,t){return a==="do"?t.ordinalNumber(e.getUTCDate(),{unit:"date"}):k.d(e,a)},D:function(e,a,t){var r=mt(e);return a==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):d(r,a.length)},E:function(e,a,t){var r=e.getUTCDay();switch(a){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,a,t,r){var n=e.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(a){case"e":return String(i);case"ee":return d(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(n,{width:"short",context:"formatting"});case"eeee":default:return t.day(n,{width:"wide",context:"formatting"})}},c:function(e,a,t,r){var n=e.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(a){case"c":return String(i);case"cc":return d(i,a.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(n,{width:"narrow",context:"standalone"});case"cccccc":return t.day(n,{width:"short",context:"standalone"});case"cccc":default:return t.day(n,{width:"wide",context:"standalone"})}},i:function(e,a,t){var r=e.getUTCDay(),n=r===0?7:r;switch(a){case"i":return String(n);case"ii":return d(n,a.length);case"io":return t.ordinalNumber(n,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,a,t){var r=e.getUTCHours(),n=r/12>=1?"pm":"am";switch(a){case"a":case"aa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,a,t){var r=e.getUTCHours(),n;switch(r===12?n=P.noon:r===0?n=P.midnight:n=r/12>=1?"pm":"am",a){case"b":case"bb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,a,t){var r=e.getUTCHours(),n;switch(r>=17?n=P.evening:r>=12?n=P.afternoon:r>=4?n=P.morning:n=P.night,a){case"B":case"BB":case"BBB":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,a,t){if(a==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return k.h(e,a)},H:function(e,a,t){return a==="Ho"?t.ordinalNumber(e.getUTCHours(),{unit:"hour"}):k.H(e,a)},K:function(e,a,t){var r=e.getUTCHours()%12;return a==="Ko"?t.ordinalNumber(r,{unit:"hour"}):d(r,a.length)},k:function(e,a,t){var r=e.getUTCHours();return r===0&&(r=24),a==="ko"?t.ordinalNumber(r,{unit:"hour"}):d(r,a.length)},m:function(e,a,t){return a==="mo"?t.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):k.m(e,a)},s:function(e,a,t){return a==="so"?t.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):k.s(e,a)},S:function(e,a){return k.S(e,a)},X:function(e,a,t,r){var n=r._originalDate||e,i=n.getTimezoneOffset();if(i===0)return"Z";switch(a){case"X":return ne(i);case"XXXX":case"XX":return x(i);case"XXXXX":case"XXX":default:return x(i,":")}},x:function(e,a,t,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(a){case"x":return ne(i);case"xxxx":case"xx":return x(i);case"xxxxx":case"xxx":default:return x(i,":")}},O:function(e,a,t,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+re(i,":");case"OOOO":default:return"GMT"+x(i,":")}},z:function(e,a,t,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+re(i,":");case"zzzz":default:return"GMT"+x(i,":")}},t:function(e,a,t,r){var n=r._originalDate||e,i=Math.floor(n.getTime()/1e3);return d(i,a.length)},T:function(e,a,t,r){var n=r._originalDate||e,i=n.getTime();return d(i,a.length)}};function re(e,a){var t=e>0?"-":"+",r=Math.abs(e),n=Math.floor(r/60),i=r%60;if(i===0)return t+String(n);var o=a||"";return t+String(n)+o+d(i,2)}function ne(e,a){if(e%60===0){var t=e>0?"-":"+";return t+d(Math.abs(e)/60,2)}return x(e,a)}function x(e,a){var t=a||"",r=e>0?"-":"+",n=Math.abs(e),i=d(Math.floor(n/60),2),o=d(n%60,2);return r+i+t+o}const Tt=bt;var ie=function(e,a){switch(e){case"P":return a.date({width:"short"});case"PP":return a.date({width:"medium"});case"PPP":return a.date({width:"long"});case"PPPP":default:return a.date({width:"full"})}},de=function(e,a){switch(e){case"p":return a.time({width:"short"});case"pp":return a.time({width:"medium"});case"ppp":return a.time({width:"long"});case"pppp":default:return a.time({width:"full"})}},Ct=function(e,a){var t=e.match(/(P+)(p+)?/)||[],r=t[1],n=t[2];if(!n)return ie(e,a);var i;switch(r){case"P":i=a.dateTime({width:"short"});break;case"PP":i=a.dateTime({width:"medium"});break;case"PPP":i=a.dateTime({width:"long"});break;case"PPPP":default:i=a.dateTime({width:"full"});break}return i.replace("{{date}}",ie(r,a)).replace("{{time}}",de(n,a))},kt={p:de,P:Ct};const Dt=kt;var Ot=["D","DD"],xt=["YY","YYYY"];function Mt(e){return Ot.indexOf(e)!==-1}function Pt(e){return xt.indexOf(e)!==-1}function oe(e,a,t){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(a,"`) for formatting years to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(a,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(a,"`) for formatting days of the month to the input `").concat(t,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var St={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Wt=function(e,a,t){var r,n=St[e];return typeof n=="string"?r=n:a===1?r=n.one:r=n.other.replace("{{count}}",a.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};const Ut=Wt;function J(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,r=e.formats[t]||e.formats[e.defaultWidth];return r}}var Et={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Yt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},$t={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ft={date:J({formats:Et,defaultWidth:"full"}),time:J({formats:Yt,defaultWidth:"full"}),dateTime:J({formats:$t,defaultWidth:"full"})};const Nt=Ft;var Lt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qt=function(e,a,t,r){return Lt[e]};const Rt=qt;function Y(e){return function(a,t){var r=t!=null&&t.context?String(t.context):"standalone",n;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=t!=null&&t.width?String(t.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var l=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;n=e.values[s]||e.values[l]}var u=e.argumentCallback?e.argumentCallback(a):a;return n[u]}}var It={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ht={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Vt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},jt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Gt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Qt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},At=function(e,a){var t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Bt={ordinalNumber:At,era:Y({values:It,defaultWidth:"wide"}),quarter:Y({values:Ht,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Y({values:Vt,defaultWidth:"wide"}),day:Y({values:jt,defaultWidth:"wide"}),dayPeriod:Y({values:Gt,defaultWidth:"wide",formattingValues:Qt,defaultFormattingWidth:"wide"})};const Xt=Bt;function $(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=a.match(n);if(!i)return null;var o=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(l)?zt(l,function(c){return c.test(o)}):Jt(l,function(c){return c.test(o)}),u;u=e.valueCallback?e.valueCallback(s):s,u=t.valueCallback?t.valueCallback(u):u;var f=a.slice(o.length);return{value:u,rest:f}}}function Jt(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function zt(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function Kt(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.match(e.matchPattern);if(!r)return null;var n=r[0],i=a.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;var l=a.slice(n.length);return{value:o,rest:l}}}var Zt=/^(\d+)(th|st|nd|rd)?/i,ea=/\d+/i,ta={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},aa={any:[/^b/i,/^(a|c)/i]},ra={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},na={any:[/1/i,/2/i,/3/i,/4/i]},ia={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},oa={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},sa={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ua={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},la={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},da={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ca={ordinalNumber:Kt({matchPattern:Zt,parsePattern:ea,valueCallback:function(e){return parseInt(e,10)}}),era:$({matchPatterns:ta,defaultMatchWidth:"wide",parsePatterns:aa,defaultParseWidth:"any"}),quarter:$({matchPatterns:ra,defaultMatchWidth:"wide",parsePatterns:na,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:$({matchPatterns:ia,defaultMatchWidth:"wide",parsePatterns:oa,defaultParseWidth:"any"}),day:$({matchPatterns:sa,defaultMatchWidth:"wide",parsePatterns:ua,defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:la,defaultMatchWidth:"any",parsePatterns:da,defaultParseWidth:"any"})};const fa=ca;var ma={code:"en-US",formatDistance:Ut,formatLong:Nt,formatRelative:Rt,localize:Xt,match:fa,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ha=ma;var va=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ga=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,wa=/^'([^]*?)'?$/,ya=/''/g,pa=/[a-zA-Z]/;function _a(e,a,t){var r,n,i,o,l,s,u,f,c,y,g,b,S,O,W,j,G,Q;w(2,arguments);var ce=String(a),U=V(),E=(r=(n=t==null?void 0:t.locale)!==null&&n!==void 0?n:U.locale)!==null&&r!==void 0?r:ha,A=M((i=(o=(l=(s=t==null?void 0:t.firstWeekContainsDate)!==null&&s!==void 0?s:t==null||(u=t.locale)===null||u===void 0||(f=u.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&l!==void 0?l:U.firstWeekContainsDate)!==null&&o!==void 0?o:(c=U.locale)===null||c===void 0||(y=c.options)===null||y===void 0?void 0:y.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(A>=1&&A<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var B=M((g=(b=(S=(O=t==null?void 0:t.weekStartsOn)!==null&&O!==void 0?O:t==null||(W=t.locale)===null||W===void 0||(j=W.options)===null||j===void 0?void 0:j.weekStartsOn)!==null&&S!==void 0?S:U.weekStartsOn)!==null&&b!==void 0?b:(G=U.locale)===null||G===void 0||(Q=G.options)===null||Q===void 0?void 0:Q.weekStartsOn)!==null&&g!==void 0?g:0);if(!(B>=0&&B<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var q=T(e);if(!dt(q))throw new RangeError("Invalid time value");var fe=ut(q),me=ct(q,fe),he={firstWeekContainsDate:A,weekStartsOn:B,locale:E,_originalDate:q},ve=ce.match(ga).map(function(p){var C=p[0];if(C==="p"||C==="P"){var R=Dt[C];return R(p,E.formatLong)}return p}).join("").match(va).map(function(p){if(p==="''")return"'";var C=p[0];if(C==="'")return ba(p);var R=Tt[C];if(R)return!(t!=null&&t.useAdditionalWeekYearTokens)&&Pt(p)&&oe(p,a,String(e)),!(t!=null&&t.useAdditionalDayOfYearTokens)&&Mt(p)&&oe(p,a,String(e)),R(me,p,E.localize,he);if(C.match(pa))throw new RangeError("Format string contains an unescaped latin alphabet character `"+C+"`");return p}).join("");return ve}function ba(e){var a=e.match(wa);return a?a[1].replace(ya,"'"):e}const Ta={api:"https://encarar.herokuapp.com/api/"};async function Ca({date:e="",league:a=""}){try{let t=`${Ta.api}fixture/day/${e}`;return a&&(t+=`?league=${a}`),await(await fetch(t)).json()}catch(t){console.error("Error get fixtures",t)}}const ka={class:"main-app-container"},Da={key:1},Oa={__name:"Homeview",setup(e){K();const a=Z();let t=F(null),r=F(null),n=F(!0),i=F(!0);const o=()=>{n.value=!n.value};z(a,async(u,f)=>{o(),await s({date:i.value,league:u.params.idLeague}),o()}),be(async()=>{const f=await(await fetch("https://encarar.herokuapp.com/api/league/get/all")).json();t.value=f,i.value=_a(new Date,"yyyy-MM-dd");let c=a.params.idLeague||!1;await s({date:i.value,league:c}),setTimeout(()=>{o()},1e3)});const l=async({date:u})=>{let f=a.params.idLeague||!1;await s({date:u,league:f})},s=async({date:u="",league:f=""})=>{try{const c=await Ca({date:u,league:f});i.value=u,r.value=c.fixtures}catch(c){console.error("Error get fixtures",c)}};return z(t,(u,f)=>{}),(u,f)=>(h(),v("div",ka,[X(Oe,{leagues:_(t)},null,8,["leagues"]),_(n)?N("",!0):(h(),ae(tt,{key:0,fixtures:_(r),dateFixtures:_(i),onChangeDate:l},null,8,["fixtures","dateFixtures"])),_(n)?(h(),v("div",Da,[X(it)])):N("",!0),X(We)]))}},Ma=L(Oa,[["__scopeId","data-v-816544ce"]]);export{Ma as default};
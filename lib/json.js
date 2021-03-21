/** @license
 * RequireJS plugin for loading JSON files
 * - depends on Text plugin and it was HEAVILY "inspired" by it as well.
 * Author: Miller Medeiros
 * Version: 0.4.0 (2014/04/10)
 * Released under the MIT license
 */

define(["text"],function(text){function cacheBust(n){return n=n.replace(CACHE_BUST_FLAG,""),(n+=n.indexOf("?")<0?"?":"&")+CACHE_BUST_QUERY_PARAM+"="+Math.round(2147483647*Math.random())}var CACHE_BUST_QUERY_PARAM="bust",CACHE_BUST_FLAG="!bust",jsonParse="undefined"!=typeof JSON&&"function"==typeof JSON.parse?JSON.parse:function(val){return eval("("+val+")")},buildMap={};return{load:function(n,e,t,i){i.isBuild&&(!1===i.inlineJSON||-1!==n.indexOf(CACHE_BUST_QUERY_PARAM+"="))||0===e.toUrl(n).indexOf("empty:")?t(null):text.get(e.toUrl(n),function(e){var r;if(i.isBuild)buildMap[n]=e,t(e);else{try{r=jsonParse(e)}catch(n){t.error(n)}t(r)}},t.error,{accept:"application/json"})},normalize:function(n,e){return-1!==n.indexOf(CACHE_BUST_FLAG)&&(n=cacheBust(n)),e(n)},write:function(n,e,t){if(e in buildMap){t('define("'+n+"!"+e+'", function(){ return '+buildMap[e]+";});\n")}}}});
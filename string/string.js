/*!
 * @class:String
 * @constructor
 */

/*
 * @method big
 * @for String
 * @param {string}
 * @return {string}
 * @example "Hello world!".big();
 */
var strings = 'hello world!';
// document.write(strings.big());//<big>hello world!/big>

/*!
 * 方法可返回指定位置的字符
 * @method charAt 
 * @for String
 * @param {index} 字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。
 * @return {string}
 */
 console.log('-------------------charAt-------------------------');
 var chartAt_str = 'chart at str';
 var chartAt_str_res = chartAt_str.charAt(2);
 console.log(chartAt_str_res);//a

/*!
 * 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数
 * @method charCodeAt 
 * @for String
 * @param {index} 字符串中第一个字符的下标是 0。如果参数 index 不在 0 与 string.length 之间，该方法将返回一个空字符串。
 * @return {string}
 */
console.log('-------------------charCodeAt-------------------------');
var charCodeAt_str = 'ch人rt at str';
var charCodeAt_str_res = charCodeAt_str.charCodeAt(2);
console.log(charCodeAt_str_res);//20154

/*!
* 用于连接两个或多个字符串。
* @method concat 
* @for String
* @param {string1，string2,string3,...} 
* @return {string1+string2+string3+...}
*/
console.log('-------------------concat-------------------------');
var concat_str = '我是第一个字符串';
var concat_str_res = concat_str.concat("woshidierge","我是第三个","23423423");
console.log(concat_str_res);

/*!
* fixed() 方法用于把字符串显示为打字机字体。
* @method fixed 
* @for String
* @param {string} 
* @return {}
* 亲测无明显效果
*/
console.log('-------------------fixed-------------------------');
var fixed_str = '我是第一个字符串';
var fixed_str_res = fixed_str.fixed();
// document.write(fixed_str);


/*!
* indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
* @method indexOf 
* @for String
* @param {string} 
* @return {-1||index}
* 亲测无明显效果
*/
console.log('-------------------indexOf-------------------------');
var indexOf_str = '我是第一个字符串';
console.log(indexOf_str.indexOf("我"));//0
console.log(indexOf_str.indexOf("wo"));//0
console.log(indexOf_str.indexOf("第"));//0

/*!
* lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
* @method indexOf 
* @for String
* @param (searchvalue,fromindex)
* @return {-1||index}
* 
*/
console.log('-------------------lastIndexOf-------------------------');
var lastIndexOf_str = 'asdafaghjkl';
console.log(lastIndexOf_str.lastIndexOf("l"));//0
console.log(lastIndexOf_str.lastIndexOf("a",3));//0
console.log(lastIndexOf_str.lastIndexOf("d"));//0


/*!
* match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
* @method match 
* @for String
* @param ()
* @return {}
* stringObject.match(searchvalue)
* stringObject.match(regexp)
*/
console.log('-------------------match-------------------------');
var match_str = 'asdafaghjkl';
console.log(match_str.match("l"));//
console.log(match_str.match("a"));//
console.log(match_str.match("d"));//

/*!
* replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
* @method replace 
* @for String
* @param ()
* @return {}
* stringObject.replace(regexp/substr,replacement)
*/
console.log('-------------------replace-------------------------');
var replace_str = 'asdafaghjkl';

replace_str.replace(/([^sd{1}])(a)/g,function($1,$2){
console.log("$1",$1);
console.log($2);
});//

/*!
* search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
* @method search 
* @for String
*/
console.log('-------------------search-------------------------');
var search_str = 'dsdfsd.png';
console.log(search_str.replace(/^.+\.&/g,''));

/*!
* valueOf() 方法可返回 String 对象的原始值。
* @method valueOf 
* @for String
*/
console.log('-------------------valueOf-------------------------');
var valueOf_str = 2;
console.log(valueOf_str.valueOf());

/*!
* slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分
* @method slice 
* @for String
*/
console.log('-------------------slice-------------------------');
var slice_str = 'sdf dsfasd sd fsf df ';
console.log(slice_str.slice(-2));

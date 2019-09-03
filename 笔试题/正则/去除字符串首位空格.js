/**
 * 第一种方法 使用trim()
 * 不影响原字符串本身，返回新字符串。
 */
var str1 = "    Hello One ";
str1.trim();

/**
 * 使用正则表达式
 */
var str2 = "    Hello Two ";
str2 = str2.replace(/^\s+|\s+$/g,"");

// 顺便学习以下如何去除所有空格，单单去除左空格/右空格
// 去除所有空格
var str3 = "    Hello Three ";
str3 = str3.replace(/\s+/g,"");
// 去除左空格
var str4 = "    Hello Four ";
str4 = str4.replace(/^\s+/,"");
// 去除右空格
var str5 = "    Hello Five ";
str5 = str5.replace(/\s+$/,"");

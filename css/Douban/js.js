// 加载http模块
var http = require('http');
// Cheerio 是一个Node.js的库， 它可以从html的片断中构建DOM结构，然后提供像jquery一样的css选择器查询
var cheerio = require('cheerio');

var url = 'https://m.douban.com/';

http.get(url, function(res) {
    var html = '';
    // 获取页面数据
    res.on('data', function(data) {
        html += data;
    });
    // 数据获取结束
    res.on('end', function() {
        // 通过过滤页面信息获取实际需求的轮播图信息
        var slideListData = filterSlideList(html);
        // 打印信息
        // printInfo(slideListData);
    });
}).on('error', function() {
    console.log('获取数据出错！');
});

/* 过滤页面信息 */
function filterSlideList(html) {
    if (html) {
        // 沿用JQuery风格，定义$
        console.log(html);
        var $ = cheerio.load(html);
        // 根据id获取轮播图列表信息
        var slideList = $('.quick-nav');
        //console.log(slideList);
        // 轮播图数据
        var slideListData = [];

        /* 轮播图列表信息遍历 */
        slideList.find('li').each(function(item) {

            var sNav = $(this);
            // 找到a标签并获取href属性
            var sNav_href = pic.find('a').attr('href');
            // 找到a标签的子标签img并获取alt
            var sNav_message = pic.find('a').content;
            // 向数组插入数据
            console.log(sNav,sNav_href,sNav_message);
            slideListData.push({
                sNav : sNav,
                sNav_href : sNav_href,
                sNav_message : sNav_message
            });
        });
        // 返回轮播图列表信息
        return slideListData;
    } else {
        console.log('无数据传入！');
    }
}
 
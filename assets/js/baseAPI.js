//每次调用的时候先调用这个函数，这个函数可以拿到给AJAX提供的配置对象
$.ajaxPrefilter(function(options){
    // 在发起ajax之前，统一拼接请求的根路径
    options.url='http://api-breakingnews-web.itheima.net'+options.url
    console.log(options.url);
})
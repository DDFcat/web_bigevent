//每次调用的时候先调用这个函数，这个函数可以拿到给AJAX提供的配置对象
$.ajaxPrefilter(function(options){
    // 在发起ajax之前，统一拼接请求的根路径
    options.url='http://api-breakingnews-web.itheima.net'+options.url
    console.log(options.url);


    //统一为有权限的接口，设置headers请求头
    if(options.url.indexOf('/my') !== -1){
        options.headers={
            Authorization:localStorage.getItem('token')|| ''
        }
    }


    //全局统一挂载complete回调函数
    //res.responseJSON拿到服务器响应回来的数据

options.complete=function(res){
    if(res.responseJSON.status === 1&& res.responseJSON.message === '身份认证失败！'){
    localStorage.removeItem('token')
     location.href='/login.html'
    }        
}

})
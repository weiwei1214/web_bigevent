// 注意：每次调用$.get()或者$.post()或$.ajax的时候会先调用者这个函数
$.ajaxPrefilter(function(options) {
    // console.log(options.url)
    // 在发起真正的ajax请求之前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
        // console.log(options.url)

})
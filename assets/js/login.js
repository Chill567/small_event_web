$(function() {
    // 登录和注册小窗交替显示隐藏
    $('#link_reg').on('click', function() {
        $('.login-box').hide()
        $('.reg-box').show()
    })
    $('#link_login').on('click', function() {
        $('.login-box').show()
        $('.reg-box').hide()
    })

    // 监听注册表单提交事件
    $(".reg-box").on("submit", function(e) {
            e.preventDefault()
            $.post('/api/reguser', $(".reg-box").serialize(), function(res) {
                if (res.status !== 0) {
                    return alert(res.message)
                }
                alert(res.message)
                var iii = $(".reg-box [name=username]").val()
                $(".login-box [name=username]").val(iii)
                    // console.log(iii);
                $("#link_login").click()

            })
        })
        // 监听登录表单提交事件
    $(".login-box").on("submit", function(e) {
        e.preventDefault()
        $.post('/api/login', $(this).serialize(), function(res) {
            if (res.status !== 0) {
                return alert(res.message)
            }
            console.log(res.message);
            localStorage.setItem('token-DSJ', res.token)
        })
    })
})
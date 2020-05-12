//авторизация через соц.сети
$(document).ready(function () {
    var newWindowAuth;
    var authAfterCompleteForm = false;
    localStorage.removeItem('auOk');

    $('#submit_form_btn').click(function() {
        if (!window.is_auth) {
            //фиксируем что пользователь авторизуется после заполнения формы
            authAfterCompleteForm = true;
        };
    });

    $('.social-auth__link').click(function (e) {
        e.preventDefault();
        if (authAfterCompleteForm) {
            localStorage.setItem('checkingSocialAuth', 'true');
        };
        var socialHref = $(this).attr('href');
        var winWidth = ($(window).width() < 800) ? $(window).width() : 800;
        var winHeight = ($(window).height() < 600) ? $(window).height() : 600;

        newWindowAuth = window.open(socialHref, 'ok', 'width=' + winWidth + ', height=' + winHeight);

        var checkAuth = setInterval(function() {
            //проверяем авторизацию в новом окне
            var auOk = localStorage.getItem('auOk');
            if (auOk === 'socialAuthOk') {
                successAuth(checkAuth);
                submitOrderForm();
            } else if (auOk === 'commonAuthOk') {
                successAuth(checkAuth);
                window.location.href = '/';
            };
        }, 500);
    });

//после успешной авторизации
    function successAuth(checkAuth) {
        // window.focus();
        localStorage.removeItem('auOk');
        newWindowAuth.close();
        clearInterval(checkAuth);
    };

//отправка заполенной формы заказа после авторизации ч/з соцсеть
    function submitOrderForm () {
        window.is_auth = true;
        $('#order_form').submit();
    };
});

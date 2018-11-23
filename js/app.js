var PORTFOLIO = function () {
    var menu = document.querySelector('#menu'),
        main = document.querySelector('main'),
        drawer = document.querySelector('.nav');

    menu.addEventListener('click', function (e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
    });
    main.addEventListener('click', function () {
        drawer.classList.remove('open');
    });

}();
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn =  document.querySelector('.header__menu-btn');
    const menuClose =  document.querySelector('.header__close-btn');
    const menuNavigation =  document.querySelector('.header__navigation');
    const sublists =  document.querySelectorAll('.navigation__sublist');

    menuBtn.addEventListener('click', function() {
        menuNavigation.classList.add('open');
    })

    menuClose.addEventListener('click', function() {
        closeMenu();
    })

    sublists.forEach(list => {
        list.addEventListener('click', function(e) {
            
            if (e.target.closest('li').classList.contains('open')) list.classList.remove('open');
            
            else {
                sublists.forEach(item => {
                    item.classList.remove('open');
                })
                list.classList.add('open');
            }     
        })
        
    })

    document.body.addEventListener('click', function(e) {
        if (!e.target.closest('.header')) {
            closeMenu();
        }
    })

    function closeMenu() {
        menuNavigation.classList.remove('open');
        sublists.forEach(item => {
            item.classList.remove('open');
        })
    }
})

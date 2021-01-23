document.addEventListener('DOMContentLoaded', () => {
    const menuBtn =  document.querySelector('.header__menu-btn');
    const menuClose =  document.querySelector('.header__close-btn');
    const menuNavigation =  document.querySelector('.header__navigation');
    const sublists =  document.querySelectorAll('.navigation__sublist');
    const promocodesBtn = document.querySelectorAll('[data-promo]');

    function initMenu() {
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
    }

    function closeMenu() {
        menuNavigation.classList.remove('open');
        sublists.forEach(item => {
            item.classList.remove('open');
        })
    }

    function initPromocodeOpen() {
        if (promocodesBtn) {
            promocodesBtn.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    item.classList.add('open');
                })
            })
        }
    }

    function toggleAnswers() {
        const commentButtons = document.querySelectorAll('[data-answers]');
        if (commentButtons) {
            commentButtons.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    btn.closest('.reviews__item').classList.toggle('close');
                    if (btn.closest('.reviews__item').classList.contains('close')) {
                        btn.textContent = 'Показать ответы';
                    } else {
                        btn.textContent = 'Скрыть ответы';
                    }
                })
            })
        }
    }

    function initModals() {
        MicroModal.init({
            onShow: modal => console.info(`${modal.id} is shown`), // [1]
            onClose: modal => console.info(`${modal.id} is hidden`), // [2]
            // openTrigger: 'data-custom-open', // [3]
            // closeTrigger: 'data-custom-close', // [4]
            openClass: 'is-open', // [5]
            disableScroll: true, // [6]
            disableFocus: false, // [7]
            awaitOpenAnimation: true, // [8]
            awaitCloseAnimation: true, // [9]
            debugMode: true // [10]
          });
        
    }


    initMenu();
    initPromocodeOpen();
    toggleAnswers();
    initModals();

})

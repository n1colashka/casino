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
            onShow: modal => document.querySelector('html').classList.add('overflow-hidden'), // [1]
            onClose: modal => document.querySelector('html').classList.remove('overflow-hidden'), // [2]
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

    function initCasinoMore() {
        const casinoBtn = document.querySelector('.casino__btn--mob');

        if (casinoBtn) {
            casinoBtn.addEventListener('click', function(e) {
                e.preventDefault();
                casinoBtn.closest('.casino__left').classList.add('open');
                casinoBtn.style.display = 'none';
            })
        }
    }

    function initInfoMore() {
        const infoBtn = document.querySelector('.info__btn');
        const infoContent = document.querySelector('.info__content');

        if (infoBtn) {
            infoBtn.addEventListener('click', function(e) {
                e.preventDefault();
                infoContent.classList.add('open');
                infoBtn.style.display = 'none';
            })
        }
    }
    
    function initRatings() {
        const ratings = document.querySelectorAll('.rating');

        if (ratings.length > 0) {
            let ratingActive, ratingValue, fault = 0;

            for (let index = 0; index < ratings.length; index++) {
                const rating = ratings[index];
                initRating(rating);
            }

            function initRating(rating) {
                initRatingVars(rating);
                setRatingActiveWidth();
            }
    
            function initRatingVars(rating) {
                ratingActive = rating.querySelector('.rating__active');
                ratingValue = rating.querySelector('.rating__value');
                if (rating.classList.contains('listing__rating')) fault = 2;
            }
    
            function setRatingActiveWidth(index = ratingValue.innerHTML) {
                let str = new String(index);
                index = str.replace(",",".");
                const ratingActiveWidth = index / 0.05;
                ratingActive.style.width = `calc(${ratingActiveWidth}% - ${fault}px)`;
            }
        }

    }

    function initCircleRating() {
        const circleRatings = document.querySelectorAll('.circle-rating');

        if (circleRatings.length > 0) {
            circleRatings.forEach(rating => {
                const circle = rating.querySelector('.circle-rating__circle');
        
                const value = rating.querySelector('.circle-rating__value');
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                
                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = circumference;
                setProgress(value);
    
                function setProgress(value) {
                    value = value.textContent.slice(0, -1) ;
                    let percent = value;
                    const offset = circumference - percent / 100 * circumference;
                    circle.style.strokeDashoffset = offset;
                }
            })
        }

        const viewsCircleRatings = document.querySelectorAll('.views__rating-circle');

        if (viewsCircleRatings.length > 0) {
            viewsCircleRatings.forEach(rating => {
                const circle = rating.querySelector('.circle-rating__circle');
                const value = rating.querySelector('.views__rating-value');
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                
                circle.style.strokeDasharray = `${circumference} ${circumference}`;
                circle.style.strokeDashoffset = circumference;
                setProgress(value);
    
                function setProgress(value) {
                    value = value.textContent.slice(0, -1);
                    let percent = value;
                    const offset = circumference - percent / 100 * circumference;
                    circle.style.strokeDashoffset = offset;
                }
            })
        }
    }
    

    initMenu();
    initPromocodeOpen();
    toggleAnswers();
    initModals();
    initCasinoMore();
    initInfoMore();
    initRatings();
    initCircleRating();
})

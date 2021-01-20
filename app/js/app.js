// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import jQuery module (npm i -D jquery)
// require('~/app/js/rangeslider.js') // import vendor jQuery plugin example (not module)

document.addEventListener('DOMContentLoaded', () => {

	

	function initReviewsSlider() {

		if (document.querySelector('.reviews__slider')) {
			const reviewsSlider = new Swiper('.reviews__slider', {
				slidesPerView: 3,
				spaceBetween: 40,
				loop: true,
				// Navigation arrows
				navigation: {
					nextEl: '.reviews__button-next',
					prevEl: '.reviews__button-prev',
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					600: {
						slidesPerView: 2,
					},
					1024: {
						spaceBetween: 20,
					},
					1201: {
						slidesPerView: 3,
						spaceBetween: 40,
					}
				}
			})
		}
		
	}

	function initAccordion() {
		if (document.querySelector('.questions')) {
			document.querySelector('.questions__list').addEventListener('click', (e) => {
				if (e.target.closest('.questions__item-head')) {
					document.querySelectorAll('.questions__item').forEach(item => {
						item.classList.remove('open');
					})
					e.target.closest('.questions__item').classList.toggle('open');
				}
			})
		}
		
	}

	function initMenu() {
		const menu = document.querySelector('.menu');
		const menuBtn = document.querySelector('.header__btn');
		const html = document.querySelector('html');

		menuBtn.addEventListener('click', () => {
			menu.classList.toggle('open');
			html.classList.toggle('overflow-hidden');
		})
	}

	function initRangeSliders() {
		// Initialize a new plugin instance for one element or NodeList of elements.
		const sliders = document.querySelectorAll('.form__range');
		sliders.forEach(slider => {
			rangeSlider.create(slider, {
				polyfill: true,     // Boolean, if true, custom markup will be created
				root: document,
				rangeClass: 'rangeSlider',
				disabledClass: 'rangeSlider--disabled',
				fillClass: 'rangeSlider__fill',
				bufferClass: 'rangeSlider__buffer',
				handleClass: 'rangeSlider__handle',
				startEvent: ['mousedown', 'touchstart', 'pointerdown'],
				moveEvent: ['mousemove', 'touchmove', 'pointermove'],
				endEvent: ['mouseup', 'touchend', 'pointerup'],
				vertical: false,    // Boolean, if true slider will be displayed in vertical orientation
				min: null,          // Number, 0
				max: null,          // Number, 100
				step: null,         // Number, 1
				value: null,        // Number, center of slider
				buffer: null,       // Number, in percent, 0 by default
				stick: null,        // [Number stickTo, Number stickRadius] : use it if handle should stick to ${stickTo}-th value in ${stickRadius}
				borderRadius: 10,   // Number, if you're using buffer + border-radius in css
				onInit: function () {
					setTimeout(function(){
						if (slider.closest('.form__item--english')) {
							const values = slider.dataset.values.split(', ');
							slider.closest('.form__item').querySelector('.form__range-value').textContent = values[slider.value - 1];
							slider.closest('.form__item').querySelector('.form__range-value').style.transform = slider.closest('.form__item').querySelector('.rangeSlider__handle').style.transform;
						}
						else if (slider.closest('.form__item').querySelector('.form__range-value')) {
							slider.closest('.form__item').querySelector('.form__range-value').style.transform = slider.closest('.form__item').querySelector('.rangeSlider__handle').style.transform;
							slider.closest('.form__item').querySelector('.form__range-value').textContent = slider.value;
						}
					}, 100)
					
				},
				onSlideStart: function (position, value) {
					
				},
				onSlide: function (position, value) {
					if (slider.closest('.form__item--english')) {
						const values = slider.dataset.values.split(', ');
						slider.closest('.form__item').querySelector('.form__range-value').style.transform = slider.closest('.form__item').querySelector('.rangeSlider__handle').style.transform;
						slider.closest('.form__item').querySelector('.form__range-value').textContent = values[slider.value - 1];
					}
					else if (slider.closest('.form__item').querySelector('.form__range-value')) {
						slider.closest('.form__item').querySelector('.form__range-value').style.transform = slider.closest('.form__item').querySelector('.rangeSlider__handle').style.transform;
						slider.closest('.form__item').querySelector('.form__range-value').textContent = slider.value;
					}
				},
				onSlideEnd: function (position, value) {
				}
			});
		})
	
	}

	
	initReviewsSlider();
	initAccordion();
	initMenu();
	initRangeSliders();
	
})

const modalModule = () => {

    const openButtons = document.querySelectorAll('.callbackModal-btn');
    const modal = document.querySelector('.callbackModalWrap');
    const closeButton = document.querySelector('.callBackModal__closeModalButton');


    openButtons.forEach(openButton => {
        openButton.addEventListener('click', () => {
            modal.classList.add('visible')
        });
    })

    closeButton.addEventListener('click', () => {
        modal.classList.remove('visible')
    });

}

const burgerMenuModule = () => {

    const openButton = document.querySelector('.burgerMenuButton')
    const menu = document.querySelector('.burgerMenu')

    openButton.addEventListener('click', (e) => {
        menu.classList.add('visible')
    });

    menu.addEventListener('click', (e) => {

        const selectionList = menu.querySelector('.locationSelect__list')
        const selectionTrigger = menu.querySelector('.locationSelect__trigger')
        const target = e.target

        console.log(target);

        if (target.closest('.burgerMenu__closeButton')) {
            menu.classList.remove('visible')
            if (selectionList.classList.contains('visible')) {
                selectionList.classList.remove('visible')
            }
            if (selectionTrigger.classList.contains('active')) {
                selectionTrigger.classList.remove('active')
            }
        }

        if (target.classList.contains('burgerMenu__link')) {

            const targetParent = target.parentNode.parentNode
            const list = targetParent.querySelector('.burgerMenu__list');

            if (!target.parentNode.classList.contains('active')) {

                if (list !== null) {
                    list.classList.add('visible')
                    target.parentNode.classList.add('active')
                    list.style.maxHeight = `${list.scrollHeight}px`;
                }

            } else {
                if (list !== null) {
                    list.classList.remove('visible')
                    target.parentNode.classList.remove('active')
                    list.style.maxHeight = `${0}px`;
                }
            }
        }
    });


}

const showElemModule = () => {
    const triggers = document.querySelectorAll('.-js-showElemButton');
    const items = document.querySelectorAll('.footer__item');


    triggers.forEach((el, index) => {
        el.addEventListener('click', () => {

            const currentBtnIndex = index;

            items.forEach((el, index) => {

                const currItemContent = el.querySelector('.-js-showElem');
                const currItemIndex = index;

                if (currItemContent) {
                    if (currentBtnIndex === currItemIndex) {
                        el.classList.toggle('isActive');
                        currItemContent.style.maxHeight = `${currItemContent.scrollHeight}px`;
                    };

                    if (!el.classList.contains('isActive')) {
                        currItemContent.style.maxHeight = `${0}px`;
                    };
                }
            });
        })
    })
}

const counterModule = () => {
    const counterItems = document.querySelectorAll('.productCounter')

    counterItems.forEach(element => {
        const value = element.querySelector('.productCounter__value')
        value.textContent = 1
    });

    counterItems.forEach(element => {
        let count = 1
        element.addEventListener('click', (e) => {
            const target = e.target;
            const value = element.querySelector('.productCounter__value')


            if (target.closest('.productCounter__incButton')) {
                count += 1;
                value.textContent = count;
            }

            if (target.closest('.productCounter__decButton')) {
                count -= 1;

                if (count >= 0) {
                    value.textContent = count;
                } else {
                    count = 0
                }
            }

        });
    });
}

const tabsModule = (obj) => {

    const buttons = document.querySelectorAll(obj.button);
    const content = document.querySelectorAll(obj.item);

    buttons.forEach(el => {

        el.addEventListener('click', (e) => {

            const buttonDataAttribute = el.getAttribute('data-button')

            buttons.forEach(el => {
                el.classList.remove('isActive');
            });

            el.classList.add('isActive');

            content.forEach(el => {

                const contentDataAttribute = el.getAttribute('data-content')

                el.classList.remove('isActive');

                if (buttonDataAttribute == contentDataAttribute) {
                    el.classList.add('isActive');
                };
            });

        });
    });


};

const showCatalogeFilters = () => {

    const filters = document.querySelectorAll('.catalogeFilter')

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {

            const trigger = filter.querySelector('.catalogeFilter__selectTrigger')
            const list = filter.querySelector('.catalogeFilter__selectList')
            const lists = document.querySelectorAll('.catalogeFilter__selectList')
            const listItems = filter.querySelectorAll('.catalogeFilter__selectItem')
            const target = e.target



            if (target.classList.contains('catalogeFilter__selectTrigger')) {
                lists.forEach(el => {
                    el.classList.remove('visible')
                })
            
                list.classList.add('visible')
            }

            if (target.classList.contains('catalogeFilter__selectItem')) {
                const textContent = target.textContent
                listItems.forEach(el => {
                    el.classList.remove('isActive')
                })
                target.classList.add('isActive')
                trigger.textContent = textContent
                list.classList.remove('visible')
            }

        })
    })

    document.addEventListener('click', (e) => {
        const lists = document.querySelectorAll('.catalogeFilter__selectList')
        const target = e.target;

        if (!target.closest('.catalogeFilter')) {
            lists.forEach(el => {
                if (el.classList.contains('visible')) {
                    el.classList.remove('visible')
                }
            });
        }
    })

    window.addEventListener('scroll', () => {

        const scrollFromTop = Math.ceil(window.scrollY);

        if (filters[0]) {
            if (scrollFromTop > filters[0].offsetTop + 220) {

                filters.forEach(el => {
                    (el.querySelector('.catalogeFilter__selectList')).classList.remove('visible')
                });

            }
        }


    });
}

const selectLocationModule = () => {
    const selectBlocks = document.querySelectorAll('.locationSelect-wrap')

    selectBlocks.forEach(selectBlock => {
        selectBlock.addEventListener('click', (e) => {

            const triggerText = selectBlock.querySelector('.locationSelect__trigger-text')
            const trigger = selectBlock.querySelector('.locationSelect__trigger')
            const list = selectBlock.querySelector('.locationSelect__list')
            const items = selectBlock.querySelectorAll('.locationSelect__listItem')
            const target = e.target

            if (target.closest('.locationSelect__trigger')) {
                trigger.classList.toggle('active')
                list.classList.toggle('visible')
            }

            if (target.classList.contains('locationSelect__listItem')) {
                const textContent = target.textContent
                triggerText.textContent = textContent

                items.forEach(el => {
                    el.classList.remove('isActive')
                })

                target.classList.add('isActive')

                trigger.classList.remove('active')
                list.classList.remove('visible')
            }
        })
    })
}

const selectModule = () => {

    const selectBlocks = document.querySelectorAll('.selectionForm__selectWrap')

    selectBlocks.forEach((selectBlock, index) => {
        selectBlock.addEventListener('click', (e) => {

            const parent = findAncestor(selectBlock, 'selectionItem')
            const triggers = parent.querySelectorAll('.selectionForm__selectTrigger')
            const lists = parent.querySelectorAll('.selectionForm__selectList')

            const triggerText = selectBlock.querySelector('.selectionForm__selectTrigger-text')
            const trigger = selectBlock.querySelector('.selectionForm__selectTrigger')

            const list = selectBlock.querySelector('.selectionForm__selectList')
            const items = selectBlock.querySelectorAll('.selectionForm__selectItem')

            const target = e.target

            function findAncestor(el, cls) {
                while ((el = el.parentElement) && !el.classList.contains(cls));
                return el;
            }

            if (target.closest('.selectionForm__selectTrigger')) {

                if (!selectBlock.classList.contains('active')) {
                    triggers.forEach(el => {
                        el.classList.remove('active')
                    })
    
                    lists.forEach(el => {
                        el.classList.remove('visible')
                    })

                    selectBlocks.forEach(el => {
                        el.classList.remove('active')
                    })
                }

                trigger.classList.toggle('active')
                list.classList.toggle('visible')

                selectBlock.classList.toggle('active')
            }

            if (target.classList.contains('selectionForm__selectItem')) {
                const textContent = target.textContent
                triggerText.textContent = textContent

                items.forEach(el => {
                    el.classList.remove('isActive')
                })

                target.classList.add('isActive')

                trigger.classList.remove('active')
                list.classList.remove('visible')
            }
        })
    })

    document.addEventListener('click', (e) => {
        const lists = document.querySelectorAll('.selectionForm__selectList')
        const triggers = document.querySelectorAll('.selectionForm__selectTrigger')
        const target = e.target;

        if (!target.closest('.selectionForm__select')) {
            lists.forEach(el => {
                if (el.classList.contains('visible')) {
                    el.classList.remove('visible')
                }
            });

            triggers.forEach(el => {
                if (el.classList.contains('active')) {
                    el.classList.remove('active')
                }
            });
        }
    })
}

const selectionTabs = () => {

    const selectionitems = document.querySelectorAll('.selectionItem')

    selectionitems.forEach(item => {
        item.addEventListener('click', (e) => {

            const buttons = item.querySelectorAll('.selectionItem__tabsButton')
            const content = item.querySelectorAll('.selectionItem__tabsContent')
            const target = e.target
            const clickedItem = item

            if (target.classList.contains('selectionItem__tabsButton')) {

                const buttonDataAttr = target.getAttribute('data-button')

                content.forEach(item => {

                    const contentDataAttr = item.getAttribute('data-content')

                    item.classList.remove('isActive')

                    if (buttonDataAttr === contentDataAttr) {
                        item.classList.add('isActive')
                    }

                    if (contentDataAttr === 'tab-2') {
                        clickedItem.classList.toggle('-car-bg')
                    }

                    buttons.forEach(el => {
                        el.classList.remove('isActive')
                    })

                    target.classList.add('isActive')
                })

            }
        })
    })

};

const productTabsModule = () => {
    const tabs = document.querySelectorAll('.product__tabsButton')
    const menuTrigger = document.querySelector('.product__tabsTrigger')
    const menuTriggerText = document.querySelector('.product__tabsTrigger-text')
    const buttonsMenu = document.querySelector('.product__tabsButtons')
    const contents = document.querySelectorAll('.product__tabsContent-item')

    menuTrigger.addEventListener('click', (e) => {
        buttonsMenu.classList.add('visible')
    })

    tabs.forEach(el => {
        el.addEventListener('click', () => {
            const buttonDataAttr = el.getAttribute('data-button')
            const textContent = el.textContent

            tabs.forEach(el => {
                el.classList.remove('isActive');
            });

            el.classList.add('isActive');

            contents.forEach(el => {
                const contentDataAttr = el.getAttribute('data-content')

                el.classList.remove('isActive');

                if (buttonDataAttr === contentDataAttr) {
                    el.classList.add('isActive');
                    buttonsMenu.classList.remove('visible')
                    menuTriggerText.textContent = textContent
                }
            })
        })
    })
}


try {
    new Swiper('.-js-productsSlider', {
        spaceBetween: 30,

        allowTouchMove: false,

        navigation: {
            nextEl: '.productsSlider__button.-next',
            prevEl: '.productsSlider__button.-prev',
        },

        breakpoints: {
            // when window width is >= 320px
            325: {
                slidesPerView: 2
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1024: {
                slidesPerView: 5,
            }
        }
    });
} catch (error) { }

try {
    new Swiper('.-js-offerSlider', {

        effect: 'fade',

        rewind: true,
        allowTouchMove: false,

        fadeEffect: {
            crossFade: true
        },

        navigation: {
            nextEl: '.offerSlider__navButton.-next',
            prevEl: '.offerSlider__navButton.-prev',
        },


        autoplay: {
            delay: 3000,
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
                pagination: false,
            },
            // when window width is >= 640px
            1024: {
                pagination: {
                    el: '.swiper-pagination',
                },
            }
        }
    });
} catch (error) { }

try {
    new Swiper('.-js-brandsSlider', {

        allowTouchMove: false,

        navigation: {
            nextEl: '.brandsSlider__button.-next',
            prevEl: '.brandsSlider__button.-prev',
        },

        breakpoints: {
            325: {
                slidesPerView: 2,
            },

            475: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            1024: {
                slidesPerView: 6,
            }
        }
    })
} catch (error) { }

try {
    new Swiper('.-js-benefitsSlider', {
        spaceBetween: 25,

        pagination: {
            el: '.benefitsSlider__pagination',
        },

        breakpoints: {

            320: {
                slidesPerView: 1
            },

            768: {
                slidesPerView: 2
            },

            1024: {
                enabled: false,
                slidesPerView: 4,
                spaceBetween: 40,
            }

        }
    })
} catch (error) { }


try {
    selectModule()
} catch (error) { }


if (window.innerWidth <= 1024) {
    showElemModule();
}

if (window.innerWidth >= 768) {
    tabsModule({
        button: '.product__tabsButton',
        item: '.product__tabsContent-item'
    })
} else if (window.innerWidth < 768) {
    try {
        productTabsModule()
    } catch (error) {

    }
}





showCatalogeFilters()

modalModule()
burgerMenuModule()
counterModule()
selectionTabs()

tabsModule({
    button: '.selectionItem__recommendsTabs-button',
    item: '.selectionItem__recommendsTabs-content'
})

selectLocationModule()
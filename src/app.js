import './app.scss'

import { MAX_ITEM_COUNT } from './config';

console.log(MAX_ITEM_COUNT);

;(()=>{
    const oScroller = document.querySelector('#J_scrollWrapper');
    const oList = oScroller.querySelector('list-wrapper');

    const init = () => {
        bindEvent();
    }

    function bindEvent () {
        oScroller.addEventListener('scroll', handleScroll, false);
    }

    function handleScroll () {

    }


    init()
})();
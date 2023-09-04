import './app.scss'

import { MAX_ITEM_COUNT } from './config';
import { setCurrentData, setDataSource, reactive } from './reactive';

console.log(MAX_ITEM_COUNT);

;(()=>{
    const oScroller = document.querySelector('#J_scrollWrapper');
    const oList = oScroller.querySelector('list-wrapper');
    const $state = reactive();

    const init = () => {
        initData(1, 20)
        bindEvent();
    }

    function initData (init, count) {
        setDataSource(init, count);
        setCurrentData();

        console.log($state.dataSoucre, $state.currentData);
    }

    function bindEvent () {
        oScroller.addEventListener('scroll', handleScroll, false);
    }

    function handleScroll () {

    }


    init()
})();
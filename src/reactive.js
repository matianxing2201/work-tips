import { ITEM_HEIGHT, MAX_ITEM_COUNT } from "./config";
import { update, updatePaddingSet } from "./render";
import { getData } from "./utils";

const $state = {};

const data = {
    dataSoucre: [],  //全部数据
    currentData: [], //当前屏幕显示的数据
    startIndex: 0,
    endIndex: 0,
    paddingSet: {
        paddingTop: 0,
        paddingBottom: 0
    }
}

export function reactive (list) {
    Object.defineProperties($state, {
        dataSoucre: {
            get () {
                return data.dataSoucre;
            },
            set (newValue) {
                data.dataSoucre = newValue;
                // set currentData
                setCurrentData();
            }
        },
        currentData: {
            get () {
                return data.currentData;
            },
            set (newValue) {
                data.currentData = newValue;
                // update view
                update($state.currentData, list);
            }
        },
        startIndex: {
            get () {
                return data.startIndex;
            },
            set (newValue) {
                if($state.startIndex !== newValue) {
                    data.startIndex = newValue;
                    setCurrentData();
                    $state.endIndex >= $state.dataSoucre.length - 1 
                    && 
                    setDataSource($state.dataSoucre.length + 1, $state.dataSoucre.length * 2)  // 没有多余数据
                    setPaddingSet();
                    // 当startIndex 变更的时候  视图就要变化
                    // 当endIndex >= dataSoucre的长度-1  更新视图  添加padding
                }
            }
        },
        endIndex: {
            get () {
                return setEndIndex();
            },
        },
        paddingSet: {
            get () {
                return data.paddingSet;
            },
            set (newValue) {
                data.paddingSet = newValue;
                updatePaddingSet($state.paddingSet, list)
                // 更新 padding
            }
        }
    })

    return $state
}

function setEndIndex () {
    const endIndex = $state.startIndex + MAX_ITEM_COUNT;
    // 判断当前endIndex 如果加上maxcount 能从dataSoucre中获取到值就返回获取到的，否则则返数据源中的最后一条
    return $state.dataSoucre[endIndex] ? endIndex : $state.dataSoucre.length - 1;  
}

export function setDataSource (init, count) {
    $state.dataSoucre = [
        ...$state.dataSoucre,
        ...getData(init, count)
    ]
}

// 实际显示的数据
export function setCurrentData () {
    $state.currentData = $state.dataSoucre.slice($state.startIndex, $state.endIndex);
}

export function setPaddingSet () {
    $state.paddingSet = {
        paddingTop: $state.startIndex * ITEM_HEIGHT,
        paddingBottom: ($state.dataSoucre.length - $state.endIndex) * ITEM_HEIGHT,
    }
}

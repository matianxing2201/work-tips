import { MAX_ITEM_COUNT } from "./config";

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

export function reactive () {
    Object.defineProperties($state, {
        dataSoucre: {
            get () {
                return data.dataSoucre;
            },
            set (newValue) {
                data.dataSoucre = newValue;
                // set currentData
            }
        },
        currentData: {
            get () {
                return data.currentData;
            },
            set (newValue) {
                data.currentData = newValue;
                // update view
            }
        },
        startIndex: {
            get () {
                return data.startIndex;
            },
            set (newValue) {
                if($state.startIndex !== newValue) {
                    data.startIndex = newValue;
                    // 当startIndex 变更的时候  视图就要变化
                    // 当endIndex >= dataSoucre的长度-1  更新视图  添加padding
                }
            }
        },
        endIndex: {
            get () {
                return setEndIndex();
            },
        }
    })
}

function setEndIndex () {
    const endIndex = $state.startIndex + MAX_ITEM_COUNT;
    // 判断当前endIndex 如果加上maxcount 能从dataSoucre中获取到值就返回获取到的，否则则返数据源中的最后一条
    return $state.dataSoucre[endIndex] ? endIndex : $state.dataSoucre.length - 1;  
}
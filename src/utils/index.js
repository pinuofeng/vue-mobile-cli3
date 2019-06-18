
// 标准防抖
function debounce(fn, wait) {
    let timeout;
    return function() {
        let that = this;
        let arg = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            fn.apply(that,arg)
        }, wait);
    }
}


// 先触发式防抖
function preDebounce(fn, wait) {
    let timeout;
    return function(){
        let arg = arguments;
        let that = this;
        clearTimeout(timeout);
        !timeout && fn.apply(that,arg)
        timeout = setTimeout(function(){
            timeout = null;
        }, wait);
    }
}

// 标准节流
function throttle(fn, wait) {
    let timeout;
    return function () {
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                fn.apply(this, arguments)
            }, wait)
        }
    }
}


// 先触发式节流
function preThrottle(fn, wait) {
    let timeout;
    return function () {
        if (!timeout) {
            fn.apply(this, arguments)
            timeout = setTimeout(() => {
                timeout = null;
            }, wait)
        }
    }
}


// 根据value获取text
export function fillterText(value, arr) {
    let text = '';
    arr.some(item => {
        if((item.value+'') === (value+'')){
            text = item.text;
            return true
        }
    });
    return text
}

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
import $ from 'jquery'

export default {
    setH1() {
        var newDiv = document.createElement('div'); // 创建一个新的 div 元素
        newDiv.textContent = '这是一个新的 div 元素！'; // 设置元素的文本内容
        document.body.appendChild(newDiv);
    }
}
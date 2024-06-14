
// 定义一个函数，用于显示弹框
function showAlert() {
    // 创建一个新的div元素作为弹框
    var alertDiv = document.createElement('div');

    // 设置弹框的样式
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '50%';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translate(-50%, -50%)';
    alertDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    alertDiv.style.padding = '50px';
    alertDiv.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.2)';
    alertDiv.style.borderRadius = '12px';
    alertDiv.style.zIndex = '1000';
    alertDiv.style.fontSize = '24px';
    alertDiv.style.color = '#333';
    alertDiv.style.textAlign = 'center';
    alertDiv.style.opacity = '0';
    alertDiv.style.animation = 'fadeIn 0.5s forwards';

    // 设置弹框的内容
    alertDiv.innerText = '该页面暂不存在';

    // 添加弹框到body
    document.body.appendChild(alertDiv);

    // 在3秒后自动移除弹框
    setTimeout(function() {
        alertDiv.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(function() {
            document.body.removeChild(alertDiv);
        }, 500);
    }, 3000);
}

// 获取所有包含cdBox类和weatherBox类的元素
var boxes = document.querySelectorAll('.cdBox, .weatherBox');

// 为每个盒子绑定点击事件
boxes.forEach(function(box) {
    box.addEventListener('click', showAlert);
});

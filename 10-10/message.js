let APP_ID = 'Xhuf1yo80WrLxd11Mzrs6tn5-gzGzoHsz';
let APP_KEY = 'Xu4ie4ICnzuimMFsEAi1coYF';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm');
myForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value.trim()
    let name = myForm.querySelector('input[name=name]').value.trim()
    if (content && name) {
        let Message = AV.Object.extend('Message');
        let message = new Message();
        message.save({
            'name': name,
            'content': content
        }).then(function(object) {
            let li = document.createElement('li')
            li.innerText = `${object.attributes.name}：${object.attributes.content}`
            let messageList = document.querySelector('#messageList')
            if (messageList.firstElementChild) {
                messageList.firstElementChild.before(li)
            } else {
                messageList.appendChild(li)
            }
            myForm.querySelector('input[name=content]').value = ''
            myForm.querySelector('input[name=name]').value = ''
        })
    } else {
        alert('姓名和留言不能为空')
    }
})

// 获取
var query = new AV.Query('Message');
query.find().then(function(messages) {
    let array = messages.map((item) => item.attributes).reverse()
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}：${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
}).then(function(messages) {
    // 更新成功
}, function(error) {
    // 异常处理
});
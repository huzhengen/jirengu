var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
    process.exit(1)
}

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true)
    var path = request.url
    var query = ''
    if (path.indexOf('?') >= 0) { query = path.substring(path.indexOf('?')) }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method

    if (path == '/') {
        let string = fs.readFileSync('./index.html', 'utf8')
        let cookies = request.headers.cookie.split('; ')
        let hash = {}
        for (let i = 0; i < cookies.length; i++) {
            let parts = cookies[i].split('=')
            let key = parts[0]
            let value = parts[1]
            hash[key] = value
        }
        let email = hash.sign_in_email
        let users = fs.readFileSync('./db/users', 'utf8')
        try {
            users = JSON.parse(users)
        } catch (e) {
            users = []
        }
        let foundUser
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                foundUser = users[i]
                break
            }
        }
        console.log(foundUser)
        if (foundUser) {
            console.log('有用户')
            string = string.replace('__password__', foundUser.password)
        } else {
            console.log('没用户')
            string = string.replace('__password__', '请先登录')
        }
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write(string)
        response.end()
    } else if (path === '/sign_in' && method === 'GET') {
        let string = fs.readFileSync('./sign_in.html', 'utf8')
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(string)
        response.end()

    } else if (path === '/sign_up' && method === 'GET') {
        let string = fs.readFileSync('./sign_up.html', 'utf8')
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(string)
        response.end()
    } else if (path === '/sign_in' && method === 'POST') {
        readBody(request).then((body) => {
            console.log(body)
            let strings = body.split('&')
            let hash = {}
            strings.forEach((string) => {
                let parts = string.split('=')
                let key = parts[0]
                let value = parts[1]
                hash[key] = decodeURIComponent(value)
            })
            let { email, password } = hash
            let users = fs.readFileSync('./db/users', 'utf8')
            try {
                users = JSON.parse(users)
            } catch (e) {
                users = []
            }
            let found
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    found = true
                    break
                }
            }
            if (found) {
                // cookie
                response.setHeader('Set-Cookie', `sign_in_email=${email}`)
                response.statusCode = 200
            } else {
                response.statusCode = 401
            }
            response.end()
        })
    } else if (path === '/sign_up' && method === 'POST') {
        readBody(request).then((body) => {
            let strings = body.split('&')
            let hash = {}
            strings.forEach((string) => {
                let parts = string.split('=')
                let key = parts[0]
                let value = parts[1]
                hash[key] = decodeURIComponent(value)
            })
            let { email, password, password_confirmation } = hash
            // 开始判断邮箱密码规则是否正确
            if (email.indexOf('@') === -1) {
                response.statusCode = 400
                response.setHeader('Content-Type', 'application/json;charset=utf-8')
                response.write(`{
                  "errors": {
                    "email": "invalid"
                  }
                }`)
            } else if (password !== password_confirmation) {
                response.statusCode = 400
                response.setHeader('Content-Type', 'application/json;charset=utf-8')
                response.write(`{
                  "errors": {
                    "password": "notsame"
                  }
                }`)
            } else {
                let users = fs.readFileSync('./db/users', 'utf8')
                try {
                    users = JSON.parse(users)
                } catch (exception) {
                    users = []
                }
                let inUsers = false
                for (let i = 0; i < users.length; i++) {
                    let user = users[i]
                    if (user.email === email) {
                        inUsers = true
                        break
                    }
                }
                if (inUsers) {
                    response.statusCode = 400
                    response.setHeader('Content-Type', 'application/json;charset=utf-8')
                    response.write(`{
                    "errors": {
                      "inUsers": true
                    }
                  }`)
                } else {
                    users.push({ email: email, password: password })
                    let usersString = JSON.stringify(users)
                    fs.writeFileSync('./db/users', usersString)
                    response.statusCode = 200
                }
            }
            response.statusCode = 200
            response.end()
        })
    } else {
        response.statusCode = 404
        response.end()
    }
})

function readBody(request) {
    return new Promise((resolve, reject) => {
        let body = []
        request.on('data', (chunk) => {
            body.push(chunk)
        }).on('end', () => {
            body = Buffer.concat(body).toString()
            resolve(body)
        })
    })
}

server.listen(port)
console.log('监听端口 ' + port + ' 成功\n请打开 http://localhost:' + port)
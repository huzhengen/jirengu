fakeData()

let model = {
    data: {
        name: '',
        number: 0,
        id: ''
    },
    fetch(id) {
        console.log(id)
        return axios.get(`/books/${id}`).then((response) => {
            console.log(response)
            this.data = response.data
            return response
        }, () => {
            console.log('fail')
        })
    },
    update(data) {
        let id = this.data.id
        return axios.put(`/books/${id}`, data).then((response) => {
            this.data = response.data
            return response
        })
    }
}

let view = {
    el: '#app',
    template: `
        <div>书名：《__name__》。数量：<span id="number">__number__</span>。</div>
        <div>
            <button id="addOne">+1</button>
            <button id="minusOne">-1</button>
            <button id="reset">归零</button>
        </div>
    `,
    render(data) {
        let html = this.template.replace('__name__', data.name)
            .replace('__number__', data.number)
        $(this.el).html(html)
    }
}

let controller = {
    init(options) {
        let view = options.view
        let model = options.model
        this.view = view
        this.model = model
        this.view.render(this.model.data)
        this.bindEvents()
        this.model.fetch(1).then(() => {
            this.view.render(this.model.data)
        })
    },
    addOne() {
        let oldNumber = $('#number').text()
        let newNumber = oldNumber - 0 + 1
        this.model.update({ number: newNumber }).then(() => {
            this.view.render(this.model.data)
        })
    },
    minusOne() {
        let oldNumber = $('#number').text()
        let newNumber = oldNumber - 0 - 1
        this.model.update({ number: newNumber }).then(() => {
            this.view.render(this.model.data)
        })
    },
    reset() {
        this.model.update({ number: 0 }).then(() => {
            this.view.render(this.model.data)
        })
    },
    bindEvents() {
        $(this.view.el).on('click', '#addOne', this.addOne.bind(this))
        $(this.view.el).on('click', '#minusOne', this.minusOne.bind(this))
        $(this.view.el).on('click', '#reset', this.reset.bind(this))
    }
}

controller.init({ view: view, model: model })

function fakeData() {
    console.log(1)
    let book = {
        name: 'JavaScript 高级程序设计',
        number: 2,
        id: 1
    }
    console.log(3)
    axios.interceptors.response.use(function(response) {
        console.log(2)
        let { config: { method, url, data } } = response

        if (url === '/books/1' && method === 'get') {

            response.data = book
        } else if (url === '/books/1' && method === 'put') {
            data = JSON.parse(data)
            Object.assign(book, data)
            response.data = book
        }
        return response
    })
}
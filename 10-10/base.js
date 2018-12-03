window.View = function(selector){
    return document.querySelector(selector)
}

var view = View('className')

window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init: function(){},
        fetch: function(){},
        save: function(){}
    }
}

var model = Model({resourceName: 'Message'})
var model2 = Model({resourceName: 'Student'})

window.Controller = function(){
    return {
        init: function(){},
        bindEvents: function(){}
    }
}
var APP_ID = 'Xhuf1yo80WrLxd11Mzrs6tn5-gzGzoHsz';
var APP_KEY = 'Xu4ie4ICnzuimMFsEAi1coYF';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
console.log('model1')

setTimeout(function () {
  () => import(/* webpackChunkName: "model2" */'./model2.js')
}, 1000)
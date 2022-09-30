# echarts-taro

## 1，官网下载定制版echarts，为了避免文件过大，无法在微信开发者工具中无法真机预览
#### https://echarts.apache.org/zh/builder.html, 自行下载echart.min.js

## 2，此处修改文件名，
#### echart.min.js文件名修改为echart.js
#### 我这里使用echarts.min.js作为引入文件，会报错，原因未知

## 3，使用原生组件ec-canvas
#### 将下面代码添加至配置文件中（作为组件引入，我添加到了app.config.js里面）
`usingComponents: {
     "ec-canvas": './components/ec-canvas/ec-canvas'
   }`


## 4，按照官网操作，此时会报错 r.getContext is not a function...
#### 解决方法： 打开echart.js文件，搜索r.getContext，添加“?.”，将其修改为r.getContext?.

## 5，即可使用，另外一个小坑
#### 如果最外层page标签给了height属性，会导致canvas无法随dom滚动，出现此种问题，先检查canvas所有父级元素，是否设置了height：100%或position：absolute|fixed等属性

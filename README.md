# echarts-taro

## 1，官网下载定制版echarts，为了避免文件过大，无法在微信开发者工具中无法真机预览
#### https://echarts.apache.org/zh/builder.html, 自行下载echart.min.js

## 2，此处需修改文件名
#### echart.min.js文件名修改为echart.js

## 3，按照官网操作，此时会报错 r.getContext is not a function...
#### 解决方法： 打开echart.js文件，搜索r.getContext，添加“?.”，将其修改为r.getContext?.

## 4，即可使用，另外一个小坑
#### 如果最外层page标签给了height属性，会导致canvas无法随dom滚动，出现此种问题，先检查canvas所有父级元素，是否设置了height：100%或position：absolute|fixed等属性

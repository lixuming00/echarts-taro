export const chart_options = {
  /**
   * @组件标题
   * @params text  主标题文字
   * @params subtext  副标题文字
   * @params textStyle  主标题样式
   * @params subtextStyle  副标题样式
   * @params 。。。
   *
   * */
  title: {
    text: '',
    subtext: "",
    left: "",
    top: "",
    textStyle: {},
    subtextStyle: {}
  },
  tooltip: {},
  /**
   * @图例组件
   * @params type 图例的类型 plain || scroll
   * @params orient 图例的朝向 horizontal || vertical
   * @params align 图例标记和文本的对齐
   * @params type
   * @params type
   * */
  legend: {},  // 图例组件
  xAxis: {
    type: 'category',
  },
  yAxis: {},
  dataset: {
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      ['Latte', 43.3, 85.8, 93.7],
      ['Tea', 83.1, 73.4, 55.1],
      ['Cocoa', 86.4, 65.2, 82.5],
      ['Brownie', 72.4, 53.9, 39.1]
    ]
  },
  series: [{type: "bar"}, {type: "bar"}, {type: "bar"}]
};

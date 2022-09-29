import React, { useEffect, useRef } from "react";
import { View } from "@tarojs/components";
import './index.scss';

import * as echarts from '../../ec-canvas/echarts';
import { chart_options } from "./config";
export default function ChartComp() {

  const handler = {
    _init: (canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
      });
      canvas.setChart(chart_options);
      chart.setOption(chart_options);
      return chart;
    }
  };

  return (
    <View className={'container'}>
      <ec-canvas id="mychart-dom-bar"
                 canvas-id="mychart-bar"
                 ec={{onInit: handler._init}} />
    </View>
  )
}

import React from 'react';
import { View, CoverView } from "@tarojs/components";
import { HeadComp, ListComp } from "./index";
import './index.scss';

import ChartComp from '../../common/chart';

export default function Main() {

  return (
    <View className={'wrapper-home-main'}>
      <View className={'background-bg'} />
      <HeadComp />
      <ChartComp />
      <ListComp />
    </View>
  )
}


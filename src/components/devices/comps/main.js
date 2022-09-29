import React, { useState } from 'react';
import { View, Text } from "@tarojs/components";
import './index.scss';
import { ListComp, OverviewComp } from './index';

export default function Main() {

  return (
    <View className={'wrapper-device-main'}>

      <OverviewComp />

      <ListComp />

    </View>
  )
}


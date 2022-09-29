import React, { useState } from 'react';
import { View } from "@tarojs/components";
import { MainComp } from "../../components/home/comps";

export default function Home() {

  return (
    <View className={'wrapper-home'}>
      <MainComp />
    </View>
  )
}

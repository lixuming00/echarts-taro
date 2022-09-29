import React from 'react';
import { Text, View } from "@tarojs/components";

export default function Overview() {
  return (
    <View className={'wrapper-overview'}>
      <View className="overview-item">
        <View className={'title'}>设备总数</View>
        <View className={'bottom'}><Text className={'number'}>11</Text>台</View>
      </View>
      <View className="overview-item">
        <View className={'title'}>覆盖区域</View>
        <View className={'bottom'}><Text className={'number'}>11</Text>个</View>
      </View>
    </View>
  )
}

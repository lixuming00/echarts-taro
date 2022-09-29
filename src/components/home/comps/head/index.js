import React from 'react';
import './index.scss';
import { View, Text } from "@tarojs/components";
import { AtDivider } from 'taro-ui';

export default function HeadComp() {
  return (
    <View className={'wrapper-home-head'}>
      <View className="balance">
        <View className="count">
          <Text className={'number'}>2048.2048</Text>
          <Text>元</Text>
        </View>
        <View className="title">我的余额</View>
      </View>

      <AtDivider height={80} lineColor={'#eee'} />

      <View className="account">
        <View className={'item'}>
          <View className="count">
            <Text className={'number'}>209848.28</Text>
            <Text>元</Text>
          </View>
          <View className="title">上月收益</View>
        </View>
        <View className={'item'}>
          <View className="count">
            <Text className={'number'}>209848.27</Text>
            <Text>元</Text>
          </View>
          <View className="title">昨日收益</View>
        </View>
        <View className={'item'}>
          <View className="count">
            <Text className={'number'}>209848.29</Text>
            <Text>元</Text>
          </View>
          <View className="title">累计收益</View>
        </View>

      </View>

    </View>
  )
}

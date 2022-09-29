import React from 'react';
import { Text, View } from "@tarojs/components";
import { AtIcon } from 'taro-ui';

export default function List() {
  return (
    <View className={'wrapper-device-item'}>
      <View className={'device-item'}>
        <View className="item-title item-b">
          <Text className={'title m_r'}>
            <AtIcon className={'machine'} value='tag' size='24' color='#FBDA31' />
            <Text>王府井</Text>
          </Text>
          <Text className={'addr m_r'}>北京市东城区王府大街1号</Text>
          <AtIcon className={'icon-wifi'} value='streaming' size='26' color='#FBDA31' />
        </View>
        <View className={'item-number item-b'}>
          <AtIcon className={'icon-wifi'} value='bookmark' size='20' />
          <Text>202007160521</Text>
        </View>
        <View className="item-profit item-b">
          <View><Text className="count">20</Text>元</View>
          <View>盈利 / 本月</View>
        </View>
      </View>

      <View className={'device-item'}>
        <View className="item-title item-b">
          <Text className={'title m_r'}>
            <AtIcon className={'machine'} value='tag' size='24' color='#FBDA31' />
            <Text>王府井</Text>
          </Text>
          <Text className={'addr m_r'}>北京市东城区王府大街1号</Text>
          <AtIcon className={'icon-wifi'} value='streaming' size='26' color='#FBDA31' />
        </View>
        <View className={'item-number item-b'}>
          <AtIcon className={'icon-wifi'} value='bookmark' size='20' />
          <Text>202007160521</Text>
        </View>
        <View className="item-profit item-b">
          <View><Text className="count">20</Text>元</View>
          <View>盈利 / 本月</View>
        </View>
      </View>

      <View className={'device-item'}>
        <View className="item-title item-b">
          <Text className={'title m_r'}>
            <AtIcon className={'machine'} value='tag' size='24' color='#FBDA31' />
            <Text>王府井</Text>
          </Text>
          <Text className={'addr m_r'}>北京市东城区王府大街1号</Text>
          <AtIcon className={'icon-wifi'} value='streaming' size='26' color='#FBDA31' />
        </View>
        <View className={'item-number item-b'}>
          <AtIcon className={'icon-wifi'} value='bookmark' size='20' />
          <Text>202007160521</Text>
        </View>
        <View className="item-profit item-b">
          <View><Text className="count">20</Text>元</View>
          <View>盈利 / 本月</View>
        </View>
      </View>

    </View>
  )
}

import React, { useEffect } from 'react';
import { View } from "@tarojs/components";
import { AtButton } from 'taro-ui';
import Taro from "@tarojs/taro";

export default function Devices(){

 const handler = async () => {
   const res = await Taro.login();
   console.log('res',res)
 };

  return (
    <View className={'wrapper-device'}>
      <AtButton onClick={handler} type='primary'>welcome</AtButton>
    </View>
  )
}

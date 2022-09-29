import React, { useState } from 'react'
import './app.scss';
import { View } from "@tarojs/components";


export default function App({children}) {

  return (
    <View>{children}</View>
  )
}

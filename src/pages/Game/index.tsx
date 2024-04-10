import React, { useEffect } from 'react'
import { Text, View, Image } from '@tarojs/components'
import cls from './index.module.less'
import './index.less'
import classRoom from '../../assets/classroom.jpg'
import { Button } from '@antmjs/vantui'
import gameGif from '../../assets/game.gif'
definePageConfig({
  navigationBarTitleText: '游戏',
})
const Game: React.FC = () => {
  return (
    <View
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Image
        mode={'widthFix'}
        src={gameGif}
        style={{
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          position: 'absolute',
          transform: 'translateX(-50%)',
          left: '50%',
        }}
      ></Image>
      <View className={cls.button}>
        <Button
          style={{
            background: 'linear-gradient(to right, #ff8f34, #f54545)',
            color: '#fff',
            width: '30%',
            zIndex: 99999,
            fontSize: 15,
          }}
        >
          主线任务
        </Button>
        <Button
          style={{
            background: 'linear-gradient(to right, #ff6034, #ee0a24)',
            color: '#fff',
            width: '30%',
            zIndex: 99999,
            fontSize: 15,
            marginTop: 0,
          }}
        >
          支线任务
        </Button>
      </View>
    </View>
  )
}

export default Game

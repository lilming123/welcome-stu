import React from 'react'
import { View } from '@tarojs/components'
import { Image } from '@taroify/core'
import cls from './index.module.less'
import rank from '../../assets/setting/ranking.png'
import shop from '../../assets/setting/trolley.png'
import task from '../../assets/setting/task.png'
import user from '../../assets/setting/user.png'
import school from '../../assets/setting/school.png'
import timeTable from '../../assets/setting/timetable.png'
import order from '../../assets/setting/order.png'
import setting from '../../assets/setting/cogwheel.png'
import kefu from '../../assets/setting/kefu.png'
import fankui from '../../assets/setting/fankui.png'
import './index.less'
definePageConfig({
  navigationBarTitleText: '个人中心',
})
const Setting: React.FC = () => {
  return (
    <View className={cls.container}>
      <View className={cls.head}>
        <View className={cls.userInfo}>
          <Image className={cls.img} src={user} />
          <View className={cls.userText}>
            <View className={cls.userName}>用户名</View>
            <View className={cls.id}>ID:123456</View>
          </View>
        </View>
        <View className={cls.line}></View>
        <View className={cls.otherInfo}>
          <View className={cls.otherItem}>
            <Image className={cls.ItemImage} src={task}></Image>
            <View className={cls.ItemTitle}>任务</View>
          </View>

          <View className={cls.otherItem}>
            <Image className={cls.ItemImage} src={rank}></Image>
            <View className={cls.ItemTitle}>排名</View>
          </View>

          <View className={cls.otherItem}>
            <Image className={cls.ItemImage} src={shop}></Image>
            <View className={cls.ItemTitle}>购物车</View>
          </View>
        </View>
      </View>
      <View className={cls.invent}>
        <button className={cls.button}>邀请同学</button>
      </View>

      <View className={cls.stuServer}>
        <View className={cls.serverName}>常用</View>
        <View className={cls.stuItemList}>
          <View className={cls.stuItem}>
            <Image className={cls.stuItemImg} src={school}></Image>
            <View className={cls.stuItemTitle}>学校认证</View>
          </View>
          <View className={cls.stuItem}>
            <Image className={cls.stuItemImg} src={timeTable}></Image>
            <View className={cls.stuItemTitle}>每日签到</View>
          </View>
          <View className={cls.stuItem}>
            <Image className={cls.stuItemImg} src={order}></Image>
            <View className={cls.stuItemTitle}>我的订单</View>
          </View>
          <View className={cls.stuItem}>
            <Image className={cls.stuItemImg} src={setting}></Image>
            <View className={cls.stuItemTitle}>个人设置</View>
          </View>
        </View>
      </View>
      <View className={cls.otherServer}>
        <View className={cls.serverName}>其他</View>

        <View className={cls.otherItemList}>
          <View className={cls.stuItem}>
            <Image className={cls.stuItemImg} src={kefu}></Image>
            <View className={cls.stuItemTitle}>客服</View>
          </View>

          <View className={cls.stuItem}>
            <Image className={cls.stuItemImg} src={fankui}></Image>
            <View className={cls.stuItemTitle}>问题反馈</View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Setting

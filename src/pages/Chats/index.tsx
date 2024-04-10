import React from 'react'
import { Text, View, Image } from '@tarojs/components'
import './index.less'
import groupImage from '../../assets/chat/message.png'
import clear from '../../assets/chat/clear.png'
import cls from './index.module.less'
import findGroupImage from '../../assets/tab/chat.png'
import { Search } from '@antmjs/vantui'
import { AtBadge } from 'taro-ui'
import 'taro-ui/dist/style/components/badge.scss'

definePageConfig({
  navigationBarTitleText: '班级圈',
})
const Chats: React.FC = () => {
  return (
    <View className={cls.chatList}>
      <View style={{ background: 'antiquewhite', padding: '0 15px 15px' }}>
        <View className={cls.chatHeader}>
          <Text style={{ fontSize: 25 }}>消息</Text>
          <Text style={{ fontSize: 15 }}>(11)</Text>
          <View
            style={{
              display: 'flex',
              marginLeft: 20,
              fontSize: 15,
              color: '#999',
            }}
          >
            <Image src={clear} style={{ width: 17, height: 17 }}></Image>
            全部已读
          </View>
        </View>
      </View>
      <Search
        className={cls.chatSearch}
        placeholder="请输入搜索关键词"
        shape="rounded"
      ></Search>
      <View className={cls.findGroupChat}>
        <Image src={findGroupImage} className={cls.findGroupImage}></Image>
        发现群聊
      </View>
      <View className={cls.groupChatList}>
        <View className={cls.groupChatItem}>
          <AtBadge value={8}>
            <Image src={groupImage} className={cls.groupChatImage}></Image>
          </AtBadge>
          <View className={cls.groupChatDetails}>
            <View className={cls.groupName}>班级群</View>
            <View className={cls.groupLatestMessage}>大家好啊！</View>
          </View>
          <View className={cls.groupLatestTime}>03-21</View>
        </View>
        <View className={cls.line}></View>
        <View className={cls.groupChatItem}>
          <AtBadge value={3}>
            <Image src={groupImage} className={cls.groupChatImage}></Image>
          </AtBadge>
          <View className={cls.groupChatDetails}>
            <View className={cls.groupName}>宿舍群</View>
            <View className={cls.groupLatestMessage}>大家好啊！</View>
          </View>
          <View className={cls.groupLatestTime}>03-21</View>
        </View>
        <View className={cls.line}></View>
      </View>
    </View>
  )
}

export default Chats

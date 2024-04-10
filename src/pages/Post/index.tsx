import React from 'react'
import {
  View,
  Text,
  Navigator,
  Swiper,
  SwiperItem,
  Image,
  Block,
} from '@tarojs/components'
import { AtIcon, AtTag } from 'taro-ui'
import './index.less'

import discount from '../../assets/post/discount.png'
import game from '../../assets/post/game.png'
import group_buy from '../../assets/post/group_buy.png'
import plane from '../../assets/post/plane.png'
import movie from '../../assets/post/movie.png'

definePageConfig({
  navigationBarTitleText: '发现',
})
const Post: React.FC = () => {
  const data = {
    banner: [
      { id: 1, url: 'https://img01.yzcdn.cn/vant/apple-1.jpg' },
      { id: 2, url: 'https://img01.yzcdn.cn/vant/apple-1.jpg' },
      { id: 3, url: 'https://img01.yzcdn.cn/vant/apple-1.jpg' },
    ],
    channel: [
      { id: 1, name: '特价好物', iconUrl: discount },
      { id: 2, name: '美食团购', iconUrl: group_buy },
      { id: 3, name: '休闲玩乐', iconUrl: game },
      { id: 4, name: '电影演出', iconUrl: movie },
      { id: 5, name: '火车票机票', iconUrl: plane },
    ],
    couponList: [
      {
        id: 1,
        tag: '优惠',
        discount: '10',
        min: 50,
        name: '新客户首单优惠',
        desc: '',
        days: 7,
        startTime: '2024-3-31',
        endTime: '2024-4-7',
      },
      // {
      //   id: 1,
      //   tag: "优惠",
      //   discount: "20",
      //   min: 100,
      //   name: "限时优惠",
      //   desc: "",
      //   days: 7,
      //   startTime: "2024-3-31",
      //   endTime: "2024-4-7",
      // },
      // {
      //   id: 1,
      //   tag: "123",
      //   discount: "20",
      //   min: 80,
      //   name: "开学季优惠",
      //   desc: "",
      //   days: 7,
      //   startTime: "2024-3-31",
      //   endTime: "2024-4-7",
      // },
    ],
    grouponList1: [
      {
        id: 1,
        picUrl: 'https://m.media-amazon.com/images/I/71YwdmwgW+L._SY522_.jpg',
        name: '高等数学',
        grouponMember: 3,
        expireTime: 7,
        brief: '简介',
        retailPrice: 100,
        grouponPrice: 80,
      },
      {
        id: 2,
        picUrl:
          'https://img10.360buyimg.com/n1/jfs/t1/230500/22/12688/63285/65afa163F7d76aae2/93535925b9ceddf4.jpg',
        name: '垃圾袋',
        grouponMember: 3,
        expireTime: 7,
        brief: '简介',
        retailPrice: 100,
        grouponPrice: 80,
      },
    ],
    grouponList2: [
      {
        id: 1,
        picUrl:
          'https://img13.360buyimg.com/n1/jfs/t1/161645/26/44068/151626/6614b1cdF24cee2d0/3df4ea08d011e762.jpg',
        name: '洗衣粉',
        grouponMember: 3,
        expireTime: 7,
        brief: '简介',
        retailPrice: 100,
        grouponPrice: 80,
      },
      {
        id: 2,
        picUrl:
          'https://img14.360buyimg.com/n0/jfs/t1/237655/15/5822/80075/6571b61aFc7f39b99/9ed6ddb06ae36bca.jpg',
        name: '沐浴露',
        grouponMember: 3,
        expireTime: 7,
        brief: '简介',
        retailPrice: 100,
        grouponPrice: 80,
      },
    ],
  }
  return (
    <Block>
      <View className="bar-container container">
        <View className="search">
          <View className="input">
            <AtIcon className="icon" size="18" color="#666" value="search" />
            <Text className="txt">商品搜索, 共0款好物</Text>
          </View>
        </View>
        <Swiper
          className="banner"
          indicatorDots
          autoplay
          interval={3000}
          duration={100}
        >
          {data.banner &&
            data.banner.map((item) => {
              return (
                <SwiperItem key={item.id}>
                  <Image className="img" src={item.url} />
                </SwiperItem>
              )
            })}
        </Swiper>
        <View className="m-menu">
          {data.channel &&
            data.channel.map((item) => {
              return (
                <View key={item.id} className="item">
                  <Image className="img" src={item.iconUrl} />
                  <Text className="txt">{item.name}</Text>
                </View>
              )
            })}
        </View>

        {data.couponList && data.couponList.length > 0 && (
          <View className="a-coupon">
            <View className="b">
              {data.couponList.map((item) => {
                return (
                  <View data-index={item.id} className="item" key={item.id}>
                    <View className="tag">{item.tag}</View>
                    <View className="content">
                      <View className="left">
                        <View className="discount">{item.discount}元</View>
                        <View className="min"> 满{item.min}元使用</View>
                      </View>
                      <View className="right">
                        <View className="name">{item.name}</View>
                        <View className="desc">{item.desc}</View>
                        {item.days != 0 ? (
                          <View className="time">有效期：{item.days}天</View>
                        ) : (
                          <View className="time">
                            {' '}
                            有效期：{item.startTime} - {item.endTime}
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        )}

        <View className="b info_flow">
          <View className="column">
            {data.grouponList1.map((item, index) => {
              return (
                <View key={item.id} className="info_flow_item">
                  <Navigator url="/pages/Goods/index">
                    <Image
                      className="flow_item"
                      mode={'widthFix'}
                      src={item.picUrl}
                    ></Image>
                    <View className="flow_right">
                      <View className="flow_Text">
                        <View className="flow_header">
                          <Text className="flow_desc">{item.name}</Text>
                          <View className="flow_price">
                            ￥{item.retailPrice}
                          </View>
                        </View>
                      </View>
                    </View>
                  </Navigator>
                </View>
              )
            })}
          </View>
          <View className="column">
            {data.grouponList2.map((item, index) => {
              return (
                <View key={item.id} className="info_flow_item">
                  <Navigator url="/pages/Goods/index">
                    <Image
                      className="flow_item"
                      mode={'widthFix'}
                      src={item.picUrl}
                    ></Image>
                    <View className="flow_right">
                      <View className="flow_Text">
                        <View className="flow_header">
                          <Text className="flow_desc">{item.name}</Text>
                          <View className="flow_price">
                            ￥{item.retailPrice}
                          </View>
                        </View>
                      </View>
                    </View>
                  </Navigator>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    </Block>
  )
}

export default Post

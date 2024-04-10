import React, { useState } from 'react'
import { Text, View, Image } from '@tarojs/components'
import {
  Cell,
  GoodsAction,
  GoodsActionButton,
  GoodsActionIcon,
  Icon,
  NavBar,
} from '@antmjs/vantui'
import cls from './index.module.less'
import Taro from '@tarojs/taro'
import './index.less'
import { message } from 'taro-ui'

definePageConfig({
  navigationBarTitleText: '商品详情页',
})
const Goods: React.FC = () => {
  const [cart, setCart] = useState(5)
  return (
    <View style={{ position: 'relative', width: '100%', height: '100%' }}>
      <View className={cls.goods_img}>
        <Image
          mode="widthFix"
          className={cls.image}
          src={'https://m.media-amazon.com/images/I/71YwdmwgW+L._SY522_.jpg'}
        ></Image>
      </View>
      <View className={cls.goods_dec}>
        <Text className={cls.goods_price}>￥40.00</Text>
        <Text className={cls.goods_title}>
          高等数学同济第七版上下册同步辅导及习题精解同济大学高数大一课后练习题全解同步测试卷指南辅导讲义大学数学考研
        </Text>
        <Icon name="share-o" className={cls.icon} size="36"></Icon>
      </View>
      <View className={cls.goods_info}>
        <Cell
          title="作者"
          isLink
          value="同济大学数学系"
          arrowDirection="down"
        />
        <Cell
          title="出版社"
          isLink
          value="高等教育出版社"
          arrowDirection="down"
        />
        <Cell
          title="分类"
          isLink
          value="图书/自然科学/数学"
          arrowDirection="down"
        />
      </View>
      <View style={{ height: 100, width: '100%' }}></View>
      <GoodsAction>
        <GoodsActionIcon icon="chat-o" text="客服" dot />
        <GoodsActionIcon icon="cart-o" text="购物车" info={cart.toString()} />
        <GoodsActionIcon icon="shop-o" text="店铺" />
        <GoodsActionButton
          text="加入购物车"
          type="warning"
          onClick={() => {
            setCart((pre) => pre + 1)
            Taro.showToast({
              title: '成功加入到购物车',
              icon: 'success',
              duration: 2000,
            })
          }}
        />
        <GoodsActionButton text="立即购买" />
      </GoodsAction>
    </View>
  )
}

export default Goods

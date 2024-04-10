// eslint-disable-next-line no-unused-vars
import { View, Text, Image } from '@tarojs/components'
import Taro, { getStorageSync, useLoad } from '@tarojs/taro'
import logo from '../../assets/logo.png'
import cls from './index.module.less'
import { Button, Field, Form, FormItem } from '@antmjs/vantui'
import './index.less'
definePageConfig({
  navigationBarTitleText: '登陆',
})
export default function Login() {
  useLoad(() => {
    const userId = getStorageSync('userId')
    if (userId) {
      console.log(userId)
      Taro.switchTab({
        url: '/pages/Game/index',
      })
    }
  })

  const onLogin = () => {
    // user
    //   .login(event.detail.value!.phone, event.detail.value!.password)
    //   .then(() => {
    Taro.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000,
    })
    Taro.switchTab({
      url: '/pages/Game/index',
    })
    // })
    // .catch((res) => {
    //   Taro.showToast({
    //     title: res,
    //     icon: "error",
    //     duration: 2000,
    //   });
    // });
  }
  const onValidate = (errors: any) => {
    console.log(errors)
    const message = errors.map((error) => error.errors[0]).join('\n')
    Taro.showToast({
      title: message,
      icon: 'error',
      duration: 2000,
    })
  }

  return (
    <View className={cls.Container}>
      <View className={`${cls.Circle} ${cls.Circle__One}`}></View>
      <View className={`${cls.Circle} ${cls.Circle__Two} `}></View>
      <View className={`${cls.Circle} ${cls.Circle__Three} `}></View>
      <View className={`${cls.Circle} ${cls.Circle__Four} `}></View>
      <View className={cls.Top}>
        <Image src={logo} className={cls.Top__Img} />
        <Text className={cls.Top__Text}>登录</Text>
      </View>
      <View className={cls.FormBox}>
        <Form onFinish={onLogin} onFinishFailed={onValidate}>
          <Text className={cls.FormBox__Text}>邮箱/手机号</Text>
          {/*<FormItem*/}
          {/*  name="phone"*/}
          {/*  label={''}*/}
          {/*  className={`${cls.FormBox__Item}`}*/}
          {/*  required          >*/}
          <Field placeholder="" className={`${cls.FormBox__Item}`} />
          {/*</FormItem >*/}
          <Text className={cls.FormBox__Text}>密码</Text>
          {/*<FormItem*/}
          {/*  name="password"*/}
          {/*  label={''}*/}
          {/*  className={`${cls.FormBox__Item}`}*/}
          {/*  required          >*/}
          <Field className={`${cls.FormBox__Item}`} password placeholder="" />
          {/*</FormItem >*/}
          <Button
            round={true}
            block
            color="primary"
            formType="submit"
            className={`${cls.FormBox__Button}`}
          >
            登录
          </Button>
        </Form>
      </View>
      <View className={cls.Register}>
        <Text>没有账号？</Text>
        <Text
          className={cls.Register__Text}
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/Passport/Register',
            })
          }}
        >
          点击注册
        </Text>
      </View>
    </View>
  )
}

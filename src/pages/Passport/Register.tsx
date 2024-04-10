import Taro from '@tarojs/taro'
import React from 'react'
import { BaseEventOrig, FormProps, Text, View, Image } from '@tarojs/components'
import { user } from '@/ts/core/Passport'
import cls from './index.module.less'
import logo from '../../assets/logo.png'
import { Button, Field, Form } from '@antmjs/vantui'

definePageConfig({
  navigationBarTitleText: '注册',
})
const Register: React.FC = () => {
  const onRegister = (event: any) => {
    // //TODO 校验
    // user
    //   .register(
    //     event.detail.value!.username,
    //     event.detail.value!.phone,
    //     event.detail.value!.password,
    //   )
    //   .then((res) => {
    //     Taro.showToast({
    //       title: res,
    //       icon: 'success',
    //       duration: 2000,
    //     })
    //   })
    //   .catch((res) => {
    //     Taro.showToast({
    //       title: res,
    //       icon: 'error',
    //       duration: 2000,
    //     })
    //   })
    Taro.switchTab({
      url: '/pages/Game/index',
    })
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
    <View className={cls.container}>
      <View className={`${cls.Circle} ${cls.Circle__One}`}></View>
      <View className={`${cls.Circle} ${cls.Circle__Two} `}></View>
      <View className={`${cls.Circle} ${cls.Circle__Three} `}></View>
      <View className={`${cls.Circle} ${cls.Circle__Four} `}></View>
      <View className={cls.Top}>
        <Image src={logo} className={cls.Top__Img} />
        <Text className={cls.Top__Text}>注册</Text>
      </View>
      <View className={cls.FormBox}>
        <Form onFinish={onRegister} onFinishFailed={onValidate}>
          <Text className={cls.FormBox__Text}>姓名</Text>
          <Field
            className={`${cls.FormBox__Item}`}
            placeholder="请输入真实姓名"
          />

          <Text className={cls.FormBox__Text}>手机号</Text>
          <Field
            className={`${cls.FormBox__Item}`}
            placeholder="请输入手机号"
          />
          <Text className={cls.FormBox__Text}>密码</Text>
          <Field
            placeholder="请输入密码"
            className={`${cls.FormBox__Item}`}
            password={true}
          />
          <Text className={cls.FormBox__Text}>确认密码</Text>
          <Field
            password={true}
            placeholder="请再次输入密码"
            className={`${cls.FormBox__Item}`}
          />

          {/*</FormItem >*/}
          {/*<Text className={cls.FormBox__Text}>姓名</Text>*/}
          {/*<Form.Item*/}
          {/*  name="username"*/}
          {/*  className={`${cls.FormBox__Item}`}*/}
          {/*  rules={[{ required: true, message: "请输入真实姓名" }]}*/}
          {/*>*/}
          {/*  <Form.Control>*/}
          {/*    <Input placeholder="" />*/}
          {/*  </Form.Control>*/}
          {/*</Form.Item>*/}
          {/*<Text className={cls.FormBox__Text}>手机号</Text>*/}
          {/*<Form.Item*/}
          {/*  name="phone"*/}
          {/*  className={`${cls.FormBox__Item}`}*/}
          {/*  rules={[{ required: true, message: "请输入手机号" }]}*/}
          {/*>*/}
          {/*  <Form.Control>*/}
          {/*    <Input placeholder="" />*/}
          {/*  </Form.Control>*/}
          {/*</Form.Item>*/}
          {/*<Text className={cls.FormBox__Text}>密码</Text>*/}
          {/*<Form.Item*/}
          {/*  name="password"*/}
          {/*  className={`${cls.FormBox__Item}`}*/}
          {/*  rules={[{ required: true, message: "请输入密码" }]}*/}
          {/*>*/}
          {/*  <Form.Control>*/}
          {/*    <Input password placeholder="" />*/}
          {/*  </Form.Control>*/}
          {/*</Form.Item>*/}
          {/*<Text className={cls.FormBox__Text}>请再次输入密码</Text>*/}
          {/*<Form.Item*/}
          {/*  name="password_again"*/}
          {/*  className={`${cls.FormBox__Item}`}*/}
          {/*  rules={[{ required: true, message: "请再次输入密码" }]}*/}
          {/*>*/}
          {/*  <Form.Control>*/}
          {/*    <Input password placeholder="" />*/}
          {/*  </Form.Control>*/}
          {/*</Form.Item>*/}
          <Button
            round={true}
            block
            color="primary"
            formType="submit"
            className={`${cls.FormBox__Button}`}
          >
            注册并登录
          </Button>
        </Form>
      </View>{' '}
      <View className={cls.Register}>
        <Text>已有账号？</Text>
        <Text
          className={cls.Register__Text}
          onClick={() => {
            Taro.navigateTo({
              url: '/pages/Passport/Login',
            })
          }}
        >
          返回登录
        </Text>
      </View>
    </View>
  )
}

export default Register

import Taro, {
  getStorageSync,
  removeStorageSync,
  setStorageSync,
} from "@tarojs/taro";
import request from "../../base/api/index";

export interface IUserInfo {
  id: number;
  username: string;
  email?: string;
  phone?: string;
  sex?: string;
  birthday?: string;
  description?: string;
  school_id: number;
  school_name: string;
  class_id: number;
  class_name: string;
  student_id: number;
}
export interface IUser {
  isLogin: boolean;
  userInfo: IUserInfo | undefined;
  login(phone: string, password: string): Promise<string>;
  logout(): void;
  register(username: string, phone: string, password: string): Promise<string>;
}

/**
 * 当前登陆的用户类
 */
class User implements IUser {
  isLogin: boolean;
  userInfo: IUserInfo | undefined;

  constructor() {
    // 从缓存中初始化用户信息
    const storageUserInfo = getStorageSync("userInfo");
    if (!storageUserInfo) {
      this.isLogin = false;
      return;
    }
    this.isLogin = true;
    typeof storageUserInfo === "string"
      ? (this.userInfo = JSON.parse(storageUserInfo))
      : (this.userInfo = storageUserInfo);
  }

  async login(phone: string, password: string): Promise<string> {
    // TODO 这里应该调用后端接口进行登录验证
    const { data } = await request.post("/stu/studentInfo/login", {
      contact: phone,
      passport: password,
    });
    console.log(data);
    return new Promise((resolve, reject) => {
      if (data.success) {
        resolve(data.message);
        setStorageSync("userId", data.result.id);
      } else {
        reject(data.message);
      }
    });
  }

  logout(): void {
    // 登出要清除缓存
    removeStorageSync("userInfo");
    this.userInfo = undefined;
  }
  async register(
    username: string,
    phone: string,
    password: string
  ): Promise<string> {
    console.log(username, phone, password);

    const { data } = await request.post("/stu/studentInfo/add", {
      passport: password,
      contact: phone,
      studentName: username,
    });
    console.log(data);
    return new Promise((resolve, reject) => {
      if (data.success) {
        resolve(data.message);
        setStorageSync("userId", data.result.id);
      } else {
        reject(data.message);
      }
    });
  }
}

export const user = new User();

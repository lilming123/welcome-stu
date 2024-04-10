import { generateUuid } from "./uuid";

export type cmdType = (type: string, cmd: string, ...args: any[]) => any;

/**
 * 全局的事件发射器
 * 使用场景：
 * 1. 当使用导出的类时（重新创建一个实例）可以看作带标识符的事件发射器
 * 2. 当使用导出的实例（全局仅一个）时，用于全局的事件订阅和全局事件监听，比如发送一条消息、打开一个弹窗等
 */
export class Command {
  private callbacks: { [id: string]: cmdType };
  private flagCallbacks: { [id: string]: cmdType };
  constructor() {
    this.callbacks = {};
    this.flagCallbacks = {};
  }

  /**
   * @desc 订阅变更
   * @param callback 变更回调
   * @returns 订阅ID
   */
  public subscribe(callback: cmdType): string {
    const id = generateUuid();
    if (callback) {
      this.callbacks[id] = callback;
    }
    return id;
  }

  /**
   * @desc 取消订阅 支持取消多个
   * @param id 订阅ID
   */
  public unsubscribe(id: string | string[]): void {
    if (typeof id == "string") {
      delete this.callbacks[id];
    } else {
      id.forEach((eachId: string) => {
        delete this.callbacks[eachId];
      });
    }
  }
  /**
   * @desc 发送命令
   * @param type 类型,目前支持,config、data
   * @param cmd 命令
   * @param args 参数
   */
  public emitter(type: string, cmd: string, ...args: any[]): void {
    Object.keys(this.callbacks).forEach((key) => {
      this.callbacks[key].apply(this, [type, cmd, ...args]);
    });
  }

  /**
   * @desc 根据标识订阅变更
   * @param flag
   * @param callback 变更回调
   * @returns 订阅ID
   */
  public subscribeByFlag(flag: string, callback: cmdType): string {
    const id = generateUuid();
    if (callback) {
      this.flagCallbacks[`${id}-${flag}`] = callback;
    }
    return id;
  }

  /**
   * @desc 取消标识订阅
   * @param id 订阅ID
   */
  public unsubscribeByFlag(id: string): void {
    const ids = Object.keys(this.flagCallbacks).filter((i) =>
      i.startsWith(`${id}-`)
    );
    ids.forEach((id: string) => {
      delete this.callbacks[id];
    });
  }
  /**
   * @desc 发送命令
   * @param flag
   * @param args 参数
   */
  public emitterFlag(flag: string = "", ...args: any[]): void {
    Object.keys(this.flagCallbacks).forEach((id) => {
      if (flag === "" || id.endsWith(`-${flag}`)) {
        this.flagCallbacks[id].apply(this, [...args]);
      }
    });
  }
}

export const command = new Command();

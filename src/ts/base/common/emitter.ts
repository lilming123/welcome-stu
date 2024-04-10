import { generateUuid } from "./uuid";

/**
 *  事件发射器
 *  使用场景：需要在多个组件中触发同一个事件，但是不希望在每个组件都去写一遍触发事件的逻辑
 *  用法：在需要触发事件的组件中，创建一个Emitter实例，然后通过subscribe方法订阅事件，并在需要触发事件的地方调用changCallback方法触发订阅的回调函数
 *  注意：Emitter实例需要在每个组件中创建，并且需要手动调用unsubscribe方法来取消订阅防止内存泄露，比如useEffect中的return
 */
export class Emitter {
  private _refreshCallback: {
    [name: string]: (key: string, ...args: any[]) => void;
  };
  private _partRefreshCallback: {
    [name: string]: { [p: string]: (key: string) => void };
  };
  constructor() {
    this._refreshCallback = {};
    this._partRefreshCallback = {};
  }
  /**
   * @desc 订阅变更
   * @param callback 变更回调
   * @param target 订阅时是否触发，默认为true
   * @returns 订阅ID
   */
  public subscribe(
    callback: (key: string, ...args: any[]) => void,
    target: boolean = true
  ): string {
    const id = generateUuid();
    if (callback) {
      if (target === true) {
        callback.apply(this, [id]);
      }
      this._refreshCallback[id] = callback;
    }
    return id;
  }

  /**
   * @desc 取消订阅 支持取消多个
   * @param key 订阅ID
   */
  public unsubscribe(key: string | string[]): void {
    if (typeof key == "string") {
      delete this._refreshCallback[key];
      delete this._partRefreshCallback[key];
    } else {
      key.forEach((id: string) => {
        delete this._refreshCallback[id];
        delete this._partRefreshCallback[id];
      });
    }
  }

  /**
   * @desc 变更回调
   */
  public changCallback(...args: any[]) {
    Object.keys(this._refreshCallback).forEach((key) => {
      this._refreshCallback[key].apply(this, [generateUuid(), ...args]);
    });
  }

  /** 清空所有订阅 */
  public cleanAll(): void {
    this._refreshCallback = {};
    this._partRefreshCallback = {};
  }
}

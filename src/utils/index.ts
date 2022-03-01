// 未知方法
export type AnyFunction = (...args: any[]) => any

/**
 * @method debounce
 * @description 防抖行数
 * @param fn 执行函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
 export const debounce = (fn: AnyFunction, wait: number, immediate = false): AnyFunction => {
  let timeout: number | null, result: AnyFunction

  return function (this: unknown, ...args) {
    if (timeout) clearTimeout(timeout)

    if (immediate) {
      const callNow = !timeout
      timeout = window.setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) result = fn.apply(this, args)
    } else {
      timeout = window.setTimeout(() => {
        result = fn.apply(this, args)
      }, wait)
    }

    return result
  }
}

/**
 * @method throttle
 * @description 节流
 * @param fn 执行函数
 * @param wait 延迟执行毫秒数
 */
export const throttle = (fn: AnyFunction, wait: number): AnyFunction => {
  let pre = 0

  return function (this: unknown, ...args) {
    const now = Date.now()
    if (now - pre >= wait) {
      fn.apply(this, args)
      pre = Date.now()
    }
  }
}
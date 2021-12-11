export function Emoji() {
  // target 是注解的目标对象，此处即为组件; key 是应用注解的变量，此处为 result
  return (target: object, key: string) => {
    // 取目标对象里面的属性
    let val = target[key];

     const getter = () => {
       return val;
     }

     const setter = (value: string) => {
      console.log('更新表情');
       val = `😂 ${value} 😄`
     }

     // 附加到原来对象上
     Object.defineProperty(target, key, {
       get: getter,
       set: setter,
       enumerable: true,
       configurable: true
     })
  }
}

export function Confirmable(message: string) {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    // 先把注解修饰的函数赋给一个变量
    const original = descriptor.value;
    // 然后替换成下面的函数
    descriptor.value = function(...args: any[]) {
      // 执行弹出对话框
      const allow = window.confirm(message);
      // 如果确认则执行原有函数逻辑
      if (allow) {
        const result = original.apply(this, args);
        return result;
      }
      return null;
    }
    return descriptor;
  }
}

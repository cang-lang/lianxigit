let test = {
  name: "小红",age:18
};
test = new Proxy(test, {
  get(target, key) {
    // console.log('获取了getter属性',target,key,target[key]);
    return target[key];
  }
});
// console.log(test.name);


let xiaohong = {
  name: "小红",
  age: 15,
  sex:'女'
};
xiaohong = new Proxy(xiaohong, {
  get(target, key) {
    let result = target[key];
    //如果是获取 年龄 属性，则添加 岁字
    if (key === "age") result += "岁";
    return result;
  },
  set(target, key, value) {
    if (key === "age" && typeof value !== "number") {
      throw Error("age字段必须为Number类型");
    }
    return Reflect.set(target, key, value);
  }
});
// console.log(`我叫${xiaohong.name}  我今年${xiaohong.age}了 我是${xiaohong.sex}生`);
xiaohong.age = 21;


let obj = { foo: 123 };
// let obj = [1,2];
// let obj = '1111';
// console.log(Object.getOwnPropertyDescriptor(obj, 'length'))
//  {
//    value: 123,
//    writable: true,     是否可修改
//    enumerable: true,   是否可枚举
//    configurable: true  是否可配置
//  }
obj.name = 5

Object.defineProperty(obj,'foo',{
  value:6,
  writable:false,
  enumerable: false,   
  configurable: false  
})

obj.name = 9
delete obj.foo
console.log(obj.foo)

// // computed   c不能重复在data中命名，依赖data中的a,b,所依赖的ab，必须要有setter，getter响应的数据(即在data中定义了)，才会重新计算
// computed:{
//   // 
//   c:{
//     get(){
//       return Number(this.a) + Number(this.b)
//     },
//     //一般情况下用到get获取数据就行了，同时用到get和set的时候，只适用于支持v-modlule 计算属性必须要有get，可以没有set。
//     // set(){
//     //   Number(this.a) + Number(this.b)
//     // }
//   }
// }
// // watch监听 监听的是data中的属性值
//  watch:{
//   val:{
//     //默认监控对象的时候，里面的属性发生改变是监控不到的，因为监控的是对象的地址值
//     //如果想监控到属性的改变就加deep属性  
//     handler(newVal,oldVal){
//       console.log(newVal,oldVal)
//     },
//     // 此属性表示第一次执行一次，只传第一个参数，就是当前值
//     immediate:true,
//     //深度监控
//     deep:true
//   }
//  }


//vue 自带的标签
// component
// transition
// transition-group
// keep-alive
// slot
{/* <keep-alive>  //keep-alive 相当于缓存
  <component :is="abc"></component>
 </keep-alive> 
  动态组件
<transition name="fade" mode="out-in" appear>
  <component :is="view"></component>
</transition>
<transition-group tag="ul" name="slide">
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
</transition-group> */}

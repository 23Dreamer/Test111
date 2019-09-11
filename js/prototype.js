// import { type } from "os";

// var A = function(arg){
//   this.arg = arg;
// }
// A.prototype.addArg = function(newArg){
//   this.arg +=newArg;
//   console.log(this.arg)
// }

// Object.prototype.c = function(){
//   console.log('prototype')
// }
// var a  = new A(10);
// a.addArg(100)
// console.log(A.c())

// 先一本正经的创建一个构造函数，其实该函数与普通函数并无区别
// var Person = function(name, age) {
//   this.name = name;
//   this.age = age;
//   this.getName = function() {
//       return this.name;
//   }
// }

// // 将构造函数以参数形式传入
// function New(func) {

//   // 声明一个中间对象，该对象为最终返回的实例
//   var res = {};
//   if (func.prototype !== null) {

//       // 将实例的原型指向构造函数的原型
//       res.__proto__ = func.prototype;
//   }

//   // ret为构造函数执行的结果，这里通过apply，将构造函数内部的this指向修改为指向res，即为实例对象
//   var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));

//   // 当我们在构造函数中明确指定了返回对象时，那么new的执行结果就是该返回对象
//   if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
//       return ret;
//   }

//   // 如果没有明确指定返回对象，则默认返回res，这个res就是实例对象
//   return res;
// }

// // 通过new声明创建实例，这里的p1，实际接收的正是new中返回的res
// var p1 = New(Person, 'tom', 20);
// console.log(p1.getName());

// // 当然，这里也可以判断出实例的类型了
// console.log(p1 instanceof Person); // true

// Person.prototype.getName = function(){

// }

// Person.prototype.getAge = function(){

// }

// Person.prototype = {
//   constructor:Person,
//   getName:function(){

//   },
//   getAge:function(){

//   }
// }

// let data = [1,2,3,4,5,6,7,8]
// let sum = data.reduce((pre,cur)=>{
//   return pre+cur
// },0);
// console.log(sum)

// var pattern1 =/at/g;
// var a = 'a some moment';
// console.log(pattern1.test(a))

// var pattren2 = /[bc]at/i;
// var a = 'sdfs Cat ddfd';
// console.log(pattren2.test(a))

// var pattern1 = /[bc]at/i;
// var pattren2 = new RegExp("[bc]at","i");

// var text = 'mom and dad and baby';
// var pattren = /mom( and dad( and baby)?)?/gi;
// var matches = pattren.exec(text);
// console.log(matches)

// function test(){
//   for(let i=0;i<10;i++){
//     console.log(i)
//   }
//   console.log(i)
// }
// test()

// function fun(a=10,b=1){
//   console.log(a,b)
// }
// fun(9,90)

// let data = {
//   title:'kangfan',
//   des:[{
//     title:'xiaojiejie'
//   }]
// }

// let {title:myTitle,des:[{title:your}]} = data;
// console.log(myTitle,your)

// {
//   let a=20;
//   let b = {
//     value:'1'
//   }
//   b.dd = '2';
//   console.log('a',b);

// }

// test(1,2,3,4,5,6,7,8,9);
// function test(a,b,...more){
//   console.log('more',...more);

// }

// let obj = {
//   a:1,
//   b:2,
//   c:3,
//   d:4
// }
// let {a,...more} = obj;
// console.log('a',a);
// console.log('more',more);

// let const 箭头函数啊，解构赋值啊，class，promise，模板字符串，函数默认参数，展开运算符，modules

// function Person(name,age){
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.getName = function(){//原型方法
//   return this.name;
// }
// var person = new Person('kangfan',12);
// console.log(person.getName())

// class Person{
//   constructor(name,age){//构造函数
//     this.name = name;
//     this.age = age;
//   }

//   getName(){//原型方法
//     console.log(124)
//     return this.name;

//   }
//   getAge = () =>{
//     console.log(12233)
//   }
// }

// class Children{
//   constructor(child){
//     this.child = child;
//   }

//   getChild(){
//     console.log('child')
//     return this.child;
//   }

// }

// var person = new Person('kfanf',12)
// console.log(person.getName())
// console.log(person.getAge())

// function sum(num){
//   if(num<=1){
//     return 1;
//   }else{
//     return num*sum(num-1);
//   }
// }
// console.log(sum(4))

// function sum(num){
//   if(num<=1){
//     return 1;
//   }else{
//     return num*arguments.callee(num-1)
//   }
// }
// console.log(sum(4))

// function fish(){
//   console.log('我想吃烤鱼')
// }

// function price(){
//   console.log(`烤鱼价格78`)
// }

// function fn(fish){
//    return new Promise(function(resolve,reject){
//       if(typeof fish == 'function'){
//         resolve(fish);
//       }else{
//         reject(`不吃不吃${fish}`)
//       }
//    })
// }

// fn(fish).then(res=>{
//   fish();
// }).then(res=>{
//   price();
// });

// fn(fish).catch(error=>{
//   console.log(error);
// })

// function fn(num){
//   return new Promise((resolve,reject)=>{
//       if(typeof num == 'number'){
//         resolve()
//       }else{
//         reject();
//       }
//   })
//   .then(()=>{
//     console.log('的哈不是');

//   })
//   .then(()=>{
//     console.log('122323')
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
// }
// fn('hahah');

// var url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';

// function getJson(url){
//   return new Promise((resolve,reject)=>{
//     var xhr = new XMLHttpRequest;
//     xhr.open('GET',url,true);
//     xhr.send();

//     xhr.onreadystatechange=function(){
//       if(xhr.readyState==4){
//         if(xhr.status==20){
//           try {
//             var res = JSON.parse(xhr.responseText);
//           } catch (error) {
//             reject(error)
//           }
//         }else{
//           reject(new Error(xhr.statusText));
//         }
//       }
//     }
//   })
// }

// getJson(url).then(res=>{
//   console.log('red',res);
// })
// let a={
//   b:1,
//   c:2,
//   d:3
// }
// let b = {};
// waitExecuteData = [
//   {
//     code:'1',
//     name:'12323'
//   },
//   {
//     code:'2',
//     name:'12323'
//   },
//   {
//     code:'3',
//     name:'12323'
//   },
//   {
//     code:'4',
//     name:'12323'
//   },
// ]
// scanLabelList = ['1','2']
// waitExecuteData = waitExecuteData.filter(item=>{
//   return scanLabelList.includes(item.code);
// })
// console.log('waitExecuteData',waitExecuteData);

// var name = 'window';
// var obj = {
//   name:'obj',
//   say:function(){
//     return function(){
//       return this.name;
//     }
//   }
// }
// console.log('this.name',obj.say()());
// var name = 'window';
// var obj = {
//   name:'obj',
//   say:function(){
//       return this.name;
//   }
// }
// console.log('this.name',obj.say());

// const a = 2;
// export default{
//   a
// }
// export const b = `sdjlsjl`;
// import {b} from ''
// import * as test from ''
// function fn (){
//   // setTimeout(() => {
//   //   console.log('this',this);
//   // }, 1000);
//   setTimeout(function(){
//     console.log('this',this);
//   },100)
// }
// fn()
// let a = 2;
// function Person(){
//   this.a = 1;
//   // setTimeout(() => {
//   //   console.log('a',this.a);
//   // }, 1000);
//   setTimeout(function(){
//     console.log('a',this.a);
//   }, 1000);
// }
// let person = new Person();

// 在原型上面添加方法，可以实现共享。并且减少每次实例化一个对象的时候，Person里面生成一个函数。
// function Person(name,age){
//   this.name = name;
//   this.age = age;
//   this.setHabiit=function(){
//     console.log('wxhdk')
//   }
// }

// Person.prototype.setSex = function(){
//   console.log(`i am a boy`)
// }
// let p = new Person('xiaogege',25)
// p.setSex();
// p.setHabiit();

// let ovj = {
//   A:'12',
//   v:'2332'
// }
// let b ={
//   b:23
// }

// ovj = {...ovj,b}

// document.getElementById('')
// let userName = window.localStorage.getItem('userName');
// if(userName){
//   document.getElementById('name').value = userName;
//   document.getElementById('pwd').focus();
// }else{
//   document.getElementById('name').focus();
// }

// let isRemenber = document.getElementById('isRemenber');
// let name = document.getElementById('userName').value;
// document.getElementById('submit').onclick = function(){
//   if(isRemenber.checked==true){
//     window.localStorage.setItem('userName',name)
//   }else{
//     window.localStorage.removeItem('userName')
//   }
// }

// let arr = [{x:1,y:2},{x:2,y:3},{x:33,y:12}]
// let a = arr.map(item=>{
//   return item.x
// })
// console.log(a)

// let xydata = arr.reduce((pre,cur)=>{
//   pre.x.push(cur.x)
//   pre.y.push(cur.y)
//   return pre;
// },{x:[],y:[]})
// console.log(xydata.x)

// result:{
//   chartData:[
//     {xdata:'2012年',ydata:"329"},
//     {xdata:'2013年',ydata:"329"},
//     {xdata:'2014年',ydata:"329"},
//     {xdata:'2016年',ydata:"329"},
//   ],
//   hasNextPage:true,
//   hasPrePage:true
// }

// var obj = new Object();
// Object.defineProperties(obj, {
//     name: {
//         value: '张三',
//         configurable: false,
//         writable: true,
//         enumerable: true
//     },
//     age: {
//         value: 18,
//         configurable: true
//     }
// })
// console.log(obj)

// function Person(name,age,obj){
//   this.name = name;
//   this.age = age;
//   this.obj = obj;
//   this.sayName = function(){
//     console.log('my name is ',this.name);
//   }
// }

// Person.prototype.setAdd = function(){
//   console.log('12334')
// }
// Person.prototype.sex= 'male';
// let p1 = new Person('kang','123','it');
// // p1.sayName()
// p1.setAdd()
// console.log(p1.constructor==Person)

// console.log(p1.hasOwnProperty('sex'));

//近十年增添趋势分析，饼图
//  result:{
//   chartData: {
//     series:[
//       {value:2, name:'调入2%'},
//       {value:3, name:'捐赠3%'},
//       {value:10, name:'租用4%'},
//       {value:45, name:'其他43%'},
//       {value:40, name:'购置32%'}
//     ],
//   },

//  }

//  //设备使用情况分析，饼图
//  result:{
//   chartData: {
//     series: [{
//       "name": "报废中",
//       "value": 20
//     }, {
//       "name": "保修中",
//       "value": 20
//     }, {
//       "name": "未用在库",
//       "value": 20
//     }, {
//       "name": "科室在用",
//       "value": 40
//     }],
//     '设备总量':'2323'
//   }
//  }

//  //设备闲着情况分析,柱状图
//  result:{
//   chartData: {
//     series: [
//       {
//         "name":'血压计',
//         "value":'12'
//       },
//       {
//         "name":'移动推车',
//         "value":'12'
//       },
//       {
//         "name":'洁牙仪',
//         "value":'12'
//       },
//     ],
//     hasPrePage:false,
//     hasNextPage:false,
//     currentPage:1,
//  }

//  //设备闲着情况分析,闲着金额分析，饼图
//  result:{
//   chartData: {
//     series: [{
//       "name": "10万以上",
//       "value": 20
//     }, {
//       "name": "5万-10万",
//       "value": 20
//     }, {
//       "name": "2万-5万",
//       "value": 20
//     }, {
//       "name": "1万-2万",
//       "value": 40
//     }, {
//       "name": "1万以下",
//       "value": 40
//     }]，
//     '未用在库':'￥232332'
//  }

//  //维修费用分析
//  result:{
//   chartData:[
//     {xdata:'1月',ydata:"329"},
//     {xdata:'2月',ydata:"329"},
//     {xdata:'3月',ydata:"329"},
//     {xdata:'4月',ydata:"329"},
//     {xdata:'5月',ydata:"329"},
//   ],
//   hasNextPage:true,
//   hasPrePage:true
// }

//  //维修设备分析
//  result:{
//   chartData:{
//     series: [
//       {
//         "name":'血压计',
//         "money":'12',
//         "num":'12'
//       },
//       {
//         "name":'移动推车',
//         "money":'12',
//         "num":'12'
//       },
//       {
//         "name":'洁牙仪',
//         "money":'12',
//         "num":'12'
//       },
//     ],
//     hasNextPage:true,
//     hasPrePage:true
//   }
// }

//箭头函数的this，普通函数this的区别
//1.普通函数的this，指向他的直接调用者
//2.当没有直接调用者时，this指向window。
//3.在严格模式下，this指向undefined
//4.可以使用call，apply，bind修改this的指向，this指向的是绑定的对象

//箭头函数自身没有this，箭头函数的this指向其上下文的this。任何方法都改变不了this的指向

// function test(a,b,c){
//   console.log(arguments)
// }
// let a = (...args)=>{
//   console.log(args)
// }
// // test(1,2,3)
// a(1,2)
// console.log('====================================');
// console.log('');
// console.log('====================================');

// var a = [];
// for(var i=0;i<101;i++){
//   a.push(i);
// }
// let panigationData=[];
// let currentPage=5;
// let pageSize = 20;
// let datas = [];
// //总共多少页
// let total = Math.ceil(a.length/pageSize);//向上取整,有小数就整数部分加1
// //分页数据
// datas = a.filter((item,index)=>{
//   return index<currentPage*pageSize&&index>(currentPage-1)*pageSize-1;
// })
// console.log(datas)
// //当前选中的数据信息
// let selectIndex = a.find((item,index)=>{
//   if(item==23){
//     return index;
//   }
// })

/***************原型链 ************/
// function SuperType(){
//   this.property= true;
// }

// SuperType.prototype.getSuperValue = function(){
//   return this.property;
// }

// function SubType(){
//   this.subProperty = false;
// }

// SubType.prototype = new SuperType();

// SubType.prototype.getSubValue = function(){
//   return this.subProperty;
// }

// var instance = new SubType();
// alert(instance.getSuperValue());

/*******************Object.assign() */
// let obj1 = {a:1,b:2};
// let obj2 = {b:3,c:23};
// const a = Object.assign(obj1,obj2);
// console.log('a',obj1);

// let obj = {a:1,b:2,c:3};
// Object.keys(obj).forEach(key=>{
//   console.log('obj',obj[key]);
// })

// console.log(Object.values(obj))

// let a = [1,2,34]
// let b = [12,3,2,32]
// console.log(Array.from(new Set( [...a,...b])) )

// function count() {
//   var arr = [];
//   for (var i=1; i<=3; i++) {
//       arr.push(function () {
//           return i * i;
//       });
//   }
//   return arr;
// }

// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
// console.log(f1()) ; // 16
// console.log(f2()) ; // 16
// console.log(f3()) ; // 16

// let arr = [1,3,43,2,32];
// arr.sort(function(x,y){
//   if(x<y){
//     return -1;
//   }
//   if(x>y){
//     return 1;
//   }
//   return 0;
// })
// console.log(arr)

// let arr1 = ['apple','orange','eggs','banana'];
// arr1.sort(function(x,y){
//   x = x.toLocaleUpperCase();
//   y = y.toLocaleUpperCase();
//   if(x<y){
//     return -1;
//   }
//   if(x>y){
//     return 1;
//   }
//   return 0;
// })
// console.log('arr1',arr1);

// function Person(name){
//   this.name = name;
// }
// //在原型上面写公用的方法，节省内存
// Person.prototype.say = function(){
//   return this.name;
// }
// let p1 = new Person('value');
// let p2 = new Person('key');
// console.log('p1',p1.name);
// console.log('p2',p2.name);

// class Person{
//   constructor(name){
//       this.name = name;
//   }
//   say(){
//     return this.name;
//   }
// }

// class Student extends Person{
//   constructor(name,age){
//     super(name);
//     this.age = age;
//   }
// }
// let p = new Student('as','23')
// console.log(p.say())
// console.log(p.age)

let i = 0;
const poll = async (checkStatus, callback) => {
  let time = 1000,
    res = checkStatus();
  const timer = () =>
    new Promise(resolve => {
      setTimeout(() => {
        res = checkStatus();
        console.log(time);
        resolve();
      }, time);
    });

  for (;;) {
    if (!res) {
      await timer();
      time = time * 1.5;
    } else {
      callback();
      return;
    }
  }
};
const checkStatus = () => {
  i += 1;
  return i >= 5 ? true : false;
};
const callback = () => console.log("done");

poll(checkStatus, callback);

// Date.parse('2019-03-01')//返回时间戳

// null undefined boolean string number symbol //原始、基本数据类型存储的是数值，是没有函数可调用的
// 对象类型存储的是指针

// function test(person) {
//   person.age = 26
//   person = {
//     name: 'yyy',
//     age: 30
//   }

//   return person
// }
// const p1 = {
//   name: 'yck',
//   age: 25
// }
// const p2 = test(p1)
// console.log(p1) // -> ?
// console.log(p2) // -> ?

// let num=0,max = 10;
// function timeOut(){
//   num++;
//   if(num<max){
//     setTimeout(() => {
//       timeOut();
//     }, 500);
//     console.log(num)
//   }else{
//     console.log('done')
//   }
// }
// setTimeout(() => {
//   timeOut()
// }, 500);

//组合继承,在继承父类函数的时候调用了父类构造函数，导致子类的原型上多了不需要的父类属性，存在内存上的浪费
// function Parent(dad){
//   this.dad = dad;
// }
// Parent.prototype.house = function(){
//   console.log('this is dad’s house',this.dad)
// }
// function Children(value){
//   Parent.call(this,value)
// }
// Children.prototype = new Parent();
// const child = new Children('lisa');
// child.house();

//寄生组合继承
// Children.prototype = Object.create(Parent.prototype,{
//   constructor:{
//     value: Children,
//     enumerable: false,
//     writable: true,
//     configurable: true
//   }
// })

//class继承
// class Parent{
//   constructor(value){
//     this.value = value;
//   }
//   getName(){
//     console.log(this.value)
//   }
// }

// class Child extends Parent{
//   constructor(props){
//     super(props)
//   }
// }

// new Set([1,2,3,4])//类似于数组，但是值都是唯一的

// let promise = new Promise((resolved,reject)=>{
//   resolved();
// })

// promise.then(function(){

// },function(){

// }).catch(error=>{

// })

//axios Promise
// 请求拦截
// axios.intercptors.request.use((config)=>{
//   config.headers["sid"] = store.state.basic.userInfo.sid;
//   config.headers["st"] = store.state.basic.userInfo.token;
//   return config;
// },error=>{
//   return Promise.reject(error)
// })
// // 响应拦截
// axios.intercptors.response.use((response)=>{
//   if(response.status==200){
//     return Promise.resolve(response);
//   }else{
//     return Promise.reject(response);
//   }
//   },error=>{
//     return Promise.reject(error);
// })

// export function get(url,params){
//   return new Promise((resolve,reject)=>{
//     axios.get(url,{
//       params
//     }).then(res=>{
//       resolve(res?res.data:res)
//     }) .catch(error=>{
//       reject(error)
//     })
//   })
// }

// export function post(url,params){
//   return new Promise((resolve,reject)=>{
//     axios.post(url, {
//       params: params
//     }).then(res=>{
//       resolve(res?res.data:res);
//     }).catch(error=>{
//       reject(error);
//     })
//   })
// }

// axios.intercptors.request.use(config=>{
//   // config['sid']=?
//   // config['token']=?
//   return config;
// },error=>{
//   return Promise.reject(error)
// })

// axios.intercptors.response.use(response=>{
//   if(response.state==200){
//     return Promise.resolve(response)
//   }else{
//     return Promise.reject(response)
//   }
// },error=>{
//   return Promise.reject(error)
// })

// export function post(url,params){
//   return new Promise((resolve,reject)=>{
//     axios.post(url,{
//         params
//       }).then(res=>{
//         resolve(res?res.data:data);
//       }).catch(error=>{
//         reject(error);
//       })
//   })
// }

// const post = asy
// n(data => console.log(data)).catch(err=>console.log(err,123));.



// [...Array(7).keys()].map(days=>{
//   return new Date(Date.now()-86400000*days);
// })

// let day = new Date();

// let keli = (arg,function(){
//   return arg;
// })

// function keli(arg){
//   return function(b){
//     return arg+b;
//   }
// }

// keli(2)(3)

// let a = [
//   {
//     'mainCode':"1",
//     'xm':"zajsdf"
//   },
//   {
//     'mainCode':"3",
//     'xm':"dsgsgds"
//   },
//   {
//     'mainCode':"4",
//     'xm':"zaj45545sdf"
//   }
// ]
// let b = [
//   {
//     'mainCode':"4",
//     'xm':"zaj45545sdf"
//   }
// ];
// let c = a.map(ele=>{
//   const {mainCode:code} = ele;
//   return {code} 
// });
// console.log('44444444444444',c)

let data = [
  {name:'1'},
  {name:'2'},
  {name:'1'},
  {name:'2'},
]

// var obj = {};
// data = data.reduce(function(item, next) {
//        obj[next.name] ? '' : obj[next.name] = true && item.push(next);
//        return item;
//    }, []);
// console.log(data)
// const arrayToCSV = (arr, delimiter = ',') =>
//   arr
//     .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    
    
// console.log(arrayToCSV([['a', 'b'], ['c', 'd']])) ; 

// const bifurcate = (arr, filter) =>
//   arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

//   bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); 

// const bifurcateBy = (arr, fn) =>
//   arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

//  console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b')) ; // [ ['beep', 'boop', 'bar'], ['foo'] ]

//  const chunk = (arr, size) =>
//   Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
//     arr.slice(i * size, i * size + size)
//   );
//   console.log(chunk([1, 2, 3, 4, 5], 2)) ;

// let a = 1;
// console.log('a',Number.isFinite(a));
// Math.trunc(2.4)

// const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);
// const isArray = isType('String');
// console.log('type is ',isArray('123'));

// if(!Array.prototype.first){
//   Array.prototype.first = function(){
//     return this[0];
//   }
// }

// Object.prototype.toString.call(obj);
//   let calculate = (Arr)=>{
//     return Arr.map(element => {
//        return Math.pow(element,2);
//     });
//   }
// console.log('a([1,2])',calculate([1,2,3,4])); 

// function Person(name){
//   this.name = name;
// }
// let p = new Person('zhang');


// class Person{
//   constructor(name,sex){
//     this.name = name;
//     this.sex = sex;
//   }

//   getSex(){
//     return this.sex;
//   }

//   set age(age){
//     this.age = age;
//   }

//   get age(){
//     return this.age;
//   }
// }

// Person.prototype = {
//   constructor(name,sex){
//     this.name = name;
//     this.sex = sex;
//   },
//   getSex(){
//     return this.sex;
//   }
// }

// let p = new Person('erhao','male');
// console.log('p.getSex()',p.getSex());
// console.log(p.constructor == Person.prototype.constructor); 
// console.log( Person.prototype.constructor==Person); 
// console.log( p.constructor==Person); 
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   static classMethod(){
//     console.log('hello world!');
//   }

//   sayName =()=> {
//     console.log(this.name);
//   }
// }('张三');

//  // "张三"

// console.log('22222222222',Person.classMethod()); 

// class Foo{
//   static classMethod(){
//     return 'hello';
//   }
// }

// class Bar extends Foo{
//   constructor(){
//     super();
//   }
//   static method(){
//     return super.classMethod()+',too';
//   }
// }

// let bar = new Bar();
// console.log('---',Object.getPrototypeOf(Bar) === Foo);


let Counter = (function(){
  let count = 0;
  function increment(){
    return count++;
  }
  return{
    inp:function(){
      return increment();
    }
  }
})();


console.log('Counter.inp()',Counter.inp());

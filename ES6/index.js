// 1、基本
// import {myName,myAge,myFn} from './export.js';
// console.log(myName);
// console.log(myAge);
// console.log(myFn());

// 2、如果不想暴露名字
// import {aa} from './export.js'
// console.log(aa)

// 2、也可以直接导入整个模块
// import * as info from './export.js';
// console.log(info.aa)


// 3、默认导入
// import myObj from './export.js';
// console.log(myObj.name);
// console.log(myObj.nameFn());

// 4、混合导入
// import myObj,{age} from './export.js';
// console.log(myObj.nameFn(),myObj.name);
// console.log(age)

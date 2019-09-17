/* var Mock = require('mockjs')
var data = Mock.mock({
// 测试
  'list|1-20': [
    {
      'id|+1': 1
    }
  ]
})
console.log(data)   /*  mock DTD '属性名|规则':  起始属性值 */

/* 第二种  Mock.mock(url,template)*/
 var Mock = require('mockjs')
import data from './data'
Mock.mock('/seller', { errno: 0, data: data.seller })
Mock.mock('/goods', { errno: 0, data: data.goods })
Mock.mock('/ratings', { errno: 0, data: data.ratings }) 

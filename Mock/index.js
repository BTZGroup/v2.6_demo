const Mock = require('mockjs')

// Mock.mock('/api/user/v2/login','post', {
//   'data|1-2':[{
//     'title':'@title',
//     'article':'@csentence'
//     }]
// })

Mock.mock('/api/user/v2/login','post', require('./user/userInfo.json'))
'use strict';

exports.initData = () => {
  const data = {
    car: [{
      id: 1,
      manufacturers: '宝马',
      model: '3系',
      color: '黑色',
      owner_price: '20万'
    }, {
        id: 2,
        manufacturers: '宝马',
        model: 'X3',
        color: '白色',
        owner_price: '40万'
    }, {
      iid: 3,
      manufacturers: '奥迪',
      model: 'A5',
      color: '黑色',
      owner_price: '20万'
    }, {
        id: 4,
        manufacturers: '特斯拉',
        model: '3系',
        color: '红色',
        owner_price: '50万'
    }, {
        id: 5,
        manufacturers: '本田',
        model: '5系',
        color: '黄色',
        owner_price: '20万'
    }, {
        id: 6,
        manufacturers: '丰田',
        model: '4系',
        color: '白色',
        owner_price: '10万'
    }, {
        id: 7,
        manufacturers: '马自达',
        model: 'x1',
        color: '黑色',
        owner_price: '10万'
    }, {
        id: 8,
        manufacturers: '大众',
        model: '1系',
        color: '红色',
        owner_price: '13万'
    }, {
        id: 9,
        manufacturers: '路虎',
        model: '6',
        color: '黑色',
        owner_price: '60万'
    }, {
        id: 10,
        manufacturers: '奔驰',
        model: '5',
        color: '白色',
        owner_price: '70万'
    }, {
        id: 11,
        manufacturers: '一汽',
        model: '2系',
        color: '绿色',
        owner_price: '10万'
    }, {
        id: 12,
        manufacturers: '奥迪',
        model: 'A6',
        color: '红色',
        owner_price: '30万'
    }, {
        id: 13,
        manufacturers: '奥迪',
        model: 'A6',
        color: '黑色',
        owner_price: '30万'
    }, {
        id: 14,
        manufacturers: '奔驰',
        model: '6',
        color: '白色',
        owner_price: '80万'
    }, {
        id: 15,
        manufacturers: '北京现代',
        model: '1',
        color: '白色',
        owner_price: '18万'
    }]
  };
  return data;
};

// exports.getPage = (pageIndex = 1, pageSize = 20) => {
//   const data = exports.initData();
//   const total = data.list.length;
//   const start = (pageIndex - 1) * pageSize;
//   const end = start + Number(pageSize);
//   return {
//     list: data.list.slice(start, end),
//     total
//   };
// };

// exports.getDetail = id => {
//   const data = exports.initData();
//   return data.list.find(item => {
//     return item.id === id;
//   });
// };
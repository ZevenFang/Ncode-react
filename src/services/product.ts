/*
export function queryProductList() {
  return fetch('/api/products').then(res => res.json());
}
*/
let data = [
  { id: 1, name: 'dva' },
  { id: 2, name: 'antd' },
];

// 先用 setTimeout 模拟一个请求，正常的写法如上所示
export function queryProductList(params = { pageSize: 10, current: 1 }) {
  console.log(`pageSize: ${params.pageSize}, current: ${params.current}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data });
    }, 2000);
  });
}

export function removeProducts(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data = data.filter((v) => v.id !== id);
      resolve(true);
    }, 2000);
  });
}

// fetch封装
export async function http(options) {
    let { method, url, params, data } = options;
    
    // params处理成key=value&key1=value1的形式
    if(params) {
      // 固定写法：
      let str = new URLSearchParams(params).toString();
      
      url += '?' + str;
    }
    
    let res;
    
    // 对于有data（请求体）的请求，需要写完整的headers...；如果没有data，不需要设置headers，直接发送
    if(data) {
      res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json' // 针对请求体数据格式为json的情况
        },
        body: JSON.stringify(data)
      })
    } else {
      res = await fetch(url);
    }
    
    return res.json();
  }
import request from '../utils/request';

export function getUser() {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json; charset=utf-8')
    let data = {uid: 1011}
    let body = `uid=${data.uid}`
    
    const init = {
        method: 'POST',
        headers: initHeaders,
        body: JSON.stringify(data)
        
    }
    // if (params) {
    //     let paramsArray = [];
    //     //拼接参数
    //     Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    //     if (url.search(/\?/) === -1) {
    //         url += '?' + paramsArray.join('&')
    //     } else {
    //         url += '&' + paramsArray.join('&')
    //     }
    // }

    const qData = request('/api/users', init);

    return qData;
}

import request from '../utils/request';

export function queryData(payload) {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json; charset=utf-8')
    
    const init = {
        method: 'POST',
        headers: initHeaders,
        body: JSON.stringify(payload)
        
    }
    const qData = request('/api/ehrHome/ehrHome', init);
    
    return qData;
}

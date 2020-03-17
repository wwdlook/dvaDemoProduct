import request from '../../utils/request';

export function queryTasks() {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json; charset=utf-8')
    
    const init = {
        method: 'POST',
        headers: initHeaders
    }
    const qData = request('/api/RecruitPlatform/Platform', init);

    return qData;
}

export function queryDetails(payload) {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json; charset=utf-8')
    console.log(payload)

    const init = {
        method: 'POST',
        headers: initHeaders,
        body: JSON.stringify(payload)
    }
    const qData = request('/api/RecruitPlatform/queryDetail', init);

    return qData;
}

export function queryRecord(payload) {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json; charset=utf-8')
    console.log(payload)

    const init = {
        method: 'POST',
        headers: initHeaders,
        body: JSON.stringify(payload)
    }
    const qData = request('/api/RecruitPlatform/queryAppointment', init);

    return qData;
}

export function queryCommentary(payload) {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json; charset=utf-8')
    console.log(payload)

    const init = {
        method: 'POST',
        headers: initHeaders,
        body: JSON.stringify(payload)
    }
    const qData = request('/api/RecruitPlatform/queryCommentary', init);

    return qData;
}

export function suggestion(payload) {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json; charset=utf-8')

    const init = {
        method: 'POST',
        headers: initHeaders,
        body: JSON.stringify(payload)
    }
    const qData = request('/api/RecruitPlatform/suggestion', init);

    return qData;
}

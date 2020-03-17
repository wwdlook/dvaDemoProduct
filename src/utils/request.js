import fetch from 'dva/fetch';

function parseJSON(response) {
  console.log(response.json());
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  console.log(error.response.json())
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  
  const response = await fetch(url, options);
  try{
    
    checkStatus(response);
    const data = await response.json();
    const status = response.status
    // const ret = {
    //   data,
    //   headers: {},
    // };
    const ret = {data, status};
    console.log(ret);
    if (response.headers.get('x-total-count')) {
      ret.headers['x-total-count'] = response.headers.get('x-total-count');
    }
    return ret;
  }catch(e){
    const status = response.status
    const data = {}
    const ret = {status,data};
    return ret
  }

  
  // return fetch(url, options)
  //   .then(checkStatus)
  //   .then(parseJSON)
  //   .then(data => ({ data }))
  //   .catch(err => ({ err }));
}
// send-request.js


export default async function sendRequest(url, method = 'GET', payload = null) {
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }
    const res = await fetch(url, options);
    // res.ok will be false if the status code set is not 2xx
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }
  
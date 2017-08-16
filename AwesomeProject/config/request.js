import axios from 'axios';
async function GET(url, query) {
  let data
  try {
    data = await axios(url, query)
    success = true
  } catch (err) {
    data = err
    success = false
  }
  return {
    ...data.data.data,
    msg: data.statusText,
    success,
    status: data.status
  }
}

async function  POST(url, params) {
  let data, success
  try {
    data = await axios(url, params)
    success = true
  } catch (err) {
    data = err,
    success = false
  }
  return {
    ...data.data.data,
    msg: data.statusText,
    success,
    status: data.status
  }
}

export {GET, POST}

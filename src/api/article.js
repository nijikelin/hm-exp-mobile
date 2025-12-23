import request from '@/utils/request'
// import { getToken } from '@/utils/storage'
export const getArticles = (obj) => {
//   const token = getToken()
  return request.get('/interview/query', {
    params: {
      current: obj.current,
      pageSize: obj.pageSize,
      sorter: obj.sorter
    }
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  })
}

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
export const getArticleDetail = (id) => {
  return request.get('interview/show', {
    params: {
      id
    }
  })
}
export const getArticleLike = (id, optType) => {
  return request.post('/interview/opt', {
    id,
    optType

  })
}
export const getArticleLikeColl = (obj) => {
  return request.get('/interview/opt/list', {
    params: {
      optType: obj.optType,
      pageSize: obj.pageSize,
      page: obj.page
    }
  })
}

import request from '@/utils/request'

export function getSubjectList (params) {
  return request({
    url: process.env.ARTICLE_API + '/subject/getList',
    method: 'post',
    data: params
  })
}

export function getSubjectItemList (params) {
  return request({
    url: process.env.ARTICLE_API + '/subject/getItemList',
    method: 'post',
    data: params
  })
}

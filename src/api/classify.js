import request from '@/utils/request'

export function getBlogSortList (params) {
  return request({
    url: process.env.ARTICLE_API + '/classify/getBlogSortList',
    method: 'get',
    params
  })
}

export function getArticleByBlogSortUid (params) {
  return request({
    url: process.env.ARTICLE_API + '/classify/getArticleByBlogSortUid',
    method: 'get',
    params
  })
}

import request from '@/utils/request'

export function getTagList (params) {
  return request({
    url: process.env.ARTICLE_API + '/tag/getTags',
    method: 'get',
    params
  })
}

export function getArticleByTagUid (params) {
  return request({
    url: process.env.ARTICLE_API + '/tag/getArticleByTagUid',
    method: 'get',
    params
  })
}

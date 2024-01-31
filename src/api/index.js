import request from '@/utils/request'

export function getBlogByLevel (params) {
  return request({
    url: process.env.ARTICLE_API + '/blog/getBlogByLevel',
    method: 'get',
    params
  })
}

export function getNewBlog (params) {
  return request({
    url: process.env.ARTICLE_API + '/blog/getNewBlog',
    method: 'get',
    params
  })
}

export function getBlogByTime (params) {
  return request({
    url: process.env.ARTICLE_API + '/blog/getBlogByTime',
    method: 'get',
    params
  })
}

export function getHotBlog (params) {
  return request({
    url: process.env.ARTICLE_API + '/blog/getHotBlog',
    method: 'get',
    params
  })
}

export function getHotTag (params) {
  return request({
    url: process.env.ARTICLE_API + '/tag/getHotTag',
    method: 'get',
    params
  })
}

export function getLink (params) {
  return request({
    url: process.env.ARTICLE_API + '/link/getLink',
    method: 'get',
    params
  })
}

export function addLinkCount (params) {
  return request({
    url: process.env.ARTICLE_API + '/link/addLinkCount',
    method: 'get',
    params
  })
}

export function getWebConfig (params) {
  return request({
    url: process.env.ADMIN_API + '/webConfig/getWebConfig',
    method: 'get',
    params
  })
}

export function getWebNavbar (params) {
  return request({
    url: process.env.ADMIN_API + '/webNavbar/getAllList',
    method: 'get',
    params
  })
}

export function recorderVisitPage (params) {
  return request({
    url: process.env.ARTICLE_API + '/article/recorderVisitPage',
    method: 'get',
    params
  })
}

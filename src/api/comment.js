import request from '@/utils/request'

export function getCommentList (params) {
  return request({
    url: process.env.ARTICLE_API + '/comment/getReplyList',
    method: 'post',
    data: params
  })
}

export function getCommentListByUser (params) {
  return request({
    url: process.env.ARTICLE_API + '/comment/getListByUser',
    method: 'post',
    data: params
  })
}

export function getPraiseListByUser (params) {
  return request({
    url: process.env.ARTICLE_API + '/comment/getPraiseListByUser',
    method: 'post',
    data: params
  })
}

export function addComment (params) {
  return request({
    url: process.env.ARTICLE_API + '/comment/add',
    method: 'post',
    data: params
  })
}

export function deleteComment (params) {
  return request({
    url: process.env.ARTICLE_API + '/comment/delete',
    method: 'post',
    data: params
  })
}

export function reportComment (params) {
  return request({
    url: process.env.ARTICLE_API + '/comment/report',
    method: 'post',
    data: params
  })
}

export function getUserReceiveCommentCount (params) {
  return request({
    url: process.env.ARTICLE_API + '/comment/getUserReceiveCommentCount',
    method: 'get',
    params
  })
}

export function readUserReceiveCommentCount (params) {
  return request({
    url: process.env.ARTICLE_API + '/comment/readUserReceiveCommentCount',
    method: 'post',
    params
  })
}


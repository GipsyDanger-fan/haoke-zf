import instance from '../../axios'

// 轮播图数据
export async function getSwiperList() {
  const res = await instance.get('/home/swiper')
  return res.status === 200 && res.data
}

// 宫格数据
export async function getGroupsList(area = 'AREA|88cff55c-aaa4-e2e0') {
  const res = await instance.get('/home/groups', {
    params: {
      area
    }
  })
  return res.status === 200 && res.data
}

export async function getNewsList(area = 'AREA|88cff55c-aaa4-e2e0') {
  const res = await instance.get('/home/news', {
    params: {
      area
    }
  })
  return res.status === 200 && res.data
}

export function getHomeDatasAll() {
  return Promise.all([getSwiperList(), getGroupsList(), getNewsList()])
}
import instance from '../../../../utils/axios'

// 轮播图数据
export async function getSwiperList () {
  const res = await instance.get('/home/swiper')
  return res.status === 200 && res.data
}
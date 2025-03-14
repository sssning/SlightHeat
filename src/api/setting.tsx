import api from './server'

export const getWallpaper = async () => {
    const res = await api.get('/api/wallpaper/images?idx=0&count=30&mkt=zh-CN');
    return res
}
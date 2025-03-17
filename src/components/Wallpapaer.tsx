import { useState, useEffect } from 'react'
import { getWallpaper } from '../api/setting';

const Wallpapaer = () => {
    const [url, setUrl] = useState<string>('');
    const getImage = async () => {
        const list: any = await getWallpaper();
        const index = Math.floor(Math.random() * 30);
        const item = list[index];
        if (item) {
            setUrl(item.url)
        } else {
            // 默认
            setUrl('https://www.bing.com/th?id=OHR.MtFujiSunrise_ZH-CN0567499176_1920x1080.jpg')
        }
    }
    useEffect(() => {
        getImage()
    }, [])

    return (
        <>
            { url && (
                <div className='wallpapaer'>
                    <img src={url} alt="background" />
                    <div className='gray'></div>
                </div>
            )}
        </>
    )
}

export default Wallpapaer
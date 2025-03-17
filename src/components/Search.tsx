
import { useState } from 'react'
import '../assets/css/search.scss'
import { SearchOutlined, BaiduOutlined } from '@ant-design/icons'

const Search = () => {
    const [active, setActive] = useState({ name: '百度', icon: BaiduOutlined, href: 'https://www.baidu.com/s?wd=12' });
    const [value, setValue] = useState<string>('');

    const onSearch = () => {
        // const url = active.href + `wd=${}`
        console.log(value)
    }

    return (
        <div className="search-container">
            <div className="search-left">
                <BaiduOutlined />
            </div>
            <input placeholder='随便搜点' type="text" onChange={e => setValue(e.target.value)} />
            <div className="search-right">
                <SearchOutlined onClick={onSearch} />
            </div>
        </div>
    )   
}

export default Search
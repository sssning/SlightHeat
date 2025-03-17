
import { useRef, useState } from 'react';
import '../assets/css/search.scss';
import { SearchOutlined, BaiduOutlined } from '@ant-design/icons';
import SvgIcon from './SvgIcon'

const Search = () => {
    const [active, setActive] = useState({ name: '百度', icon: BaiduOutlined, href: 'https://www.baidu.com/s?' });
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null)

    const onSearch = () => {
        if (value) {
            const url = active.href + `wd=${value}`;
            window.open(url, '_blank');
            onClear()
        }
    }

    const onClear = () => {
        if (inputRef.current) {
            setValue('');
            inputRef.current.value = ''
        }
    }

    return (
        <div className="search-container">
            <div className="search-left">
                <SvgIcon name='baidu' /> 
            </div>
            <input ref={inputRef} placeholder='随便搜点' type="text" onChange={e => setValue(e.target.value)} onKeyDown={e => e.key === "Enter" && onSearch()} />
            <div className="search-right">
                <SearchOutlined onClick={onSearch} />
            </div>
        </div>
    )   
}

export default Search
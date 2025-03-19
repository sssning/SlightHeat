
import { useRef, useState } from 'react';
import '../assets/css/search.scss';
import { SearchOutlined } from '@ant-design/icons';
import SvgIcon from './SvgIcon';
import { searchMenus, serachDataKey } from '../utils/const';
import classnames from 'classnames';

const serachData = localStorage.getItem(serachDataKey);
const defaultData = serachData ? JSON.parse(serachData) : searchMenus[0];

const Search = () => {
    const [active, setActive] = useState(defaultData);
    const [value, setValue] = useState<string>('');
    const [showMenus, setShowMenus] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const onClickIcon = () => {
        setShowMenus(v => !v)
    }

    const onSearch = () => {
        if (value) {
            const url = active?.href + value;
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

    const onClickItem = (item: any) => {
        if (active.icon != item.icon) {
            setActive(item);
            localStorage.setItem(serachDataKey, JSON.stringify(item))
        }
        setShowMenus(false)
    }

    return (
        <div className="search-container">
            <div className="search-left" onClick={onClickIcon}>
                <SvgIcon name={active.icon} style={{ width: 20, height: 20 }} /> 
            </div>
            <input ref={inputRef} placeholder='随便搜点' type="text" onChange={e => setValue(e.target.value)} onKeyDown={e => e.key === "Enter" && onSearch()} />
            <div className="search-right">
                <SearchOutlined onClick={onSearch} style={{ fontSize: 20 }} />
            </div>
            {
                showMenus && (
                    <div className='search-menus'>
                        { 
                            searchMenus.map((item) => {
                                return (
                                    <div className={classnames('search-menus-item', { active: active.icon === item.icon })} key={item.icon} onClick={() => onClickItem(item)}>
                                        <div className='search-menus-item-icon'>
                                            <SvgIcon name={item.icon} style={{ width: 18, height: 18 }} /> 
                                        </div>
                                        <div className='search-menus-item-name'>{item.name}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )   
}

export default Search
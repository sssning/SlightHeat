import { useState } from 'react';
import { MenuOutlined, SettingOutlined } from '@ant-design/icons';
import Navigation from '../../components/Navigation'
import { useStore } from '../../store/index'

const LayoutHeader = () => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false);

    const onMenuClick = async () => {
        setShowNavigation(v => !v);
    }
    return (
        <>
            <div className="layout-header-left">
                <MenuOutlined style={{color: '#fff'}} onClick={onMenuClick} />
            </div>
            <div className="layout-header-right">
                <SettingOutlined style={{color: '#fff'}} />
            </div>
        </>
    )
}

export default LayoutHeader

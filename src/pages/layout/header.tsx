import { useState } from 'react';
import { createPortal  } from 'react-dom';
import { MenuOutlined, SettingOutlined } from '@ant-design/icons';
import Navigation from '../../components/Navigation'

const LayoutHeader = () => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false);

    const onMenuClick = () => {
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
            {   showNavigation &&
                createPortal(
                    <Navigation/>,
                    document.body
                )
            }
        </>
    )
}

export default LayoutHeader

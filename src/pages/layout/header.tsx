import { MenuOutlined, SettingOutlined } from '@ant-design/icons'

const LayoutHeader = () => {
    return (
        <>
        <div className="layout-header-left">
            <MenuOutlined style={{color: '#fff'}} />
        </div>
        <div className="layout-header-right">
            <SettingOutlined style={{color: '#fff'}} />
        </div>
        </>
    )
}

export default LayoutHeader

import { MenuOutlined, SettingOutlined } from '@ant-design/icons'

const LayoutHeader = () => {
    return (
        <>
        <div className="layout-header-left">
            <MenuOutlined />
        </div>
        <div className="layout-header-right">
            <SettingOutlined />
        </div>
        </>
    )
}

export default LayoutHeader

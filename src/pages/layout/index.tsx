
import { Outlet } from 'react-router-dom';
import '@/assets/css/layout.scss'
import LayoutHeader from './header'

const Layout = () => {
  return (
    <div className='layout-content'>
      <div className="layout-header">
        <LayoutHeader />
      </div>
      <div className='layout-route'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
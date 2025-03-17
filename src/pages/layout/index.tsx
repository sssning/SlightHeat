
import { Outlet } from 'react-router-dom';
import '@/assets/css/layout.scss'
import LayoutHeader from './header'
import LayoutFooter from './footer'
import Wallpapaer from '../../components/Wallpapaer'
import { Suspense } from 'react';

const Layout = () => {
  return (
    <Suspense >
      <Wallpapaer />
      <div className='layout-content'>
        <div className="layout-header">
          <LayoutHeader />
        </div>
        <div className='layout-route'>
          <Outlet />
        </div>
        <div className="layout-footer">
          <LayoutFooter />
        </div>
      </div>
    </Suspense>
  )
}

export default Layout
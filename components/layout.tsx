import Head from 'next/head'

import Meta from '../components/meta'
import SiteHead from './SiteHead';
import SiteTitle from './SiteTitle';

export default function Layout({ children }: any) {
  return (
    <>
      <div className="[ center ]">
        {children}
      </div>
    </>
  )
}
import { useRouter } from 'next/router'
import Link from "next/link";
import classNames from 'classnames/bind';
import titles from '../styles/component/Title.module.scss';
import TitleText  from './TitleText';
import { TITLES } from '../lib/constants'

let cx = classNames.bind(titles);

const SiteTitle = () => {
  const { asPath } = useRouter();
  
  let className = cx({
    homepage: asPath === '/',
    interior: asPath !== '/',
    center: false,
  });

  return (
    //! this code is not DRY 
    <header className='[ center ]'>
      {asPath !== '/' ? 
      <h1 className={className}>
        <Link href='/'>
          <a>
          <TitleText />
          </a>
        </Link>
      </h1>
      : // TODO: Refactor this big time! 
      <h1 className={className}>
        <TitleText />
      </h1>}
      <h2 className={titles.subHeadline}>{TITLES.subtitle}</h2>
    </header>
  )
}

export default SiteTitle

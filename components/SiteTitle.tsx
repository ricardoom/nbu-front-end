import { useRouter } from 'next/router'
import Link from "next/link";
import titles from '../styles/component/Title.module.scss';
import TitleText  from './TitleText';

const SiteTitle = () => {
  const { asPath } = useRouter();

  return (
    //! this code is not DRY 
    <header className='[ center ][ interior or homepage ]'>
      {asPath !== '/' ? 
      <h1 className={titles.headLine}>
        <Link href='/'>
          <a>
          <TitleText />
          </a>
        </Link>
      </h1>
      : // TODO: Refactor this big time! 
      <h1 className={titles.headLine}>
        <TitleText />
      </h1>}
      <h2 className={titles.subHeadline}>Archive of Native American Enslavement</h2>
    </header>
  )
}

export default SiteTitle

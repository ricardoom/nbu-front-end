import { useRouter } from 'next/router'
import Link from "next/link";
import titles from '../styles/component/Title.module.scss';




const SiteTitle = () => {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <header className="center">
      {asPath !== '/' ? 
      <h1 className={titles.headLine}>
        <Link href='/'>
      <a>
      <span>Native Bound</span>&nbsp;<span className={titles.unbound}>Unbound</span>
      </a>
      </Link>
      </h1>
      : // TODO: Refactor this big time! 
      <h1 className={titles.headLine}>
      
      <span>Native Bound</span>&nbsp;<span className={titles.unbound}>Unbound</span>
      
      
    </h1>}
      <h2 className={titles.subHeadline}>Archive of Native American Enslavement</h2>
    </header>
  )
}

export default SiteTitle

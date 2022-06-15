
import titles from '../styles/component/Title.module.scss'
import { split } from '../lib/utils';
import { TITLES } from '../lib/constants';

export default function TitleText() {
  let bound = split(TITLES.title, 0, 12);
  let unbound = split(TITLES.title, 13)
  return (
    <>
    <span className={titles.main}>{bound}</span>
    <span className={titles.unbound}>{unbound}</span>
    </>
  )
}



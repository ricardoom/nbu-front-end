
import titles from '../styles/component/Title.module.scss'

export default function TitleText() {
  return (
    <>
    <span>Native Bound</span>&nbsp;<span className={titles.unbound}>Unbound</span>
    </>
  )
}



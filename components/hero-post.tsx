import Link from 'next/link'
import Date from './date';
import titles from '../styles/component/Title.module.scss'

interface Props {
  title: string,
  // coverImage: string,
  date: string,
  excerpt: string,
  author: string,
  slug: string,
}

export default function HeroPost({
  title,
  // coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="">
        <div>
          <h3 className={titles.blogTitle}>
            <Link href={`/posts/${slug}`}>
              <a className="">{title}</a>
            </Link>
          </h3>
          <div className='[ author ]'>{author}</div>
        </div>
        <div>
          <p className="">{excerpt}</p>
          <Link href={`/posts/${slug}`}>
              <a className="">Continue Reading &gt;&gt;</a>
          </Link>
          </div>
        </div>
        <div className="dateString">
          <Date dateString={date} />
        </div>
    </section>
  )
}
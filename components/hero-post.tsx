import Link from 'next/link'
import Date from './date';


interface Props {
  title: string | any,
  // coverImage: string | any,
  date: string | any,
  excerpt: string | any,
  author: string | any,
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
          <h3 className="">
            <Link href={`/posts/${slug}`}>
              <a className="">{title}</a>
            </Link>
          </h3>
          <div className='[ author ]'>{author}</div>
        </div>
        <div>
          <p className="">{excerpt}</p>
        </div>
        <div className="dateString">
          <Date dateString={date} />
        </div>
      </div>
    </section>
  )
}
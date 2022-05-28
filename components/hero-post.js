import Link from 'next/link'
import Date from './date'



export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      
      <div className="">
        <div>
          <h3 className="">
            <Link href={`/posts/${slug}`}>
              <a className="">{title}</a>
            </Link>
          </h3>
          <div className="">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
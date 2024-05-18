import { logEvent } from '../lib/analytics'

export default () => (
  <a
    href='https://www.producthunt.com/posts/fontkey?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-fontkey'
    onClick={() => logEvent('Landing', 'Product Hunt Banner')}
    target='_blank'
  >
    <img
      src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=166168&theme=light'
      alt='FontKey Product Hunt Embed'
      className='image'
    />

    <style jsx>{`
      .image {
        width: 250px;
        height: 54px;
        margin-bottom: 40px;
      }
    `}</style>
  </a>
)
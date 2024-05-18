import Link from 'next/link'
import Container from './Container'
import { logEvent } from '../lib/analytics'

export default () => (
  <footer>
    <Container lg className='container'>
      <div className='side'>
        <nav>
          <ul>
            <li>
              <Link href='/' legacyBehavior>
                <a onClick={() => logEvent('Landing', 'Footer Link', 'Landing')}>Landing</a>
              </Link>
            </li>
            <li>
              <Link href='/app' legacyBehavior>
                <a>App</a>
              </Link>
            </li>
            <li>
              <Link href='/auto' legacyBehavior>
                <a>Auto mode</a>
              </Link>
            </li>
            <li>
              <a href='/__repl' onClick={() => logEvent('Landing', 'Footer Link', 'Source Code')} target='_blank'>
                Source code
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='side'>
        <ul>
          <li>
            <a href='https://www.producthunt.com/posts/fontkey' onClick={() => logEvent('Landing', 'Footer Link', 'Product Hunt Submission')} target='_blank'>
              Product Hunt submission
            </a>
          </li>
          <li>
            <a href='https://repl.it/talk/challenge/FontKey/15736' onClick={() => logEvent('Landing', 'Footer Link', 'Repl.it Talk Post')} target='_blank'>
              Repl.it talk post
            </a>
          </li>
          <li>
            <a href='https://www.reddit.com/r/webdev/comments/c0nktu/fontkey_stop_reusing_roboto_and_spice_things_up/' onClick={() => logEvent('Landing', 'Footer Link', 'Reddit Post')} target='_blank'>
              Reddit post
            </a>
          </li>
          <li>
            <a href='mailto:fontkey@kognise.dev?subject=Hey!' onClick={() => logEvent('Landing', 'Footer Link', 'Contact')} target='_blank'>
              fontkey@kognise.dev
            </a>
          </li>
        </ul>
      </div>
    </Container>

    <style jsx>{`
      footer {
        font-family: var(--font-secondary);
        font-weight: var(--font-weight-secondary);
        font-size: var(--font-size-secondary);
        font-style: var(--font-style-secondary);
        line-height: 1.8;

        color: var(--dark-dim);
        background: var(--light-dim);

        padding-bottom: 40px;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      a {
        color: inherit;
      }

      footer :global(.container) {
        display: flex;
        flex-direction: row;
      }

      .side {
        flex: 1;
      }

      @media only screen and (max-width: 460px) {
        footer :global(.container) {
          display: block;
        }
      }
    `}</style>
  </footer>
)
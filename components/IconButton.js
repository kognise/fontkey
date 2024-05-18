import Link from 'next/link'

export default (props) => {
  return (
    <button type='button' onClick={props.onClick}>
      <props.icon className='icon' />

      <style jsx>{`
        button {
          font-size: inherit;
          line-height: 0;

          outline: none;
          background: transparent;
          border: none;

          padding: 0;
          margin-right: 4px;
          vertical-align: middle;

          display: inline-block;

          cursor: pointer;
        }

        button :global(.icon:hover) {
          fill: var(--dark);
        }
      `}</style>
      <style jsx>{`
        button :global(.icon) {
          fill: var(--${props.active ? 'dark' : 'dim'});

          height: 1.3em;
          width: 1.3em;
        }
      `}</style>
    </button>
  )
}

export const IconLink = (props) => {
  return (
    <Link href={props.href} legacyBehavior>
      <a target={props.target} onClick={props.onClick}>
        <props.icon className='icon' />

        <style jsx>{`
          a {
            line-height: 0;

            margin-right: 4px;
            vertical-align: middle;

            display: inline-block;
          }

          a :global(.icon:hover) {
            fill: var(--dark);
          }
        `}</style>
        <style jsx>{`
          a :global(.icon) {
            fill: var(--${props.active ? 'dark' : 'dim'});

            height: 1.3em;
            width: 1.3em;
          }
        `}</style>
      </a>
    </Link>
  );
}
export default (props) => (
  <p>
    {props.children}

    <style jsx>{`
      p {
        font-family: var(--font-secondary);
        font-weight: var(--font-weight-secondary);
        font-size: var(--font-size-secondary);
        font-style: var(--font-style-secondary);
        line-height: 1.6;

        color: var(--${props.light ? 'light' : 'dark'}-dim);

        margin-top: 0;
        margin-bottom: 40px;
        max-width: 700px;
      }
    `}</style>
  </p>
)
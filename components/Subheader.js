export default (props) => (
  <h2>
    {props.children}

    <style jsx>{`
      h2 {
        font-family: var(--font-primary);
        font-weight: var(--font-weight-primary);
        font-size: var(--font-size-primary);
        font-style: var(--font-style-primary);

        color: var(--${props.light ? 'light' : 'dark'});

        margin-top: 0;
        margin-bottom: 20px;
        max-width: 500px;
      }
    `}</style>
  </h2>
)
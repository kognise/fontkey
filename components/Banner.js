export default (props) => (
  <div>
    <a href={props.href} target='_blank'>
      {props.children}
    </a>

    <style jsx>{`
      div {
        background: var(--accent);

        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        z-index: 999;
      }

      a {
        font-family: var(--font-secondary);
        font-weight: var(--font-weight-secondary);
        font-size: var(--font-size-secondary);
        font-style: var(--font-style-secondary);
        
        outline: none;
        color: var(--light);

        padding: 10px 16px;
        display: block;
      }
    `}</style>
  </div>
)
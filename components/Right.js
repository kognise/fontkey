export default (props) => (
  <aside>
    {props.children}

    <style jsx>{`
      aside {
        background: var(--light);
        flex: 1;
      }
    `}</style>
  </aside>
)
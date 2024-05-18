export default (props) => (
  <div className={props.className}>
    {props.children}

    <style jsx>{`
      div {
        width: 100%;
        height: 100%;
        padding: 16px;
        margin: 0 auto;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    `}</style>
    <style jsx>{`
      div {
        max-width: ${props.lg ? '680px' : '480px'};
      }
    `}</style>
  </div>
)
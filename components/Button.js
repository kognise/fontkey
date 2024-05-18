export default (props) => (
  <button className={props.className} onClick={props.onClick}>
    {props.children}
    
    <style jsx>{`
      button {
        font-family: var(--font-tertiary);
        font-weight: var(--font-weight-tertiary);
        font-size: var(--font-size-tertiary);
        font-style: var(--font-style-tertiary);
        text-transform: uppercase;

        outline: none;

        padding: 18px 30px;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 100px;

        cursor: pointer;
      }

      button:hover {
        background: var(--accent);
        border-color: var(--accent);
        color: var(--light);
        box-shadow: var(--box-shadow);
      }

      button:active {
        box-shadow: none;
      }
    `}</style>
    <style jsx>{`
      button {
        background: ${props.cta ? 'var(--accent)' : 'transparent'};
        color: var(--${props.cta ? 'light' : 'accent'});
        border: 2px solid var(--${props.cta ? 'accent' : 'accent-light'});
        box-shadow: ${props.cta ? 'var(--box-shadow)' : 'initial'};
        
        width: ${props.fullwidth ? '100%' : 'auto'};
      }
    `}</style>
  </button>
)
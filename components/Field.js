export default (props) => (
  <div className={props.className}>
    <label htmlFor={props.id}>
      {props.label}
    </label>
    <input
      type={props.type}
      id={props.id}
      name={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />

    <style jsx>{`
      label {
        font-family: var(--font-tertiary);
        font-weight: var(--font-weight-tertiary);
        font-size: var(--font-size-tertiary);
        font-style: var(--font-style-tertiary);

        color: var(--dark);

        display: block;
        margin-bottom: 4px;
      }

      input {
        font-family: var(--font-secondary);
        font-weight: var(--font-weight-secondary);
        font-size: var(--font-size-secondary);
        font-style: var(--font-style-secondary);

        color: var(--dark);
        outline: none;
        border: none;
        background: transparent;

        width: 100%;
        padding: 4px 0;
        margin-bottom: 32px;
      }
    `}</style>

    <style jsx global>{`
      ::placeholder {
        color: var(--dim);
      }
    `}</style>
  </div>
)
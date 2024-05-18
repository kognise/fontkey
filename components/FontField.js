import Field from './Field'
import Lock from './Lock'

export default (props) => {
  return (
    <div>
      <Field
        label={<>
          <Lock
            state={props.state}
            dispatch={props.dispatch}
            level={props.level}
          />
          {props.prettyLevel} font
        </>}

        onChange={(event) => props.dispatch({
          type: 'setName',
          payload: event.target.value
        })}
        onBlur={() => props.dispatch({ type: 'updateFont' })}
        value={props.state.name}
        id={`${props.state.level}-font`}

        className='left'
        placeholder='Pick a font...'
        type='text'
      />

      <Field
        label='Size'

        id={`${props.state.level}-size`}
        onChange={(event) => props.dispatch({
          type: 'setSize',
          payload: event.target.value
        })}
        value={props.state.size}

        placeholder='16'
        type='number'
        className='right'
        min={1} max={100}
      />

      <style jsx>{`
        div {
          display: flex;
        }

        div :global(.left) {
          flex: 1;
        }
        div :global(.right) {
          min-width: 80px;
          flex: 0;
        }
      `}</style>
    </div>
  )
}
import IconButton from './IconButton'

import LockIcon from '../icons/Lock'
import UnlockIcon from '../icons/Unlock'

export default (props) => {
  return (
    <IconButton
      icon={props.state.locked ? LockIcon : UnlockIcon}
      active={props.state.locked}
      onClick={() => props.dispatch({ type: 'toggleLock' })}
    />
  )
}
import { FaStar } from 'react-icons/fa';

/* 
  The Star function component takes two props: 'selected' and 'select'.
  If no 'select' function is provided when this component is used, it defaults to 'f => f'.
  This is an identity function that takes an argument and returns the same argument.
  It's used here as a safe default, so if 'select' is not provided, the onClick event will still have a function to call (even though it doesn't do anything).
*/
function Star({selected = false, select = f => f}) {
  return (
    <FaStar className='star' color={selected ? 'gold' : 'grey'} onClick={select} />
  )
}

export default Star;
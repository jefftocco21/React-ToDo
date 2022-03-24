import propTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd}) => { //accepting props, specifcially title defined in App.jsx
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color='steelblue' text='Add Task' onClick = {onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'To Do'
}

Header.propTypes = {
    title: propTypes.string.isRequired
}

//can use javascript to create CSS rules
// const headingStyle = {
//   color:'red', 
//   backgroundColor: 'black'
// }

export default Header
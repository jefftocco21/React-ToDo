const Header = ({title}) => { //accepting props, specifcially title defined in App.jsx
  return (
    <header>
        <h1> 
           {title} 
        </h1>
    </header>
  )
}

export default Header
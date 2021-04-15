import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title, onClick}) => {
    return (
        
        <header className='header'>
            <h1>{title}</h1>
            <Button color='black' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Tasker Tracker",

}
Header.propTypes = {
    title: PropTypes.string,
}


// CSS IN JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',


// }



export default Header

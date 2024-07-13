import { Link } from "react-router-dom"
import styles from './HeaderLink.module.css'
import { UseGlobalContext } from "../../contexto/GlobalContext"

const HeaderLink = ({children, to}) =>{

    const {vaciarParametros} = UseGlobalContext()

    const manejarOnClick = () => {
        vaciarParametros();
    }

    return(
        <Link onClick={manejarOnClick} to={to} className={styles.link}>
            {children}
        </Link>
    )
}

export default HeaderLink
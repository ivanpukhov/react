import notFound from "./../../assets/img/405.svg";
import {Link} from "react-router-dom";

const NotCart = ({product}) => {
    return (
        <Link to={'/'} className='notfound'>
            <img src={notFound} alt=""/>

        </Link>
    )
}

export default NotCart

import notFound from "./../../assets/img/406.svg";
import {Link} from "react-router-dom";

const NotCart = ({product}) => {
    return (
        <Link to={'/catalog'} className='notfound'>
            <img src={notFound} alt=""/>

        </Link>
    )
}

export default NotCart

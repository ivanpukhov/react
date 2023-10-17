import notFound from "./../../assets/img/204.svg";
import {Link} from "react-router-dom";

const NotFound = ({product}) => {
    return (
        <Link to={'/'} className='notfound'>
            <img src={notFound} alt=""/>

        </Link>
    )
}

export default NotFound

import { Link } from 'react-router-dom';

function ResetPassword() {


    return (
        <div className="centred">
            <div className="divider-clear"></div>
            <h3>We've sent a link to your email.</h3>
            <h6>It might take a few minutes to arrive. Please also check your spam box.</h6>
            <div className="divider-clear"></div>
            <Link to="/Settings" className="rounded-button">Back</Link>
        </div>

    )
}


export default ResetPassword;
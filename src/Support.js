import { Link } from 'react-router-dom';

function Support() {

    
    return (
        <div className="centred">
            <div className="divider-clear"></div>
            <h1>Contact Support Form</h1>
            <p>By filling in this form a support ticket will be sent by email to our developers we will aim to get back to you with an answer shortly.</p>

            <div className="divider"></div>
            <form>
                <input type="text" placeholder="Title" required />
                <input type="email" placeholder="Email" required />
                <textarea type="description" placeholder="Please let us know what the issue you're struggling with is." required />
                <input type="submit" value="Submit" className="submit"></input>
            </form>

            <div className="divider-clear"></div>
            <Link to="/Settings" className="rounded-button">Back</Link>
        </div>
    )






}

export default Support;
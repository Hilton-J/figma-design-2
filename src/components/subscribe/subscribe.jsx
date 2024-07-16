import './subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe-section' id='subscribe'>
            <h2>SUBSCRIBE</h2>
            <p>Sign-up to our newletter</p>
            <input type='email' placeholder='Your email' required />
            <button type='submit'>SUBMIT</button>
        </div>
    )
}

export default Subscribe
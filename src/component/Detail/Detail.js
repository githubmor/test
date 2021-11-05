import PropTypes from 'prop-types'
import './Detail.css'
import React, { useState } from 'react'


export default function Details({ apiKeys }) {

    const [connect, setConnect] = useState(false)

    const submitConnect = event =>{
        event.preventDefault();

        setConnect(true);

        setTimeout(() => {
            setConnect(false);
        }, 3000);
    }

    return (
        <><div className='arrow' /><div className='Detail'>
            <form onSubmit={submitConnect}>
                {apiKeys.map(key => <>
                    <fieldset>
                        <label>{key}
                            <input type="text" />
                        </label>
                    </fieldset>
                </>
                )}
                {connect && <h6>Try To Connect</h6>}
                <button type='submit'>Connect</button>
            </form>
        </div></>
        
    )
}

Details.prototype = {
    apiKeys: PropTypes.arrayOf(PropTypes.string).isRequired
}
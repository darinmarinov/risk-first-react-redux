import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
            <nav>
                <div className='nav-wrapper  cyan darken-2'>
                    <div className='container'>
                        <Link to='/' className='brand-logo center'>Logo</Link>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
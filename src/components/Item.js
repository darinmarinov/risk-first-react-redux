import React from 'react'

const Item = ( { name, description, address} = this.props) => {

    return (
        <React.Fragment>
           <span className='col s12 m4'>
             {name}
           </span>
           <span className='col s12 m8'>
             {description}
           </span>
        </React.Fragment>
    )
}

export default Item;
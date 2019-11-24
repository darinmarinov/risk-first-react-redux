import React from 'react';
import Image from './Image'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleProduct } from '../store/actions';


class List extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.singleProduct(this.props.match.params.id);
    }

    render() {
        if (!this.props.product) { return <div className="spinner">Loading ...</div> }
        const { image , address, email } = this.props.product;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className='col s12'>
                           <Image image={image}/>
                        </div>
                        <div className='col s12 m3'>
                           <h2>Address:</h2>
                           <p> {address.city} {address.street}</p>
                        </div>
                        <div className='col s12 m3'>
                           <h2>Contacts:</h2>
                           <p> {email}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    product: state.productReducer.item
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        singleProduct: fetchSingleProduct
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

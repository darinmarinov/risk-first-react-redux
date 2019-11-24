import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../store/actions';
import { Link } from 'react-router-dom'
import Item from './Item'

class Items extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderItems() {
        return this.props.products.map((product) => {
            return (
                <div className="product" key={product.id}>
                    <Link to={`/item/${product.id}`} className="z-depth-3">

                        <Item
                            name={product.name}
                            description={product.description}>
                        </Item>
                    </Link>
                </div>
            )
        })
    }


    render() {
        const { error, loading } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div className="spinner">Loading ...</div>
        }

        return (
            <React.Fragment>
              
                <div className="container product-list">
                    <div className="row">
                        <div className="col s12 m4">
                            <h2>Names:</h2>
                        </div>
                        <div className="col s12 m8">
                            <h2>Descriptions:</h2>
                        </div>
                        {this.renderItems()}
                       
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.productReducer.items,
    loading: state.productReducer.loading,
    error: state.productReducer.error,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchProducts: fetchProducts
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);

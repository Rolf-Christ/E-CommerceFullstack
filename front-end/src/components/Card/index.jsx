import {Link} from 'react-router-dom'



export const CardArticle = () => {
    return (
        <div className="col-xl-2 col-lg-3 col-sm-6 my-3">
                            <div className="col-12 bg-white text-center h-100 product-item">
                                <div className="row h-100">
                                    <div className="col-12 p-0 mb-3">
                                        <Link to="/produit">
                                            <img src='https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png' alt='images' className="img-fluid"/>
                                        </Link>
                                    </div>
                                    <div className="col-12 mb-3">
                                        <Link to="/produit" className="product-name">Sony Alpha DSLR Camera</Link>
                                    </div>
                                    <div className="col-12 mb-3">
                                            <span className="product-price-old">
                                                $500
                                            </span>
                                        <br/>
                                        <span className="product-price">
                                                $500
                                            </span>
                                    </div>
                                    <div className="col-12 mb-3 align-self-end">
                                        <button className="btn btn-outline-dark" type="button"><i className="fas fa-cart-plus mr-2"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}





export const CardArticleSolde = () => {
    return (
        <div className="col-xl-2 col-lg-3 col-sm-6 my-3">
        <div className="col-12 bg-white text-center h-100 product-item">
            <div className="row h-100">
                <div className="col-12 p-0 mb-3">
                    <Link to="/produit">
                        <img src='https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png' alt='images' className="img-fluid"/>
                    </Link>
                </div>
                <div className="col-12 mb-3">
                    <Link to="/produit" className="product-name">Optoma 4K HDR Projector</Link>
                </div>
                <div className="col-12 mb-3">
                        <span className="product-price">
                            $1,500
                        </span>
                </div>
                <div className="col-12 mb-3 align-self-end">
                    <button className="btn btn-outline-dark" type="button"><i className="fas fa-cart-plus mr-2"></i>Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    )
}
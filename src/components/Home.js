import React from 'react'
function Home(props) {
    console.warn("home", props.data);
    return (
        <div>
            <div className='add-to-cart '>
                <span className='cart-count'>{props.data.length}</span>
                <img src="./images/shopping-cart.png" />

            </div>
            <h1>Shopping Cart</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="./images/img2.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        iPhone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button
                        onClick={
                            () => { props.addToCartHandler({ price: 1000, name: 'iphone11' }) }
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
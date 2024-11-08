import React from "react";
function Home(){

    function handlClick(){
        alert("Item added to cart");
    }
    return(
        <div>
            <div>
            <img className="logo" src="https://cdn-icons-png.freepik.com/512/7835/7835563.png" alt="" />
            </div>
            <h1>Welcome to my home page</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.apple.com/v/iphone-16-pro/c/images/overview/apple-intelligence/apple_intelligence_endframe__ksa4clua0duu_xlarge.jpg" alt="" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={handlClick} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
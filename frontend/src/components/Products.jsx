import React from "react";


const Productimages = [
  "https://i.ytimg.com/vi/SeAKPEIxayw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADhCYdwTGgYkAIT6QY5srY3Hf6qQ",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXzM5SN8lhhVBuyzbkGBvVM2a5ohmiF2dSmNmv5KzrAQe7Hunw0i_5OGA-iMqmJ754II&usqp=CAU",
  "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/9/s/k/-original-imahf42ux9g6gvum.jpeg?q=90",
  "https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x8-series/en/oppo-find-x8-pro/white-apac/assets/images-color-konka-b-1-mo.png"
];
// eslint-disable-next-line react-refresh/only-export-components
const Products = ()=>{
    return(
        <>
        <div className="products-box">
            <div className="first-layer">
                <h2 className="first-head">Hot Deals</h2>
                <div className="box box1">
                <img src="https://i.ytimg.com/vi/SeAKPEIxayw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADhCYdwTGgYkAIT6QY5srY3Hf6qQ" alt="banner" className="Product-image" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYXzM5SN8lhhVBuyzbkGBvVM2a5ohmiF2dSmNmv5KzrAQe7Hunw0i_5OGA-iMqmJ754II&usqp=CAU" alt="banner" className="Product-image" />
                <img src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/9/s/k/-original-imahf42ux9g6gvum.jpeg?q=90" alt="banner" className="Product-image" />
                <img src="https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x8-series/en/oppo-find-x8-pro/white-apac/assets/images-color-konka-b-1-mo.png" alt="banner" className="Product-image" />
                </div>
            </div>
            <div className="second-layer">
                <h2 className="second-head">upto 60% off</h2>
                <div className="box box2">
                <img src="https://m.media-amazon.com/images/I/51GOpp8rAJL._AC_UL480_FMwebp_QL65_.jpg" alt="banner" className="off-image" />
                <img src="https://m.media-amazon.com/images/I/71mVWZnzrgL._AC_UL480_FMwebp_QL65_.jpg" alt="banner" className="off-image" />
                <img src="https://m.media-amazon.com/images/I/71gRGFTvuPL._AC_UL480_FMwebp_QL65_.jpg" alt="banner" className="off-image" />
                <img src="https://m.media-amazon.com/images/I/71crOOJnt9L._AC_UL480_FMwebp_QL65_.jpg" alt="banner" className="off-image" />
                <img src="https://m.media-amazon.com/images/I/41mWz2aRrTL._SY625_.jpg" alt="banner" className="off-jpg-image" />
                <img src="https://m.media-amazon.com/images/I/61KTUHrdO9L._AC_UL480_FMwebp_QL65_.jpg" alt="banner" className="off-jpg-image" />
                </div>
            </div>
            <div className="third-layer">
                <h2 className="third-head">Brand New</h2>
                <div className="box box3">
                <img src="https://m.media-amazon.com/images/I/61Nn7eT9ARL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg" alt="banner" className="Product-image" />
                <img src="https://m.media-amazon.com/images/I/51iRmVqCdBL._SX300_SY300_QL70_FMwebp_.jpg" alt="banner" className="Product-image" />
                <img src="https://m.media-amazon.com/images/I/81OmhFfS-hL._AC_CR0%2C0%2C0%2C0_SX615_SY462_.jpg" alt="banner" className="Product-image" />
                <img src="https://m.media-amazon.com/images/I/81EkAiUbMaL._AC_UY327_FMwebp_QL65_.jpg" alt="banner" className="Product-image" />
                </div>
            </div>
            <div className="fourth-layer">
                <h2 className="fourth-head">Mattrices</h2>
                <div className="box box4">
                <img src="https://m.media-amazon.com/images/G/31/IMG20/Home/2024/HFRevamp/BSB_Home._SS400_QL85_.jpg" alt="banner" className="Product-image" />
                <img src="https://m.media-amazon.com/images/I/616550+uxuL._AC_UL480_QL65_.jpg" alt="banner" className="Product-image" />
                <img src="https://m.media-amazon.com/images/I/61KGM6EmuzL._AC_UL480_FMwebp_QL65_.jpg" alt="banner" className="Product-image" />
                <img src="https://m.media-amazon.com/images/I/81yMhG0tvAL._AC_UL480_FMwebp_QL65_.jpg" alt="banner" className="Product-image" />
                </div>
            </div>
        </div>
        </>
    );
};

export default Products;
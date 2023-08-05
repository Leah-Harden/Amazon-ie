

import Navindex from '../Nav/Navindex.js'

import Placeholder from '../Home/Cards/CardPhotos/Kid.png'


function ProductIndex() {

    return (
        <>
            <Navindex />
            <div className='productWholePage'>

                <div className='PhotoPlusText'>

                    <div className=''>
                        <a href='#'>Books</a>
                        <a href='#'>Literature & Fiction</a>
                        <a href='#'>Stuff</a>
                    </div>
                    <div>
                        <div className='wholeProductRow'>
                            <div className='sidePhotoLine'>
                                <img src={Placeholder} className='SidePhoto' alt='' />
                                <img src={Placeholder} className='SidePhoto' alt='' />
                                <img src={Placeholder} className='SidePhoto' alt='' />
                            </div>
                            <img src={Placeholder} className='MainProductPhoto' alt='' />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='ProductText'>

                        <h1 className='ProductTitle'>Lipton Black Tea Bag, 100 Count (Pack of 6)</h1>
                        <a href='#'>Visit the Lipton Store</a>
                        <di className="RatingLine">
                            <p className='RatingSpace'><span>4.8</span> </p>
                            <a href='#' className='RatingSpace'> <span>2,234</span>&nbsp;ratings</a>
                            <a href='#' className='RatingSpace'><span>13</span>&nbsp;answered questions</a>
                        </di>
                        <hr></hr>
                        <div>
                            <p>List Price:<span>$24.99</span><a href='#'>Details</a> </p>
                            <p className='PriceText'>Price:<span>16.99</span>  <img src='' alt='' /><span>One-day</span></p>
                            <a href='#'>Free Returns</a>
                            <p>You Save:<span>$8.00 (32%)</span></p>
                            <img src='' alt='' /> <a>Shop items </a> <a>Terms</a>
                            <a><span>Get a $100 Gift Card:</span> Pay $0.00 $16.99 upon approval for Prime Visa. No annual fee.</a>
                            <p>May be available at a lower price from other sellers, potentially without free Prime shipping.</p>
                            <p>Size:<span>Pack of 6</span> </p>
                        </div>
                    </div>
                    <hr></hr>
                    <div>

                        <div>
                            <p>One-time purchase:</p>
                            <p>$16.99 ($16.99 / Fl Oz)</p>
                            <p><img src='' alt='' /><span>One-day</span></p>
                            <p>FREE Returns</p>
                            <p>FREE delivery<span></span></p>
                            <p>Or FREE delivery <span>Overnight 4 AM - 8 AM </span>on qualifying orders over $35. Order within<span> 4 hrs 27 mins</span></p>

                            <div><a>Deliver to <span>John</span> - <span>Orlando 32802</span> </a></div>
                            <h2>In Stock</h2>
                            <button>Add to Cart</button>
                            <button>Buy Now</button><button>Add to Cart</button>
                            <div>
                                <p>Payment<a>Secure transaction</a></p>
                                <p>Ships from<span>
                                    Amazon.com</span></p>
                                <p>Sold by<span>
                                    Amazon.com</span></p>
                                <p>Returns<a>
                                    Eligible for Return, Refund or Replacement within 30 days of receipt</a></p>

                            </div>
                        </div>
                        <button>Add to essentials</button>
                        <button>Add to List</button>
                    </div>

                </div>

            </div>



        </>
    )
}

export default ProductIndex;

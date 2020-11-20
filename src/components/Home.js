import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img src="./banner3.jpg" className="home-image" />

                <div className="home-row">
                    <Product 
                        id = {122322}
                        title="A Game of Thrones (Song of Ice and Fire) Hardcover – August 1, 1996" 
                        price = {26.29}
                        image="https://kbimages1-a.akamaihd.net/a26bb671-977c-4324-a6af-486847cdbe32/1200/1200/False/a-game-of-thrones-a-song-of-ice-and-fire-book-1.jpg"
                        rating={5}
                        author="by George R.R. Martin"
                        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"

                    />
                    <Product 
                        id = {122323}

                        title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver" 
                        price = {364.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                        rating={4}
                        author="by Acer"

                    />
                </div>

                <div className="home-row">
                <Product 
                        id = {122325}
                        title="SAMSUNG 75-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q70TAFXZA, 2020 Model)" 
                        price = {100.29}
                        image="https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SL1000_.jpg"
                        rating={4}
                        author="by Samsung"
                        
                />
                <Product 
                        id = {122326}
                        title="OtterBox Defender Series Case for iPad Pro 11(1st Gen) - Retail Packaging - Black" 
                        price = {11.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51o%2ByhvbK-L._AC_SL1000_.jpg"
                        rating={5}
                        author="by OtterBox Store"
                        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus"

                    />
                <Product 
                        id = {122321}
                        title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR" 
                        price = {9.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
                        rating={3}
                        author="by Samsung Electronics Store"
                        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"

                    />
                </div>

                <div className="home-row">
                    <Product 
                        id = {122327}
                        title="LG 65UN7300PUF Alexa Built-In UHD 73 Series 65 4K Smart UHD TV (2020" 
                        price = {300.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg"
                        rating={5}
                        author="by LG Store"
                        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"

                    />
                </div>
            </div>
        </div>
    )
}

export default Home;



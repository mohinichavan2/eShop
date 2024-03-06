import React from "react";
import "../components/Home.css";
import shopping from "../images/shopping.png";
import Product from "./Product";
import oven from "../images/oven.jpg";
import fridge from "../images/fridge.jpg";
import shoes from "../images/shoes.jpg";
import shoes2 from "../images/shoes2.png";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import Banner from '../images/Banner.jpg';
import homeapp from '../images/homeapp.jpg';

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img src={shopping} alt="" className="home__image" />
          <br></br>
          <br></br>
          <br></br>
          <div className="product__tile">
            <h1>Appliances for your home | Up to 55% off</h1>
            <img src={homeapp} alt="" className="home__image" />
          </div>
          <div className="home__row">
            <Product
              id="0123"
              title="Voltas Beko 28 L Convection Microwave Oven, 5 power levels (MC28BD, Black)"
              price={10790}
              rating={4}
              image={oven}
            />
            <Product
              id="0987"
              title="Godrej 180 L 2 Star , With Jumbo Vegetable Tray Direct Cool Single Door Refrigerator"
              price={12590}
              rating={4}
              image={fridge}
            />
          </div>
          <div className="product__tile">
            <h1>Up to 60% off | Styles for men and women</h1>
            <img src={Banner} alt="" className="home__image" />
          </div>
          <div className="home__row">
            <Product
              id="0222"
              title="Noise Newly Launched Quad Call 1.81 Display, Bluetooth Calling Smart Watch, AI Voice Assistance"
              price={1200}
              rating={4}
              image={watch2}
            />
            <Product
              id="0333"
              title="Noise Twist Go Round dial Smartwatch with BT Calling, 1.39 Display Metal Build, 100+ Watch Faces, IP68,"
              price={1299}
              rating={3}
              image={watch}
            />
            <Product
              id="0444"
              title="Mesh Solid Sports Shoes Trendy Elegant Design Grey"
              price={642}
              rating={3}
              image={shoes}
            />
            <Product
              id="0555"
              title="Naruto: Split Sneakers"
              price={2799}
              rating={3}
              image={shoes2}
            />
          </div>
          <div className="home__row"></div>
        </div>
      </div>
    </div>
  );
}

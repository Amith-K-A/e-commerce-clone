import React from "react";
import Product from "../../components/Product";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={"123"}
            title="Amazfit GTS2 Mini"
            price={50}
            image={"https://images-na.ssl-images-amazon.com/images/I/61qy7szj5xL._AC_SX522_.jpg"}
            ratings={4}
          />
          <Product
          id={"187"}
            title="Great Stories for Children Paperback – 1"
            price={29.99}
            image={"https://images-na.ssl-images-amazon.com/images/I/51H2M2jWmvL._SX311_BO1,204,203,200_.jpg"}
            ratings={5}
          />
        </div>
        <div className="home__row">
          <Product
          id={"198"}
            title="Samyang Fire Chicken (Buldak) Spicy Ramen"
            price={2}
            image={"https://images-na.ssl-images-amazon.com/images/I/71laEImM3iL._AC_SX679_.jpg"}
            ratings={5}
          />
          <Product
          id={"888"}
            title="ROG Laptop"
            price={99}
            image={"https://images-na.ssl-images-amazon.com/images/I/81xmpElZxhL._AC_SX425_.jpg"}
            ratings={2}
          />
          <Product
          id={"178"}
            title="Apple iPhone 12 Pro Max"
            price={120}
            image={"https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._AC_SX679_.jpg"}
            ratings={5}
          />
        </div>
        <div className="home__row">
          <Product
          id={"565"}
            title="Colombian Brew Coffee Arabica French Press Coffee"
            price={50}
            image={"https://images-na.ssl-images-amazon.com/images/I/71irtiX68uL._AC_SY445_.jpg"}
            ratings={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

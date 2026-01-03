import React from "react";
import "./index.css";

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Catalog />
      <Footer />
    </>
  );
}

function Header() {
  const hours = new Date().getHours();
  console.log(hours);
  const openHours = 9;
  const closeHours = 21;
  let isOpen = hours < closeHours && hours > openHours ? true : false;
  console.log(isOpen);
  return (
    <header className="header">
      <h1>Electronic store</h1>
      <nav className="nav">
        <ul>
          <li>
            Home
            <a href="#home"></a>
          </li>
          <li>
            Catalog
            <a href="#catalog"></a>
          </li>
          <li>
            About us
            <a href="#about"></a>
          </li>
          <li>
            Contacts
            <a href="#contacts"></a>
          </li>
        </ul>
      </nav>
      <div className="working-hours">
        {isOpen ? (
          <p>We are open , welcome</p>
        ) : (
          <p>
            {" "}
            We are close , open hours is {openHours}: 00 - {closeHours} .00{" "}
          </p>
        )}
      </div>
    </header>
  );
}

function Catalog() {
  return (
    <main className="catalog">
      <ul className="products">
        {productData.map((element, index) => (
          <Product
            productName={element.name}
            key={index}
            productImg={element.photoName}
            productDescription={element.description}
            productPrice={element.price}
            isSoldOut={element.soldOut}
          />
        ))}
        {/* <Product /> */}
      </ul>
    </main>
  );
}

function Product({
  productImg,
  productName,
  productDescription,
  productPrice,
  isSoldOut,
}) {
  return (
    <li className={`product ${isSoldOut ? "sold-out" : ""} `}>
      <img src={productImg} alt="img" />
      <div>
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <span>{isSoldOut ? "SOLD-OUT" : productPrice}</span>
      </div>
    </li>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
export default App;

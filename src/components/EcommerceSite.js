import React from "react";
import "../styles/EcommerceSection.css";
import sales_website from "../images/sales_website.jpeg";

const ECommerceSection = () => {
    return (
        <section className="ecommerce-section">
            <div className="ecommerce-left">
                <img
                    src={sales_website}
                    alt="E-Commerce"
                    className="ecommerce-image"
                />
            </div>
            <div className="ecommerce-right">
                <h2 className="ecommerce-title">E-Commerce Website</h2>
                <p className="ecommerce-description">
                    This e-commerce website offers a seamless shopping experience with
                    features like user authentication, dynamic product catalogs, and a
                    secure payment gateway. Designed to deliver exceptional performance and
                    an intuitive user interface.
                </p>
            </div>
        </section>
    );
};

export default ECommerceSection;

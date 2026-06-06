const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/register", (req, res) => {
    res.render("register");
});
app.get("/product/:name", (req, res) => {

    const products = {
        watch: {
            name: "Smart Watch",
            price: "₹1999",
            image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL._SX679_.jpg",
            description: "Stylish smart watch with fitness tracking."
        },

        headphones: {
            name: "Headphones",
            price: "₹1499",
            image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg",
            description: "Gaming headphones with great sound quality."
        },

        shoes: {
            name: "Shoes",
            price: "₹2499",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
            description: "Comfortable running shoes."
        }
    };

    const product = products[req.params.name];

    res.render("product", { product });
});
app.get("/cart", (req, res) => {
    res.render("cart");
});
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
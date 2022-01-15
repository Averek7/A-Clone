const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51KFjGjSAnXW4qBsWwwLmVM9zoPdzPRY7xrG7VbIXD3hYa6apIqmraIpBsr3gWScQ8gceHmP25udEkoVQNAdUcEwI00mI8NMpAB"
);
// API

const app = express();

// App Config
app.use(cors({ origin: true }));
app.use(express.json());

// Middlewares
// app.get("/", (req, res) => res.status(200).send("Hello There !"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log(`Payment request recieved for amount ${total}`);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: `${paymentIntent.client_secret}`,
  });
});

// Listen commands
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-477a3/us-central1/api

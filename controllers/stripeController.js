const stripe=require("stripe")(process.env.STRIPE_KEY);


exports.payment=async(req,res)=>{
  console.log(req.body.tokenId, req.body.amount );
    await stripe.paymentIntents.create(
        {
        
          amount: req.body.amount,
          currency: "usd",
          automatic_payment_methods: {enabled: true}
        },
        (stripeErr, stripeRes) => {
          console.log("Error",stripeErr);
          if (stripeErr) {
            res.status(500).json(stripeErr);
          } else {
            res.status(200).json(stripeRes);
          }
        }
      );
}
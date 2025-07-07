
import Stripe from 'stripe';
import { NextApiRequest, NextApiResponse } from 'next';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err: any) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

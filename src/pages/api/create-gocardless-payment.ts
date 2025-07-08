
import { NextApiRequest, NextApiResponse } from 'next';
import gocardless from 'gocardless-nodejs';
import { Environments } from 'gocardless-nodejs/constants';

const goCardless = gocardless({
  accessToken: process.env.GOCARDLESS_ACCESS_TOKEN || '',
  environment: process.env.NODE_ENV === 'production' ? Environments.Live : Environments.Sandbox,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount, currency, description } = req.body;

      // Create a payment
      const payment = await goCardless.payments.create({
        amount: amount, // 10.00
        currency: currency,
        links: {
          mandate: 'MANDATE_ID', // Replace with a valid mandate ID
        },
        description: description,
      });

      res.status(200).json({ payment });
    } catch (error: any) {
      res.status(500).json({ statusCode: 500, message: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

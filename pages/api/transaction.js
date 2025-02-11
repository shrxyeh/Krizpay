let transactions = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return list of transactions
    return res.status(200).json({ transactions });
  } else if (req.method === 'POST') {
    // Create a new transaction record
    const { type, amount, user, details } = req.body;
    const newTransaction = {
      id: Date.now(),
      type,        // e.g., "payment" or "settlement"
      amount,
      user,
      details,
      date: new Date().toISOString()
    };
    transactions.push(newTransaction);
    return res.status(200).json({ transaction: newTransaction });
  }
  res.status(405).end();
} 
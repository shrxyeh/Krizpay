export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { crypto } = req.query; // e.g., BTC, ETH, USDT, MATIC
    const mapping = {
      BTC: 'bitcoin',
      ETH: 'ethereum',
      USDT: 'tether',
      MATIC: 'matic-network'
    };
    const coinId = mapping[crypto?.toUpperCase()];
    if (!coinId) {
      return res.status(400).json({ message: 'Unsupported cryptocurrency' });
    }

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=inr`);
      const data = await response.json();
      return res.status(200).json({ crypto, inr: data[coinId].inr });
    } catch (error) {
      console.error('Error fetching conversion rate:', error);
      return res.status(500).json({ message: 'Error fetching conversion rate' });
    }
  }
  res.status(405).end();
} 
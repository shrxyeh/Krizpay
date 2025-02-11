let users = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, role } = req.body;
    // Simple check to see if user exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Store user (passwords should be hashed in production)
    users.push({ email, password, role });
    return res.status(200).json({ message: 'User registered successfully' });
  }
  res.status(405).end(); // Method not allowed
} 
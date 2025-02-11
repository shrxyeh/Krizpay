import Link from 'next/link';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to KrizPay</h1>
      <p>Select your role:</p>
      <ul>
        <li>
          <Link href="/login">
            <a>User Login</a>
          </Link>
        </li>
        <li>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
        <li>
          <Link href="/merchant">
            <a>Merchant Dashboard</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home; 
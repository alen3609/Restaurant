async function testLogin() {
  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000',
      },
      body: JSON.stringify({
        email: 'admin@gmail.com',
        password: 'Password@123',
      }),
    });
    const data = await res.json();
    console.log('API Login Status:', res.status);
    console.log('API Login Data:', data);
  } catch (err) {
    console.error('API Login Error:', err.message);
  }
}

testLogin();

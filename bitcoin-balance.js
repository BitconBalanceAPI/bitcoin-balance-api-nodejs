(async () => {
  try {
    const res = await fetch('https://api-testnet.bitcoin-balance-api.com/v1/address/tb1qlw09ycnp3qgqw9alqgx93ed7cg5kmnyud326ky');

    const response = await res.json();
    console.log(`Bitcoin Balance: ${response.balance}`);

  } catch (err) {
    console.log(err.message); //can be console.error
  }
})();

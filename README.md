# bitcoin-balance-api-nodejs

Easy-to-use API for retrieving the balance of a Bitcoin wallet with https://bitcoin-balance-api.com/

Swagger: https://api-testnet.bitcoin-balance-api.com/docs/

## Get Balance

```
(async () => {
  try {
    const res = await fetch('https://api-testnet.bitcoin-balance-api.com/v1/address/tb1qlw09ycnp3qgqw9alqgx93ed7cg5kmnyud326ky');

    const response = await res.json();
    console.log(`Bitcoin Balance: ${response.balance}`);

  } catch (err) {
    console.log(err.message); //can be console.error
  }
})();
```

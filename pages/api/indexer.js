const fetchApiData = async () => {
    const url =
      'https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100';
  
    const headers = {
      'accept': 'application/json',
      'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',
    };
  
    try {
      const response = await fetch(url, { method: 'GET', headers });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  
  export { fetchApiData };
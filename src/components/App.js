// create your App component here
// import { useEffect, useState } from "react"
import React, { useEffect, useState } from 'react';

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!image) {
    return <p>Loading...</p>;
  }

  return <img alt="A Random Dog" src={image} />;
}

export default App;
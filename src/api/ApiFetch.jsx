import React, { useEffect, useState } from "react";
import "./loader.scss";

export default function ApiFetch({ url, children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Define isLoading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setTimeout(() => {
          setData(result.data || []);
          setIsLoading(false);
        }, 1000); // Delay for 1 second
      } catch (err) {
        setTimeout(() => {
          setError(err.message);
          setIsLoading(false);
        }, 1000); // Delay for 1 second
      }
    };

    fetchData();
  }, [url]);

  if (isLoading) {
    return (
      <div className="container">
        <div className="container__content">
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <>{children(data)}</>;
}
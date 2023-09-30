import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import axios from "axios";
import Layout from "../../Components/Layout/Layout";

export const Home = () => {
  const [iphones, setIphones] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const getIphonesFromServer = () => {
    axios
      .get("https://651851c6582f58d62d359530.mockapi.io/iphones")
      .then((resp) => {
        const data = resp.data;
        setIphones(data);
        setIsLoading((prev) => !prev);
      });
  };

  useEffect(() => {
    getIphonesFromServer();
  }, []);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <h1>Загрузка...</h1>
        ) : (
          <Layout>
            {iphones.map((iphone) => (
              <div key={iphone.id}>
                <img
                  width={200}
                  height={200}
                  src={iphone.imageURL}
                  alt={iphone.model}
                />
                <h4>{iphone.model}</h4>
              </div>
            ))}
          </Layout>
        )}
      </div>
    </>
  );
};

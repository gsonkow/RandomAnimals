import { useState, useEffect } from "react";
import "./GetPhoto.css";

export default function GetPhoto({ type }) {
  const [data, setData] = useState("");

  useEffect(() => {
    var url = "";
    switch (type) {
      case "Dog":
        url = "https://random.dog/woof.json"; //This api sometimes fails
        break;
      case "Cat":
        url = "https://aws.random.cat/meow";
        break;
      case "Fox":
        url = "https://randomfox.ca/floof/";
        break;
      default:
        url = "";
        break;
    }
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(null));
  }, [type]);

  return (
    <div>
      {data == null ? (
        "But How?"
      ) : data.url ? (
        <img src={data.url} alt="Dog" />
      ) : data.file ? (
        <img src={data.file} alt="Cat" />
      ) : data.image ? (
        <img src={data.image} alt="Fox" />
      ) : (
        "Failed To Load"
      )}
    </div>
  );
}

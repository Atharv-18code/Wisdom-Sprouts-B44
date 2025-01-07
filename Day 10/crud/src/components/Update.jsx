import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Update.css"; // Import the CSS file

const Update = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const { id } = useParams();

  console.log(id, "me ye fetch kr raha hu");

  const getData = async () => {
    const res = await axios.get(
      `https://6777b13980a79bf9190296e8.mockapi.io/cakeshop/cake/${id}`
    );
    setName(res.data.name || "");
    setWeight(res.data.weight || "");
  };

  useEffect(() => {
    getData();
  }, []);

  const updateData = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://6777b13980a79bf9190296e8.mockapi.io/cakeshop/cake/${id}`,
      { name: name, weight: weight }
    );
    alert("Your oredr is Updated Succesfully");
  };

  return (
    <div className="container">
      <h1>Update Information </h1>

      <form onSubmit={updateData}>
        <input
          type="text"
          value={name}
          placeholder="Enter Your Cake Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          value={weight}
          placeholder="Enter Your Cake Weight (In kg/gm)"
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
        <input type="submit" value="Update Order 🛒" />
      </form>
    </div>
  );
};

export default Update;

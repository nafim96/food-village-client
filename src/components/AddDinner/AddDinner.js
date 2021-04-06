import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AdminHeader from '../AdminHeader/AdminHeader';

const AddDinner = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    console.log('get main data', data);
    const foodData = {
      name: data.frName,
      weight: data.frWeight,
      condition: data.frCondition,
      price: data.frPrice,
      country: data.frCountry,
      image: imageURL,
      localTime: new Date()
    };
    console.log("getting food data", foodData);

    const url = `http://localhost:5000/addDinner/`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodData),
    }).then((res) => {
      if (res) {
        alert("Product Added Successfully");
      }
    });
  };

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "0dc13d20bdb71b0ee141f3eb5a7ab168");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <AdminHeader></AdminHeader>
      
      <div className="add-container">
        <h3>Add Dinner</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Food Name" {...register("frName")} /> <br/>
        <input placeholder="Food Weight" {...register("frWeight")} /><br/>
        <input placeholder="Food Condition" {...register("frCondition")} /><br/>
        <input placeholder="Food Price" {...register("frPrice")} /><br/>
        <input placeholder="Made By" {...register("frCountry")} /><br/>
        
          <input name="file" type="file" onChange={handleImageUpload} />
          <br />

          <input type="submit" />
        </form>
      </div>
    
    </div>
  );
};

export default AddDinner;
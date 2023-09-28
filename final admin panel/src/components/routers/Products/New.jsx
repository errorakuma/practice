import React from "react";
import style from "./products.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Apis, category, getDatafromLS } from "../Service";



const Category = () => {
    const data = localStorage.getItem("Category");
    if (data) {
        return JSON.parse(data);
    } else {
        return Apis.c;
    }
};






function New() {
    const navigate = useNavigate();
    const [form, setForm] = useState(getDatafromLS());
    const [errorMessage, setErrorMessage] = useState("");

    const [categories] = useState(Category());


    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [stock, setStock] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();

        let formsdata = {
            name,
            image,
            category,
            description,
            expireDate,
            stock,
        };

        setForm([...form, formsdata]);
        setName("");
        setImage("");
        setCategory("");
        setDescription("");
        setExpireDate("");
        setStock("");

        setTimeout(() => {
            navigate("/Products");
        }, 1000);
    };

    useEffect(() => {
        localStorage.setItem("ProductsPage", JSON.stringify(form));
    }, [form]);

    const handleFileChange = (e) => {
        let file = e.target.files[0];
        if (file.size > 1024 * 1024) {
            setErrorMessage("File size exceeds 1MB");
            return;
        }
        setImage(URL.createObjectURL(file));
        setErrorMessage("");
    };
    return (
        <div className={style.newcontainer}>
            <form className={style.newproductform} onSubmit={handlesubmit}>
                <header>
                    <h2>Add Product </h2>
                </header>
                <section className={style.split}>
                    <aside className={style.right}>
                        <figure>
                            {image && <img src={image} alt="Selected" />}
                            <figcaption>
                                {errorMessage && <p>{errorMessage}</p>}
                            </figcaption>
                        </figure>
                        <label htmlFor="image">Upload</label>
                        <input
                            type="file"
                            required
                            name="image"
                            id="image"
                            onChange={handleFileChange}
                            accept=".jpg,.jpeg,.png,.bmp,.svg,.webp"
                        />
                    </aside>
                    <article className={style.left}>
                        <div>
                            <label htmlFor="name">Product Name:</label>
                            <input
                                value={name}
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                required
                                id="name"
                                name="name"
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description:</label>
                            <input
                                value={description}
                                type="text"
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                id="description"
                                name="description"
                            />
                        </div>
                        <div>
                            <label htmlFor="category">Category:</label>
                            <select
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                                id="category"
                            >
                                <option value="" selected disabled>
                                    Select your category
                                </option>
                                {categories.map((list) => (
                                    <option value={list}>{list}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="expire_date">Expire Date:</label>
                            <input
                                value={expireDate}
                                type="date"
                                id="expire_date"
                                onChange={(e) => setExpireDate(e.target.value)}
                                name="expireDate"
                            />
                        </div>
                        <div>
                            <label htmlFor="units_in_stock">Units in Stock:</label>
                            <input
                                value={stock}
                                type="number"
                                id="units_in_stock"
                                required
                                onChange={(e) => setStock(e.target.value)}
                                name="stock"
                            />
                        </div>
                    </article>
                </section>
                <div className={style.submit}>
                    <button
                        type="submit"
                        disabled={errorMessage || !image}
                        value="Add Product"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
}

export default New;

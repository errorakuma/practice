import style from "./products.module.css";
import { useNavigate } from "react-router-dom";
import { Apis, category, getDatafromLS } from "../Service";
import { useEffect, useState } from "react";



function Products() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState(category());
    // const [products, setProducts] = useState(getDatafromLS());
    const [products, setProducts] = useState(getDatafromLS().map(product => ({ ...product, selected: false })));

    const handleClick = () => {
        const person = prompt("Please enter your category:", "Anime");
        if (person !== null && person !== "") {
            setCategories((prevNames) => [...prevNames, `${person}`]);
        }
    };

    useEffect(() => {
        localStorage.setItem("Category", JSON.stringify(categories));
    }, [categories]);

    const handleDelete = (d) => {
        setCategories((prevCategories) =>
            prevCategories.filter((category) => category !== d)
        );


        const updatedProducts = products.filter(product => product.name !== d);
        setProducts(updatedProducts);
        localStorage.setItem('ProductsPage', JSON.stringify(updatedProducts));

    };

    const toggleSelectProduct = (index) => {
        const newProducts = [...products];
        newProducts[index].selected = !newProducts[index].selected;
        setProducts(newProducts);
    };


    const deleteSelectedProducts = () => {
        const updatedProducts = products.filter(product => !product.selected);
        setProducts(updatedProducts);
        localStorage.setItem('ProductsPage', JSON.stringify(updatedProducts));
    };

    return (
        <div className={style.container}>
            <div className={style.product}>
                <div className={style.top}>
                    <p>selection</p>
                    <p>Product name</p>
                    <p>Unit sold</p>
                    <p>In stock</p>
                    <p>Expire date</p>
                    <p>delete</p>
                </div>
                {products.map((list, i) => (
                    <label className={style.buttom} >
                        <label>

                            <input type="checkbox" checked={list.selected} onChange={() => toggleSelectProduct(i)} />
                        </label>


                        <p>{list.name}</p>
                        <p>{list.unitSold}</p>
                        <p>{list.stock}</p>
                        <p>{list.expireDate}</p>
                        <button className={style.delete} onClick={() => handleDelete(list.name)}>
                            Delete
                        </button>
                    </label>
                ))}

                <button
                    onClick={() => {
                        navigate("/NewProduct");
                    }}
                >
                    Add New Product
                </button>
                <br></br>
                <button onClick={deleteSelectedProducts}>Delete Selected Products</button>
            </div>
            <div className={style.categroy}>
                <h1>Product Categroy</h1>

                {categories.map((category) => (
                    <div key={category}>
                        <p>{category}</p>
                        <button
                            className={style.delete}
                            onClick={() => handleDelete(category)}
                        >
                            Delete
                        </button>
                    </div>
                ))}

                <button onClick={handleClick}>Add New Categroy </button>
            </div>

        </div>
    );
}

export default Products;

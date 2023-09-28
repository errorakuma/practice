import { useEffect, useState } from "react";

import axios from "axios";




export const Apis = {
    ap: JSON.parse(localStorage.getItem("AccountPage")) || [],
    dp: JSON.parse(localStorage.getItem("DasbhoardPage")) || [],
    pp: JSON.parse(localStorage.getItem("ProductsPage")) || [],
    c: JSON.parse(localStorage.getItem("Category")) || [],
};

// console.log(Apis.ap.Admin);

export const category = () => {
    const data = localStorage.getItem("Category");
    if (data) {
        return JSON.parse(data);
    } else {
        return Apis.c;
    }
};

export const getDatafromLS = () => {
    const data = localStorage.getItem("ProductsPage");

    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
};

function Service() {

    useEffect(() => {

        const handleLogin = () => {
            axios
                .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
                .then((res) => {
                    const data = res.data;
                    // localStorage.setItem("Data", JSON.stringify(data));
                    const AccountPage = data.accountsPage
                    const DasbhoardPage = data.dasbhoardPage
                    const ProductsPage = data.productsPage.products
                    const Category = data.productsPage.categories

                    if (!localStorage.getItem("AccountPage")) {
                        localStorage.setItem("AccountPage", JSON.stringify(AccountPage));
                    }

                    if (!localStorage.getItem("DasbhoardPage")) {
                        localStorage.setItem("DasbhoardPage", JSON.stringify(DasbhoardPage));
                    }

                    if (!localStorage.getItem("ProductsPage")) {
                        localStorage.setItem("ProductsPage", JSON.stringify(ProductsPage));
                    }

                    if (!localStorage.getItem("Category")) {
                        localStorage.setItem("Category", JSON.stringify(Category));
                    }






                })
                .catch((err) => console.log(err));
        }

        handleLogin();
    }, []);



}

export default Service




import React, { useState, useEffect } from 'react';
import style from './account.module.css';
import { Apis } from "../Service";


const accountInfo = Apis.ap

function Acc() {



    const [selectedAccount, setSelectedAccount] = useState('');
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const [profilePic, setProfilePic] = useState('');


    useEffect(() => {
        const storedAccount = Apis.ap;

        const storedAccounts = localStorage.getItem('accounts');
        if (storedAccounts) {
            const parsedAccounts = JSON.parse(storedAccounts);
            if (parsedAccounts[selectedAccount]) {
                setFormState(parsedAccounts[selectedAccount]);
                setProfilePic(parsedAccounts[selectedAccount].profilePic);
            }

        }
        else {

            const parsedAccounts = (storedAccount);
            if (parsedAccounts[selectedAccount]) {
                setFormState(parsedAccounts[selectedAccount]);
                setProfilePic(parsedAccounts[selectedAccount].profilePic);
            }
        }
    }, [selectedAccount]);


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file.size > 1024 * 1024) {
            alert('File size exceeds 1MB');
            return;
        }
        setProfilePic(URL.createObjectURL(file));
    };

    const deleteProfilePic = () => {
        setProfilePic('');
    };

    const updateProfile = () => {
        if (!selectedAccount) {
            alert('Please select an account.');
            return;
        }
        const rePasswordInput = document.getElementById('rePassword');
        const rePassword = rePasswordInput.value;
        // Check if password and rePassword match
        const { password } = formState;

        if (password !== rePassword) {
            alert('Passwords do not match. Please re-enter.');
            return;
        }

        accountInfo[selectedAccount] = { ...formState, profilePic };
        localStorage.setItem('accounts', JSON.stringify(accountInfo));
        alert('Information Updated Successfully!');
    };

    return (
        <div className={style.container}>
            <div className={style.list}>
                <h1>List of Accounts</h1>
                <div className={style.account}>
                    <label htmlFor="accounts">Accounts</label>
                    <br />



                    <select
                        name="accounts"
                        onChange={(e) => {
                            setSelectedAccount(e.target.value);
                        }}
                        id="accounts"
                    >
                        <option value="" disabled selected>
                            Select an account
                        </option>
                        {Object.keys(accountInfo).map((key) => (
                            <option value={key}>
                                {key}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.img}>
                    <figure>
                        {profilePic && <img src={profilePic} alt="Selected" />}
                        <figcaption>{profilePic && <button onClick={deleteProfilePic}>Delete Profile Pic</button>}</figcaption>
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
                </div>
                <div className={style.data}>
                    <form className={style.form}>
                        <div className={style.field}>
                            <label>Account Name</label>
                            <input
                                value={formState.name}
                                onChange={(e) => setFormState((prevState) => ({ ...prevState, name: e.target.value }))}
                                type="text"
                            />
                        </div>
                        <div className={style.field}>
                            <label>Account Email</label>
                            <input
                                value={formState.email}
                                onChange={(e) => setFormState((prevState) => ({ ...prevState, email: e.target.value }))}
                                type="email"
                            />
                        </div>
                        <div className={style.field}>
                            <label>Phone</label>
                            <input
                                value={formState.phone}
                                onChange={(e) => setFormState((prevState) => ({ ...prevState, phone: e.target.value }))}
                                type="text"
                            />
                        </div>

                        <div className={style.field}>
                            <label>Password</label>
                            <input
                                value={formState.password}
                                onChange={(e) => setFormState((prevState) => ({ ...prevState, password: e.target.value }))}
                                type="password"
                            />
                        </div>

                        <div className={style.field}>
                            <label> re-Password</label>
                            <input
                                id="rePassword"
                                type="password"
                            />
                        </div>
                        <button type="button" onClick={updateProfile}>
                            Update your Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );




}

export default Acc
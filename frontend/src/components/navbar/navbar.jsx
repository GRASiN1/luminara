import React, { useState } from 'react';
import "./navbar.css";
import logo from "./logo.png";
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar(props) {
    const [searchQuery, setSearchQuery] = useState();
    const Navigate = useNavigate();
    function handleSearch() {
        if (searchQuery.trim() !== "") {
            //work on search functionality
            console.log("searching for : ", searchQuery);
            Navigate("/");
        }
    }
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }
    function handleCartClick() {
        Navigate('/cart');
    }
    function handleWishlistClick() {
        Navigate('/wishlist');
    }

    return (
        <nav class="navbar">
            <Link to='/' class="section logo">
                <img src={logo} alt="brandLogo" id='brandLogo' />
            </Link>
            <div class="section search">
                <div class="searchBox">
                    <span><svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#666666"><path d="M794-96 525.79-364q-29.79 22.92-68.25 35.96T373.44-315q-115.31 0-193.88-78.7Q101-472.41 101-585.2q0-112.8 78.7-191.3Q258.41-855 371.2-855q112.8 0 191.3 78.64Q641-697.71 641-584.85q0 45.85-13 83.35-13 37.5-38 71.5l270 268-66 66ZM371.44-406q75.99 0 127.27-51.54Q550-509.08 550-584.59q0-75.5-51.35-127.46Q447.31-764 371.53-764q-76.61 0-128.07 51.95Q192-660.09 192-584.59q0 75.51 51.31 127.05Q294.62-406 371.44-406Z" /></svg></span>
                    <input type="text" name="search" id="search" placeholder='search here' value={searchQuery} onKeyPress={handleKeyPress} onChange={(e) => { setSearchQuery(e.target.value) }} />
                </div>
            </div>
            {props.user ?
                <div class="section profile">
                    <div class="cart">
                        <svg onClick={handleCartClick} xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="M288.83-72q-29.35 0-50.09-20.91Q218-113.81 218-143.17q0-29.35 20.91-50.09Q259.81-214 289.17-214q29.35 0 50.09 20.91Q360-172.19 360-142.83q0 29.35-20.91 50.09Q318.19-72 288.83-72Zm397.42 0q-29.78 0-50.01-20.91Q616-113.81 616-143.17q0-29.35 20.64-50.09Q657.27-214 686.25-214q30.28 0 50.51 20.91Q757-172.19 757-142.83q0 29.35-20.49 50.09Q716.03-72 686.25-72ZM254-730l94 195h284l106-195H254Zm-40-79h554.35q34.41 0 53.53 32Q841-745 824-712L708.07-502.33q-12.13 20.43-31.3 33.88Q657.59-455 632.86-455H338l-50 96h480v79H279q-49 0-70-33t1-73l62-112-146-311H44v-79h133l37 79Zm134 274h284-284Z" /></svg>
                    </div>
                    <div class="favourite">
                        <svg onClick={handleWishlistClick} xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="m479-91-56-50q-106.77-99.12-177.38-170.56Q175-383 133-441T74.5-546.5Q58-594 58-642.1q0-99.24 66.86-166.57Q191.73-876 289-876q56.29 0 104.64 24.5Q442-827 479-780q42-49 88.53-72.5Q614.07-876 669-876q98.97 0 165.99 67.36Q902-741.28 902-642q0 47.97-17 94.99Q868-500 826.5-442 785-384 714.52-311.95 644.03-239.9 536-141l-57 50Zm-.5-120q100.74-92 165.12-157Q708-433 745-481t51.5-86.78q14.5-38.79 14.5-74.31Q811-703 770.64-744t-100.93-41q-49.01 0-91.36 32.5T508-664h-58q-26.75-56-70.43-88.5-43.68-32.5-90.63-32.5-60.21 0-99.58 40.07Q150-704.86 150-641.68q0 36.77 14.94 75.84t52 87.46Q254-430 317-365t161.5 154Zm2.5-288Z" /></svg>
                    </div>
                    <div class="account">
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#000000"><path d="M228-266q60-41 121.55-63.5Q411.09-352 480.48-352q69.39 0 131.87 23.27Q674.84-305.46 734-266q41-54 58.5-104.46Q810-420.91 810-480q0-140.25-94.83-235.12-94.82-94.88-235-94.88Q340-810 245-715.12 150-620.25 150-480q0 60 17.53 109.72Q185.05-320.57 228-266Zm251.85-180q-59.01 0-99.43-40.65-40.42-40.64-40.42-99Q340-644 380.57-685q40.56-41 99.58-41 59.01 0 99.43 41.15Q620-643.71 620-585.35q0 58.35-40.57 98.85-40.56 40.5-99.58 40.5Zm.03 387Q393-59 317.08-91.55q-75.93-32.56-134.2-91.08-58.27-58.52-91.08-134.23Q59-392.57 59-480.85 59-565 92.21-641.91q33.21-76.92 90.97-135.24 57.75-58.32 133.54-91.59Q392.51-902 480.85-902q84.15 0 161.06 33.71 76.92 33.71 135 91.5Q835-719 868.5-641.97 902-564.93 902-479.88q0 86.88-33.26 162.92-33.27 76.03-91.59 133.78-58.32 57.76-135.27 90.97Q564.93-59 479.88-59Zm.12-91q54 0 100.5-13.5T679-216q-51.59-35.97-99.29-51.98Q532-284 480-284q-52 0-99 16t-98 52.3q51 38.31 97 52Q426-150 480-150Zm0-365q30.87 0 50.93-19.5Q551-554 551-585.5T530.93-637q-20.06-20-50.93-20t-50.93 20Q409-617 409-585.5t20.07 51Q449.13-515 480-515Zm0-71Zm1 369Z" /></svg>
                    </div>
                </div>
                :
                <div class="section profile">
                    <div className="login">
                        <button id='login'><Link to='/login'>Login / Signup</Link></button>
                    </div>
                </div>
            }
        </nav >

    )
}
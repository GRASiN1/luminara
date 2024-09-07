import React from "react";
import Navbar from "../navbar/navbar";
import Popular from "../popular/popular";
// import GenderBar from "../genderBar/genderBar";

// eslint-disable-next-line
let user = {
    name: "GRASiN",
    email: "xyz@test.com"
}

let product = [
    {
        image: "https://c4.wallpaperflare.com/wallpaper/297/288/1009/5bd320d590bcf-wallpaper-preview.jpg",
        name: "image1",
    },
    {
        image: "https://c4.wallpaperflare.com/wallpaper/313/134/489/space-computer-1920x1200-desktop-wallpaper-preview.jpg",
        name: "image2",
    },
    {
        image: "https://c4.wallpaperflare.com/wallpaper/757/911/790/women-anime-girls-brunette-cat-wallpaper-preview.jpg",
        name: "image3",
    },
]

export default function Home() {
    return (
        <div className="App">
            <Navbar user={null} />
            <Popular products={product} />

        </div>
    )
}
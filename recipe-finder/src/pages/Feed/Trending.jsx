// Trending.js

import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "./TrendingStyles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Trending() {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        getTrending();
    }, []);

    const getTrending = async () => {
        try {    
            const check = localStorage.getItem('trending');

            if (check) {
                setTrending(JSON.parse(check));
            } else {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=8`
                );
                const data = await api.json();

                localStorage.setItem("trending", JSON.stringify(data.recipes));
                setTrending(data.recipes);
                console.log(data.recipes);
            }
        } catch (error) {
            console.error('Error parsing JSON from local storage:', error);
            // Handle the error, maybe remove the invalid data from local storage or set default state
        }
    };

    return (
        <div>
            <div className="wrapper">
                <h1 className="trending-title">What's on the Menu Today?</h1>

                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: "3rem",
                    autoplay: true,
                }}>
                    {trending.map((recipe) => (
                        <SplideSlide key={recipe.id}>
                            <div className="card">
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default Trending;

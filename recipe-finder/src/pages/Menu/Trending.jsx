import timeIcon from "../Assets/images/home/alarm.png";
import servingsIcon from "../Assets/images/home/servings.png";

import { useEffect, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import "./Styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Trending() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending();
  }, []);

  const getTrending = async () => {
    const check = localStorage.getItem("trending");

    if (check) {
      setTrending(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_KEY}&number=8`
      );
      const data = await api.json();

      // Fetch detailed information for each recipe
      const detailedRecipes = await Promise.all(
        data.recipes.map(async (recipe) => {
          const detailedApi = await fetch(
            `https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_SPOON_KEY}`
          );
          const detailedData = await detailedApi.json();
          return detailedData;
        })
      );

      localStorage.setItem("trending", JSON.stringify(detailedRecipes));
      setTrending(detailedRecipes);
      console.log(detailedRecipes);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <h1 className="section-title">Popular Picks</h1>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
            autoplay: true,
          }}
        >
          {trending.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <div className="card">
                <a
                  href={recipe.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-details"
                >
                  <div className="card-image">
                    <img src={recipe.image} alt="" />
                  </div>
                  <div className="text-container">
                    <div className="title-container">
                      <p className="card-title">{recipe.title}</p>
                    </div>
                    <div className="button-container">
                      <div className="icon-container left">
                        <img
                          src={timeIcon}
                          alt="Time Icon"
                          className="icon"
                        />
                        <p className="time-text">
                          {recipe.readyInMinutes} min
                        </p>
                      </div>
                      <div className="icon-container right">
                        <img
                          src={servingsIcon}
                          alt="Servings Icon"
                          className="icon"
                        />
                        <p className="time-text">
                          {recipe.servings} servings
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default Trending;

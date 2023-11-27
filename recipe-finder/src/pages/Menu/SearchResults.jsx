import React from "react";
import timeIcon from "../Assets/images/home/alarm.png";
import servingsIcon from "../Assets/images/home/servings.png";
import createdByIcon from "../Assets/images/home/created.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom';

const SearchResults = ({ searchResults }) => {
  if (!Array.isArray(searchResults)) {
    return null;
  }

  const limitCreditsText = (creditsText) => {
    const regex = /^(.*?\.com)|([A-Z][a-z]+ [A-Z][a-z]+)$/;
    const matches = creditsText.match(regex);
    return matches ? matches[0] : "";
  };

  return (
    <div className="wrapper">
      {searchResults.length > 0 && (
        <h1 className="section-title">Search Results</h1>
      )}

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
        {searchResults.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <div className="card">
            <Link to={`/recipe/${recipe.id}`} className="card-details">
                <div className="card-image">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="text-container">
                  <div className="title-container">
                    <p className="card-title">{recipe.title}</p>
                  </div>
                  <div className="button-container">
                    <div className="icon-container">
                      <img src={timeIcon} alt="Time Icon" className="icon" />
                      <p className="time-text">{recipe.readyInMinutes} min</p>
                    </div>
                    <div className="icon-container">
                      <img
                        src={servingsIcon}
                        alt="Servings Icon"
                        className="icon"
                      />
                      <p className="time-text">{recipe.servings} servings</p>
                    </div>
                    <div className="icon-container">
                      <img
                        src={createdByIcon}
                        alt="Created by Icon"
                        className="icon"
                      />
                      <p className="time-text">
                        {limitCreditsText(recipe.creditsText)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SearchResults;

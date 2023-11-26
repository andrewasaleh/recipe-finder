// SearchResults.js
import React from "react";
import timeIcon from "../Assets/images/home/alarm.png";
import servingsIcon from "../Assets/images/home/servings.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const SearchResults = ({ searchResults }) => {
  if (!Array.isArray(searchResults)) {
    return null;
  }

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
              <a
                href={recipe.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-details"
              >
                <div className="card-image">
                  <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="text-container">
                  <div className="title-container">
                    <p className="card-title">{recipe.title}</p>
                  </div>
                  <div className="button-container">
                    <div className="icon-container left">
                      <img src={timeIcon} alt="Time Icon" className="icon" />
                      <p className="time-text">{recipe.readyInMinutes} min</p>
                    </div>
                    <div className="icon-container right">
                      <img
                        src={servingsIcon}
                        alt="Servings Icon"
                        className="icon"
                      />
                      <p className="time-text">{recipe.servings} servings</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SearchResults;

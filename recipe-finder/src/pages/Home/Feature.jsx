import React from 'react';
import featureimage from '../Assets/images/home/feature_1.png';
import featureimage1 from '../Assets/images/home/feature_1.png';
import featureimage2 from '../Assets/images/home/feature_3.png';
import featureimage3 from '../Assets/images/home/feature_3.png';

import dividerimage from '../Assets/images/home/alarm.png';
import dividerimage1 from '../Assets/images/home/servings.png';
import dividerimage2 from '../Assets/images/home/difficulty.png';

import './Feature.css';
import './Divider.css';
import Divider from './Divider';

function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt={props.title} />
      </div>
      <div className='s-b-text'>
        <h2>{props.title}</h2>
        <div className='icon-container'>
          {props.dividerImages.map((dividerImage, index) => (
            <div key={index} className='icon'>
              <img src={dividerImage} alt={`Divider ${index + 1}`} />
              <div className='title'>{props.titles[index]}</div>
              <div className='description'>{props.descriptions[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Feature() {
  const dividerImages = [dividerimage, dividerimage1, dividerimage2];
  const titles = ['Time', 'Servings', 'Difficulty'];
  const descriptions = ['Description 1', 'Description 2', 'Description 3'];
  const descriptions1 = ['Description 1', 'Description 2', 'Description 3'];
  const descriptions2 = ['Description 1', 'Description 2', 'Description 3'];
  const descriptions3 = ['Description 1', 'Description 2', 'Description 3'];

  return (
    <div id='features'>
      <Divider /> {/* Include the Divider component */}
      <h1>What's on the Menu Today?</h1>
      <div className='a-container'>
        <FeatureBox
          image={featureimage}
          title='Recipe 1'
          dividerImages={dividerImages}
          titles={titles}
          descriptions={descriptions}
        />
        <FeatureBox
          image={featureimage1}
          title='Recipe 2'
          dividerImages={dividerImages}
          titles={titles}
          descriptions={descriptions1}
        />
        <FeatureBox
          image={featureimage2}
          title='Recipe 3'
          dividerImages={dividerImages}
          titles={titles}
          descriptions={descriptions2}
        />
        <FeatureBox
          image={featureimage3}
          title='Recipe 4'
          dividerImages={dividerImages}
          titles={titles}
          descriptions={descriptions3}
        />
      </div>
    </div>
  );
}

export default Feature;

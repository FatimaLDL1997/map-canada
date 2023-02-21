import React from "react";
import Canada_Svg from "../Components/Canada_Svg";

import styled from "styled-components";

const Map = () => {
  return (
    <Wrapper>
      <div className='map-container'>
        <Canada_Svg />
      </div>
    </Wrapper>
  );
};

export default Map;

const Wrapper = styled.div`
  @media screen and (max-width: 800px) {
    .map-container {
      

    }
  }
`;

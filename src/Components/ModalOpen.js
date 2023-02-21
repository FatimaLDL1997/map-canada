import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { landmarks } from "../data";
import { useGlobalContext } from "../Pages/context";
import styled from "styled-components";

const ModalOpen = (props) => {
  const { clickClose } = useGlobalContext();

  console.log(props.province);
  // console.log(landmarks.title);
  return (
    <>
      <Wrapper>
        <div className='content'>
          <div className='modal-container one'>
            <div className='modal-background'>
              <div className='card card-zoom'>
                <div className='card-content'>
                  <div style={{ display: "block" }}>
                    <button className='close-icon ' onClick={clickClose}>
                      <AiOutlineCloseCircle />
                    </button>
                  </div>
                  <div className='design card-province'>{props.province}</div>
                  {landmarks
                    .filter((landmark) => landmark.province === props.province)
                    .map((filteredLandmark) => {
                      const { title, image, desc, id, province } =
                        filteredLandmark;
                      console.log(title);
                      return (
                        //here

                        // <div className="test">hello world</div>
                        <div key={id} className='content-container'>
                          <div className='design content-title'>{title}</div>
                          <div className='design content-img'>
                            <img src={image} alt='' />
                          </div>
                          <div className='design content-desc'>{desc}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ModalOpen;

const Wrapper = styled.div`
  @media screen and (max-width: 800px) {
    .close-icon {
      font-size: 0.5rem;
    }
    .card-zoom {
      font-size: 0.5rem;
      width: 70vw;
    }
  }
`;

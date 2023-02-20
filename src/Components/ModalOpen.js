import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { landmarks } from "../data";
import { useGlobalContext } from "../Pages/context";

const ModalOpen = (props) => {
  const { clickClose } = useGlobalContext();

  console.log(props.province);
  // console.log(landmarks.title);
  return (
    <>
      <div className="content">
        <div className="modal-container one">
          <div className="modal-background">
            <div className="card card-zoom">
              <div className="card-content">
                <div style={{ display: "block" }}>
                  <button className="close-icon " onClick={clickClose}>
                    <AiOutlineCloseCircle />
                  </button>
                </div>
                <div className="design card-province">{props.province}</div>
                {landmarks
                  .filter((landmark) => landmark.province === props.province)
                  .map((filteredLandmark) => {
                    const { title, image, desc, id, province } =
                      filteredLandmark;
                    console.log(title);
                    return (
                      //here

                      // <div className="test">hello world</div>
                      <div key={id} className="content-container">
                        <div className="design content-title">{title}</div>
                        <div className="design content-img">
                          <img src={image} alt="" />
                        </div>
                        <div className="design content-desc">{desc}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalOpen;

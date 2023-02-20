import React from "react";

export const landmarks = [
  {
    id: 1,
    province: "Manitoba",
    title: "title1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi error deserunt autem, dolorem tenetur quas corporis a aut ea aliquid.",
    image: "/images/avenue.jpg",
  },

  {
    id: 2,
    province: "Quebec",
    title: "title2",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi error deserunt autem, dolorem tenetur quas corporis a aut ea aliquid.",
    image: "/images/flowers.jpg",
  },
  {
    id: 3,
    province: "Manitoba",
    title: "title3",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi error deserunt autem, dolorem tenetur quas corporis a aut ea aliquid.",
    image: "/images/road.jpg",
  },
  {
    id: 4,
    province: "Manitoba",
    title: "title4",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi error deserunt autem, dolorem tenetur quas corporis a aut ea aliquid.",
    image: "/images/tree.jpg",
  },
];

/* <div className="modal-container one">
  <div className="modal-background">
    <div className="card card-zoom">
      <div className="card-content">
        <div style={{ display: "block" }}>
          <button className="close-icon " onClick={closeBtn}>
            <AiOutlineCloseCircle />
          </button>
        </div>

        <div className="design card-province">Alberta</div>
        <div className="content-container">
          <div className="design content-title">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="design content-img">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
            quae?
          </div>
          <div className="design content-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, a.
            Modi dolorem voluptates corporis voluptas.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */

/* <>
  {landmarks
    .filter((landmark) => landmark.province == props.province)
    .map((filteredLandmark) => {
      const { title, image, desc, id, province } = filteredLandmark;
      console.log(title);
      return (
        <div key={id} className="modal-container one">
          <div className="modal-background">
            <div className="card card-zoom">
              <div className="card-content">
                <div style={{ display: "block" }}>
                  <button className="close-icon " onClick={closeBtn}>
                    <AiOutlineCloseCircle />
                  </button>
                </div>
                <div className="design card-province">{province}</div>
                <div className="content-container">
                  <div className="design content-title">{title}</div>
                  <div className="design content-img">
                    <img src={image} alt="" />
                  </div>
                  <div className="design content-desc">{desc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
</>; */

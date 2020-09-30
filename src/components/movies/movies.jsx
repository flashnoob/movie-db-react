import React from "react";
import "./movies.css";


export const Movies = ({ title, poster_path, overview, vote_average }) => {
  const imageApi = `https://image.tmdb.org/t/p/w500`;

  return (
   
    <div className="movie brighten">
    <div className="">
      {/* DEMO 2 Item*/}
      <div className=" ">
        <div className="hover hover-2 text-white rounded"><img className="images" src={imageApi + poster_path} alt="" />
          <div className="hover-overlay" />
          <div className="hover-2-content px-5 pb-4 pt-1">
            <h3 className="hover-2-title text-uppercase font-weight-bold mb-0"> <span className="font-weight-light"> </span></h3>
            <p className="hover-2-description  mb-0" ></p>
          </div>
        </div>
        <div className=" px-2 py-2">
        <h3 className=" pt-0">{title}</h3>
        <div className="d-flex align-items-center">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="ipc-icon " viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
         <span>{vote_average}</span>
      

        </div>
       </div>
      </div>

    </div></div>
   
   
  //  <div className="movie">
  //     <img className="img" src={imageApi + poster_path} alt={title} />
  //     <div className="movie-info">
  //       <h3>{title}</h3>
  //       <span>{vote_average}</span>
  //     </div>
  //     <div className="movie-overview">
  //       <h2 className="">Movie overview:</h2>
  //       <p>{overview}</p>
  //     </div>
  //   </div>


  );
};



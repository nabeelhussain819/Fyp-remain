import React from "react";
import { GalleryImages } from "./images";
import BreadCrumbArea from "./UserUtilis/BreadCrumbArea";

export const Gallery = () => {
  return (
    <div>
      <BreadCrumbArea />
      <section class="gallery-area section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading text-center">
                <h2 class="sec__title">Gallery Grid</h2>
                <p class="sec__desc pt-2">
                  We used bootstrap grid layout format You can change grid
                  format from 2 to 5 responsive-columns
                </p>
              </div>
            </div>
          </div>
          <div class="row padding-top-50px">
            {GalleryImages.map((data) => {
              return (
                <div class="col-lg-4">
                  <div class="gallery-card">
                    <img src={data.image} class="d-block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

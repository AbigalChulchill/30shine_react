import shine10buoc from "../assets/img/PageTraiNghiemDichVu/20220104-30shine-banner-shine-combo.jpg";
import dichvu1 from "../assets/img/PageTraiNghiemDichVu/mat-na-sui-bot-tay-da-chet-3.jpg";
import dichvu2 from "../assets/img/PageTraiNghiemDichVu/20220105-massage-co-vai-gay.jpg";
import dichvu3 from "../assets/img/PageTraiNghiemDichVu/30shine-lot-mun-cam-3.jpg";
import dichvu4 from "../assets/img/PageTraiNghiemDichVu/30shine-detox-3.jpg";
import vipcombo from "../assets/img/PageTraiNghiemDichVu/combo-cat-goi-s-vip-5.jpg";
import uon from "../assets/img/PageTraiNghiemDichVu/20220104-banner-uon-1.jpg";

import React from "react";

const TraiNghiemDichVu = () => {
  return (
    <>
      <div className="service">
        <div className="container containercolor">
          {/* shine commbo cắt gội 10 bước */}
          <div className="service__block">
            <div className="service__tile">Shine Combo cắt gội 10 bước</div>
            <div className="service__list">
              <div className="service-row">
                <a href="">
                  <div className="service_img col-xl-12">
                    <img src={shine10buoc} width="100%" alt="" />
                  </div>
                </a>
              </div>
              <div className="service__text">
                Dịch vụ chăm sóc tóc đặc biệt dùng kèm <span>Shine Combo</span>
              </div>
              <div className="service-row">
                <a href="">
                  <div className="service_image col-xl-3">
                    <img src={dichvu1} width="281px" alt="" />
                  </div>
                </a>
                <a href="">
                  <div className="service_image col-xl-3">
                    <img src={dichvu2} width="281px" alt="" />
                  </div>
                </a>
                <a href="">
                  <div className="service_image col-xl-3">
                    <img src={dichvu3} width="281px" alt="" />
                  </div>
                </a>
                <a href="">
                  <div className="service_image col-xl-3">
                    <img src={dichvu4} width="281px" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* vipcombo */}
          <div className="service__block">
            <div className="service__tile">Vip Combo</div>
            <div className="service__list">
              <div className="service-row">
                <a href="">
                  <div className="service_img col-xl-12">
                    <img src={vipcombo} width="100%" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Uon */}
          <div className="service__block">
            <div className="service__tile">Uon</div>
            <div className="service__list">
              <div className="service-row">
                <a href="">
                  <div className="service_img col-xl-12">
                    <img src={uon} width="100%" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraiNghiemDichVu;

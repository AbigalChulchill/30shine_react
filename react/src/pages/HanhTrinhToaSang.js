import React from "react";
import "../styles/hanhtrinhtoasang.css";

// icon youtube
import iconyt from "../assets/img/Pagehanhtrinhtoasang/icon-youtube.svg";
// image hanh trinh
import hanhtrinh1 from "../assets/img/Pagehanhtrinhtoasang/30shine-lot-xac-thanh-hot-boy.jpg";
import hanhtrinh2 from "../assets/img/Pagehanhtrinhtoasang/30shine-toc-mullet.jpg";
// row 2
import hanhtrinh3 from "../assets/img/Pagehanhtrinhtoasang/30shine-dien-vien-chung-super.jpg";
import hanhtrinh4 from "../assets/img/Pagehanhtrinhtoasang/30shine-rapper-rtee-lot-xac.jpg";
import hanhtrinh5 from "../assets/img/Pagehanhtrinhtoasang/30shine-toc-faux-hawk.jpg";
import hanhtrinh6 from "../assets/img/Pagehanhtrinhtoasang/30shine-dien-vien-hoang-phi-kha.jpg";
// row 3
import hanhtrinh7 from "../assets/img/Pagehanhtrinhtoasang/30shine-thay-doi-ngoai-hinh.jpg";
import hanhtrinh8 from "../assets/img/Pagehanhtrinhtoasang/30shine-nam-sinh-kien-truc-lot-xac.jpg";
import hanhtrinh9 from "../assets/img/Pagehanhtrinhtoasang/30shine-thay-doi-ngoai-hinh.jpg";
import hanhtrinh10 from "../assets/img/Pagehanhtrinhtoasang/30shine-mat-tron-nhu-mam-vi-de-sai-kieu-toc.jpg";
// row 4 in column 2
import hanhtrinh11 from "../assets/img/Pagehanhtrinhtoasang/30shine-nam-sinh-dai-hoc-van-hoa.jpg";
import hanhtrinh12 from "../assets/img/Pagehanhtrinhtoasang/30shine-lot-xac-tao-kieu-side-part.jpg";
// row 5 in column 4
import hanhtrinh13 from "../assets/img/Pagehanhtrinhtoasang/30shine-tro-thanh-hot-boy-ru-bo-mai-toc-xu.jpg";
import hanhtrinh14 from "../assets/img/Pagehanhtrinhtoasang/30shine-hieu-xu.jpg";
import hanhtrinh15 from "../assets/img/Pagehanhtrinhtoasang/30shine-cau-sinh-vien-dep-trai-nhu-chu-re.jpg";
import hanhtrinh16 from "../assets/img/Pagehanhtrinhtoasang/30shine-sinh-vien-ngan-hang-lot-xac-voi-side-part.jpg";
import hanhtrinh17 from "../assets/img/Pagehanhtrinhtoasang/30shine-sinh-vien-cao-dang-y-lot-xac.jpg";

const HanhTrinhToaSang = () => {
  return (
    <div className="article">
      <div className="container">
        <div className="article_page-title">Hành trình tỏa sáng</div>
        <div className="article_page-subtile">
          Quá trình tìm kiếm và hoàn thiện bản thân là bất tận. Mỗi kiểu tóc mới
          đại diện một tinh thần mới mà người đàn ông luôn hướng đến để tìm thấy
          phiên bản tốt nhất của chính mình. Hãy cùng lắng nghe những câu chuyện
          hành trình lột xác dưới đây để tìm thấy niềm cảm hứng đổi mới cho bạn.
        </div>
        {/* article_row 1 */}
        <div className="article_row">
          {/* 1 row 6 col / 12 col => 2 col*/}
          <div className="article_col col-xl-6">
            <a
              href="https://www.youtube.com/watch?v=m23tHreFffA"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh1} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title">
                    Bạn sinh viên IT lột xác thành hot boy vạn người mê
                  </div>
                  <div className="article__body">
                    Ai nghĩ sinh viên IT là người xuề xoà, không quá quan tâm
                    đến ngoại hình thì xem ngay màn lột xác mái tóc, thay đổi
                    ngoại hình cực ấn tượng này nhé
                  </div>
                  <div className="article__tag">
                    <span>425k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-6">
            <a
              href="https://www.youtube.com/watch?v=S2bVJbLCUQk"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh2} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title">
                    Bạn sinh viên IT lột xác thành hot boy vạn người mê
                  </div>
                  <div className="article__body">
                    Ai nghĩ sinh viên IT là người xuề xoà, không quá quan tâm
                    đến ngoại hình thì xem ngay màn lột xác mái tóc, thay đổi
                    ngoại hình cực ấn tượng này nhé
                  </div>
                  <div className="article__tag">
                    <span>425k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* article_row 2 */}
        <div className="article_row">
          {/* 1 row 4 col */}
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=UYYE-c6LLXo"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh3} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp ra mắt
                  </div>
                  <div className="article__body article__body_sizeM">
                    Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với kiểu
                    tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có vai diễn rất
                    thành công
                  </div>
                  <div className="article__tag">
                    <span>425k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=gpWkrf7FzDA"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh4} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Kiểu tóc mới cho tác phẩm solo đầu tay của rapper RTEE
                  </div>
                  <div className="article__body article__body_sizeM">
                    Rapper trẻ RTEE sắp ra mắt tác phẩm solo đầu tay. Anh cần
                    một hình ảnh mới, một kiểu tóc mới để đánh dấu bước chuyển
                    mình này.
                  </div>
                  <div className="article__tag">
                    <span>133k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=BUFSmCsOXeE"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh5} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Top những kiểu tóc kinh điển của Tronie Ngô, cứ để là năng
                    động và khoẻ khoắn
                  </div>
                  <div className="article__body article__body_sizeM">
                    Ngoại hình khỏe khoắn và năng động của Tronie Ngô 365Daband
                    càng được tôn lên nhờ kiểu tóc Faux Hawk này.
                  </div>
                  <div className="article__tag">
                    <span>80k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=bagH7DpydZ0"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh6} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Diễn viên Hoàng Phi Kha lột xác cho vai diễn mới
                  </div>
                  <div className="article__body article__body_sizeM">
                    Vẻ nam thần điển trai của Hoàng Phi Kha được thể hiện siêu
                    nét qua kiểu tóc này. Chắc chắn anh Kha sẽ có những vai diễn
                    ấn tượng và ghi dấu trong lòng khán giả
                  </div>
                  <div className="article__tag">
                    <span>80k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* article_row 3 */}
        <div className="article_row">
          {/* 2 row 4 column */}
          <div className="article_col col-xl-3">
            <a href="" target="__blank">
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh7} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Thay đổi ngoại hình, chàng trai lạnh lùng, ít nói khiến cô
                    hoa khôi rung động
                  </div>
                  <div className="article__body article__body_sizeM">
                    Hiếu từng nghĩ đàn ông không cần quá quan tâm đến ngoại hình
                    cho đến khi thay đổi kiểu tóc mới, những cơ hội, mối quan hệ
                    chợt rộng mở.
                  </div>
                  <div className="article__tag">
                    <span>5 phút đọc | Làm đẹp</span>
                    {/* <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div> */}
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=MccG8Gf6Oc4"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh8} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Can đảm thay đổi mái tóc 7 năm, nam sinh Kiến Trúc lột xác
                    kiểu tóc mới cực đẹp
                  </div>
                  <div className="article__body article__body_sizeM">
                    Anh bạn sinh viên Kiến Trúc đắn đo rất nhiều về việc cắt bỏ
                    mái tóc đã để 7 năm, gắn liền với nhiều kỉ niệm. Và anh
                    quyết định phải thay đổi.
                  </div>
                  <div className="article__tag">
                    <span>84k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=XBwFe2REmIw"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh9} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Mặt tròn để kiểu tóc này như An Nguyễn thì siêu hợp và tôn
                    gương mặt
                  </div>
                  <div className="article__body article__body_sizeM">
                    Nhiều người nghĩ mặt tròn khó tạo kiểu nhưng bạn sẽ phải
                    nghĩ khác khi xem clip lột xác này của An Nguyễn đấy
                  </div>
                  <div className="article__tag">
                    <span>126k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=jSMy1NDt2Og"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh10} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Bạn sinh viên đại học QGHN đổi kiểu tóc cái tạo ngay điểm
                    nhấn mới cho gương mặt
                  </div>
                  <div className="article__body article__body_sizeM">
                    Nam sinh đại học QGHN đã có màn lột xác cực kì ấn tượng với
                    kiểu tóc mới tại 30Shine. Ai bảo mặt tròn không tạo kiểu đẹp
                    được thì nên xem video này ngay nhé
                  </div>
                  <div className="article__tag">
                    <span>53k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* article_row 4 */}
        <div className="article_row">
          {/* 1 row 6 col / 12 col => 2 col*/}
          <div className="article_col col-xl-6">
            <a
              href="https://www.youtube.com/watch?v=egROLFiv_2U&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=86"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh11} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title">
                    Khôi Nguyên tìm ngay được mảnh ghép còn thiếu kể từ khi thay
                    đổi kiểu tóc này
                  </div>
                  <div className="article__body">
                    “Từ trước đến nay, em chưa bao giờ quan tâm đến ngoại hình
                    cho đến khi gặp Kiều Anh” - Khôi Nguyên chia sẻ
                  </div>
                  <div className="article__tag">
                    <span>328k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-6">
            <a
              href="https://www.youtube.com/watch?v=7xnB6MgNMk0&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=84"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh12} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title">
                    Đạt đã thay đổi kiểu tóc gì khiến cơ hội ngày càng rộng mở
                    hơn với bạn ấy?
                  </div>
                  <div className="article__body">
                    Vì công việc mới đòi hỏi giao tiếp với khách hàng thường
                    xuyên nên Đạt đã quyết định chọn kiểu tóc này. Nó giúp Đạt
                    gây được ấn tượng cực mạnh với đối tác
                  </div>
                  <div className="article__tag">
                    <span>367k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* article_row 5 */}
        <div className="article_row">
          {/* 1 row 4 col */}
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=KMMOsLug8EM&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=83"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh13} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Lột xác anh bạn nghiện học quên mình thành hotboy mà các bạn
                    nữ phải ao ước
                  </div>
                  <div className="article__body article__body_sizeM">
                    Quá chú tâm vào việc học nên Minh Quốc quên mất việc phải
                    chăm sóc bản thân. Vừa rồi cậu bạn đã đạt thành tích cao
                    trong kì tuyển sinh đại học nên quyết định lột xác mái tóc
                    cho dấu mốc quan trọng này.
                  </div>
                  <div className="article__tag">
                    <span>1,4M views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=UOC2YhchyVQ&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=82"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh14} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Hiếu Xù từ bỏ biệt danh sau màn lột xác cực kì ngoạn mục này
                  </div>
                  <div className="article__body article__body_sizeM">
                    Hiếu đã biết mình phải làm gì kể từ khi gặp Kim Anh. Việc
                    đầu tiên là phải bỏ ngay hình ảnh Hiếu xù bằng một kiểu tóc
                    mới
                  </div>
                  <div className="article__tag">
                    <span>191k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=0vbwMJtljrg&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=81"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh15} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Chuẩn bị đón thử thách mới, Ngọc Thọ lột xác với kiểu tóc
                    cực tự tin
                  </div>
                  <div className="article__body article__body_sizeM">
                    Để thuận lợi xin việc sau khi ra trường, Thọ cần chuẩn bị
                    cho mình một ngoại hình thật chỉn chu. Cậu sinh viên năm
                    cuối quyết định lột xác
                  </div>
                  <div className="article__tag">
                    <span>127k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=bagH7DpydZ0"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh16} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Quá thông minh khi lựa chọn kiểu tóc này để chuẩn bị cho vị
                    trí giao dịch viên
                  </div>
                  <div className="article__body article__body_sizeM">
                    Làm ngân hàng yêu cầu một ngoại hình lịch sự, tự tin và hôm
                    nay Phương Nam đã đến 30Shine
                  </div>
                  <div className="article__tag">
                    <span>227k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* 6 */}
        <div className="article_row">
          <div className="article_col col-xl-3">
            <a
              href="https://www.youtube.com/watch?v=yTE2cAs6rmc&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=80"
              target="__blank"
            >
              <div className="article_item">
                <div className="article_media">
                  <img src={hanhtrinh17} alt="" />
                </div>
                <div className="article_content">
                  <div className="article__title article__title_sizeM">
                    Bỏ suy nghĩ không quan tâm đến ngoại hình, nam sinh CĐ Y tế
                    Bạch Mai lột xác với kiểu tóc mới
                  </div>
                  <div className="article__body article__body_sizeM">
                    Từ khi lên đại học mình đã bỏ hẳn suy nghĩ đàn ông không cần
                    quan tâm đến ngoại hình. Điều đầu tiên mình thay đổi chính
                    là mái tóc.
                  </div>
                  <div className="article__tag">
                    <span>174k views</span>
                    <div className="article__icon">
                      <img src={iconyt} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HanhTrinhToaSang;

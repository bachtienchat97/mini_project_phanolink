<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top__intro container">
        <div class="intro-item">
          <img src="../../assets/img/percent2x.png" alt="item" />
          <p>Sản phẩm chính hãng</p>
        </div>
        <div class="intro-item">
          <img src="../../assets/img/express-car.png" alt="item" />
          <p>Giao hàng toàn quốc</p>
        </div>
        <div class="intro-item">
          <img src="../../assets/img/pay.png" alt="item" />
          <p>Thanh toán linh hoạt</p>
        </div>
        <div class="intro-item">
          <img src="../../assets/img/gift2x.png" alt="item" />
          <p>Tích điểm đổi quà</p>
        </div>
      </div>

      <div class="footer-top__contact">
        <div class="contact container">
          <div class="contact-hotline">
            <span class="txt-hotline">BẠN ĐANG CẦN ĐƯỢC TƯ VẤN</span>
            <div class="hotline">
              <img src="../../assets/img/telephone2x.png" alt="tele" />
              <span>Gọi ngay</span>
              <span class="number-phone">1800 6768</span>
              <span>(miễn phí)</span>
            </div>
          </div>

          <div class="contact-email">
            <span class="txt-email">NHẬP EMAIL NHẬN MÃ GIẢM GIÁ</span>
            <div class="email">
              <img src="../../assets/img/telephone2x.png" alt="tele" />
              <input type="text" placeholder="Nhập email của bạn" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bot container">
      <div class="footer-first">
        <div class="logo-footer">
          <img src="../../assets/img/logo_green2x.png" alt="logo-footer" />
          <p class="address">
            CÔNG TY CỔ PHẦN DƯỢC PHẨM PHANO<br />Địa chỉ: 31 HỒ BIỂU CHÁNH,
            P.12, Q.Phú Nhuận, TPHCM
          </p>
          <p class="email">
            MST: 0304860663<br />Email: cskh@phanolink.com<br />Tel: 1800 6768
          </p>
        </div>

        <div class="support-footer">
          <h2>HỖ TRỢ KHÁCH HÀNG</h2>
          <ul>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Chính sách đổi trả</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Chính sách giao hàng</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Chính sách bảo mật</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Hướng dẫn thanh toán</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Hướng dẫn đặt hàng</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Giải quyết phản hồi</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Giấy phép kinh doanh</a
              >
            </li>
          </ul>
        </div>

        <div class="account-footer">
          <h2>TÀI KHOẢN</h2>
          <ul>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Đăng ký</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Đăng nhập</a
              >
            </li>
            <li>
              <a href="#"
                ><img
                  class="arrow"
                  src="../../assets/img/arrow.png"
                  alt="arrow"
                />Kiểm tra đơn hàng</a
              >
            </li>
          </ul>
        </div>

        <div class="connect-our">
          <h2>KẾT NỐI VỚI CHÚNG TÔI</h2>
          <ul>
            <li>
              <a href="#"><img src="../../assets/img/zalo.png" alt="zalo" /></a>
            </li>
            <li>
              <a href="#"><img src="../../assets/img/fb.png" alt="fb" /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../../assets/img/gmail.png" alt="gmail"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../../assets/img/youtube.png" alt="youtube"
              /></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-second">
        <span>© 2019 - Bản quyền thuộc về Công ty CP Dược Phẩm Phano</span>
        <img src="../../assets/img/bocongthuong.png" alt="bocongthuong" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/helpers/_variables';

.footer {
  background-color: $color-bg-white;
  .contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .contact-email {
    display: flex;
    align-items: center;
    width: 50%;

    .email {
      background: #ffffff;
      border-radius: 25px;
      padding: 5px 16px;

      img {
        margin-right: 10px;
        object-fit: cover;
        object-position: center;
      }
    }

    .txt-email {
      position: relative;
    }

    input {
      outline: none;
      border: none;
    }
  }
  .footer-top__contact {
    background: #01adab;
    color: #ffffff;
    padding: 25px 0;

    .contact-hotline {
      display: flex;
      align-items: center;
      width: 50%;

      .txt-hotline {
        position: relative;
      }
      span {
        font-size: 16px;
      }

      .hotline {
        background: #ffffff;
        color: #595959;
        border-radius: 25px;
        padding: 5px 16px;
        position: absolute;
        left: 25%;

        img {
          margin-right: 10px;
        }

        .number-phone {
          color: #ea4036;
          font-size: 18px;
          margin: 0 10px;
        }
      }
    }
  }

  .footer-top__intro {
    display: flex;
    align-items: center;

    .intro-item:nth-child(4) {
      border: none;
    }

    .intro-item {
      border-right: 1px solid;
      text-align: center;
      padding: 10px 50px;

      img {
        height: 50px;
        background-repeat: no-repeat;
        object-fit: cover;
        object-position: center;
      }

      p {
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }

  .footer-bot {
    padding: 15px 0;

    h2 {
      font-size: 15px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      a {
        text-decoration: none;
      }
    }

    .logo-footer {
      img {
        margin-bottom: 20px;
        object-position: center;
        object-fit: cover;
      }
    }

    .footer-second {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        height: 35px;
        object-position: center;
        object-fit: cover;
      }
    }

    .footer-second,
    .footer-first {
      margin-bottom: 15px;
    }

    .footer-first {
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e2e3e4;
    }

    .account-footer,
    .support-footer {
      li {
        &:hover {
          opacity: 0.8;
        }
      }

      a {
        color: #595959;

        img {
          height: 20px;
          object-fit: cover;
          object-position: center;
          margin-right: 5px;
        }
      }
    }

    .account-footer {
      display: flex;
      flex-direction: column;
    }

    .connect-our {
      ul {
        display: flex;
        margin: 0 -5px;
        li {
          margin: 0 5px;

          &:hover {
            opacity: 0.8;
          }
        }

        img {
          height: 30px;
          object-fit: cover;
          object-position: center;
        }
      }
    }
  }
}
</style>

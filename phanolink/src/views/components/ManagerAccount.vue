<template>
  <div class="manager-account">
      <div class="manager-header">
          <span>Quản Lý Tài Khoản</span>
      </div>
      
      <div class="manager-content">
          <ul>
              <li><img src="../../assets/img/arrow.png" alt="arrow"><a href="#">Thông tin tài khoản</a></li>
              <li><img src="../../assets/img/arrow.png" alt="arrow"><a href="#">Quản lý đơn hàng</a></li>
              <li><img src="../../assets/img/arrow.png" alt="arrow"><router-link to="/san-pham-yeu-thich">Sản phẩm yêu thích</router-link></li>
              <li><img src="../../assets/img/arrow.png" alt="arrow"><a href="#">Sản phẩm đã xem</a></li>
              <li><img src="../../assets/img/arrow.png" alt="arrow"><a href="#">Sổ địa chỉ</a></li>
              <li><img src="../../assets/img/arrow.png" alt="arrow"><a href="#">Thông báo của tôi</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/helpers/_variables';

.manager-account {
    background-color: $color-bg-white;
    width: 250px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;

    .manager-header {
        padding: 10px 15px;

        span {
            font-size: 17px;
        }
    }

    .manager-content {
        padding: 15px 5px;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: -10px 0 0 0;

            li {
                margin-top: 10px;
                transition: 0.3s;
                align-items: center;
                img {
                    visibility: hidden;
                    height: 15px;
                }
                &:hover {
                    margin-left: 5px;
                    img {
                        visibility: visible;
                    }
                }
            }

            a {
                text-decoration: none;
                color: $dark;
                &:hover {
                    opacity: 0.5;
                }
            }
        }
    }

}
</style>
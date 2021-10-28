<template>
  <div class="wrapper-header container-fluid">
    <div class="header container">
      <div class="header-first">
        <ul class="list-header-first">
          <li>
            <img
              class="hotfire"
              src="../../assets/img/hotfire.png"
              alt="hotfire"
            />
            <a href="#">Khuyến mãi HOT</a>
          </li>
          <li>
            <img class="noti" src="../../assets/img/bell.png" alt="bell" />
            <a href="#">Thông báo của tôi</a>
          </li>
          <li>
            <div class="user">
              <img src="../../assets/img/login2x.png" alt="user" />
              <ul class="login-or-regis">
                <li><a href="#" @click="$bvModal.show('bv-modal-example')">Đăng nhập</a></li>
                <li><a href="#">Tài khoản</a></li>
              </ul>

  <b-modal id="bv-modal-example" hide-footer>
    
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Đăng nhập</b-button>
  </b-modal>
            </div>
          </li>
        </ul>
      </div>

      <div class="header-second">
        <img src="../../assets/img/Logo.png" alt="logo" />

        <div class="header-content">
            <Search v-model="search"/>
            <div class="btn-search" @click="$emit('search', $event.target.value)">
            <b-icon icon="search"></b-icon>
            Tìm kiếm
            </div>


          <div class="header-content__right">
            <div class="prescription">
              <img src="../../assets/img/prescription.png" alt="prescription" />
              <span>Tạo toa thuốc</span>
            </div>

            <div class="cart">
              <img src="../../assets/img/cart2x.png" alt="cart2x" />
              <span>Giỏ hàng</span>
            </div>
          </div>
        </div>
      </div>

      <div class="header-third">
        <ul>
          <li class="item">
            <img src="../../assets/img/category-product.png" alt="category" />
            <router-link to="/user"
              >DANH MỤC SẢN PHẨM
              <ul class="item-drop">
                <li>
                  <router-link to="/"><a href="#">> Mẹ & bé</a></router-link>
                </li>
                <li>
                  <router-link to="/"
                    ><a href="#">> Thực phẩm chức năng</a></router-link
                  >
                </li>
                <li>
                  <router-link to="/"
                    ><a href="#">> Chăm sóc cá nhân</a></router-link
                  >
                </li>
                <li>
                  <router-link to="/"
                    ><a href="#">> Chăm sóc sức khỏe</a></router-link
                  >
                </li>
                <li>
                  <router-link to="/"
                    ><a href="#">> Tủ thuốc gia đình</a></router-link
                  >
                </li>
                <li>
                  <router-link to="/"
                    ><a href="#">> Chăm sóc phụ nữ</a></router-link
                  >
                </li>
                <li>
                  <router-link to="/"
                    ><a href="#">> Chăm sóc sắc đẹp</a></router-link
                  >
                </li>
                <li>
                  <router-link to="/"
                    ><a href="#">> Sức khỏe gia đình</a></router-link
                  >
                </li>
              </ul>
            </router-link>
          </li>
          <li>
            <img src="../../assets/img/hot-sale.png" alt="hot-sale" /><a
              href="#"
              >KHUYẾN MÃI HOT</a
            >
          </li>
          <li>
            <img src="../../assets/img/location.png" alt="location" /><a
              href="#"
              >HỆ THỐNG NHÀ THUỐC</a
            >
          </li>
          <li>
            <img src="../../assets/img/heart2x.png" alt="heart2x" /><a href="#"
              >GÓC SỨC KHỎE</a
            >
          </li>
          <li>
            <img src="../../assets/img/intro.png" alt="intro" /><a href="#"
              >GIỚI THIỆU</a
            >
          </li>
          <li>
            <img src="../../assets/img/question.png" alt="question" /><a
              href="#"
              >HƯỚNG DẪN</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'

export default {
  name: "Header",

  components: {Search},

  data() {
    return {
      search: '',
      searchResult: []
    }
  },

  methods: {
    onSearch() {
      
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper-header {
  background: #01adab;
  width: 100%;
  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;

    .header-first {
      width: 100%;
    
    .btn-search {
        background: #e2e3e4;
        padding: 5px 9px;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        &:hover {
          background: #b0b5b9;
        }

        .b-icon {
          margin-right: 5px;
        }
      }

      ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;

        li {
          font-size: 14px;
        }

        a {
          text-decoration: none;
          color: #ffffff;
          &:hover {
            color: rgb(230, 108, 21);
          }
        }

        .user {
          display: flex;
          align-items: center;

          img {
            object-fit: cover;
            object-position: center;
            width: 27px;
          }

          .login-or-regis {
            display: flex;
            flex-direction: column;
            color: #ffffff;
            padding: 0;
            margin: 0;
            margin-left: 10px;
            li {
              margin: 0;
            }

            a {
              text-decoration: none;
              &:hover {
                color: rgb(230, 108, 21);
              }
            }
          }
        }
      }

      .list-header-first {
        display: flex;
        justify-content: right;
        align-items: center;

        li {
          margin-left: 20px;
        }
      }

      .hotfire,
      .noti {
        width: 29px;
        object-fit: cover;
        object-position: center;
        margin-right: 5px;
      }
    }

    .header-second {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    .header-third {
      width: 100%;
      margin-bottom: 15px;

      .item {
        position: relative;

        &:hover .item-drop {
          opacity: 1;
          visibility: visible;
        }
      }

      .item-drop {
        opacity: 0;
        visibility: hidden;
        transition: opacity 200ms ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: absolute;
        top: 30px;
        left: 12%;
        gap: 0.5rem;
        background-color: #01adab;
        width: 12rem;
        padding: 15px 0;
        z-index: 1;

        li {
          color: #ffffff;
          padding: 0;
          margin: 0;
          transition: 0.4s;
          width: 100%;

          &:hover {
            margin-left: 5px;
          }
        }
      }

      img {
        height: 26px;
        object-position: center;
        object-fit: cover;
      }

      ul {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 0 -20px;
        padding: 0;

        li {
          margin-left: 20px;

          a {
            text-decoration: none;
            color: #ffffff;
            font-size: 14px;
            margin-left: 10px;

            &:hover {
              color: rgb(230, 108, 21);
            }
          }
        }
      }
    }

    .header-content {
      display: flex;
      align-items: center;
      margin-left: -20px;

      .btn-search {
        background: #e2e3e4;
        padding: 5px 9px;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        &:hover {
          background: #b0b5b9;
        }

        .b-icon {
          margin-right: 5px;
        }
      }
    }

    .header-content__right {
      display: flex;
      margin-left: 20px;

      .prescription,
      .cart {
        background: #ffffff;
        border-radius: 3px;
        padding: 4px 8px;
      }

      .prescription {
        &:hover {
          background: rgb(230, 108, 21);
          cursor: pointer;
          color: #ffffff;
        }
      }

      .cart {
        margin-left: 20px;

        &:hover {
          background: rgb(230, 108, 21);
          cursor: pointer;
          color: #ffffff;
        }
      }
    }

    .header-content__left {
      font-size: 15px;
      display: flex;
      border-radius: 10px;
      margin-left: 20px;

      
    }
  }
}
</style>

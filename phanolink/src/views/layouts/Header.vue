<template>
  <div class="wrapper-header container-fluid">
    <div class="header container">
      <div class="header-first">
        <ul class="list-header-first">
          <li>
            <div>
              <img
                class="hotfire"
                src="@/assets/img/hotfire.png"
                alt="hotfire"
              />
              <a href="#">Khuyến mãi HOT</a>
            </div>
          </li>
          <li>
            <div>
              <img class="noti" src="@/assets/img/bell.png" alt="bell" />
              <a href="#">Thông báo của tôi</a>
            </div>
          </li>
          <li>
            <div class="user">
              <img src="@/assets/img/login2x.png" alt="user" />
              <ul class="login-or-regis">
                <li>
                  <LoginSuccess />
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div class="header-second">
        <router-link to="/"
          ><img src="@/assets/img/Logo.png" alt="logo"
        /></router-link>

        <div class="header-content">
          <Search v-model="search" />

          <div class="header-content__right">
            <div class="prescription">
              <img src="@/assets/img/prescription.png" alt="prescription" />
              <span>Tạo toa thuốc</span>
            </div>

            <div class="cart">
              <img src="@/assets/img/cart2x.png" alt="cart2x" />
              <span>Giỏ hàng</span>
            </div>
          </div>
        </div>
      </div>

      <div id="scroll" class="header-third" container>
        <ul>
          <li class="item">
            <img src="@/assets/img/category-product.png" alt="category" />
            <template
              >DANH MỤC SẢN PHẨM
              <ul class="item-drop">
                <li v-for="item in cate" :key="item.id">
                  <router-link
                    :to="{
                      name: 'Product',
                      params: { slug: convertSlug(item.name), id: item.id },
                    }"
                  >
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </template>
          </li>
          <li>
            <img src="@/assets/img/hot-sale.png" alt="hot-sale" /><a href="#"
              >KHUYẾN MÃI HOT</a
            >
          </li>
          <li>
            <img src="@/assets/img/location.png" alt="location" /><a href="#"
              >HỆ THỐNG NHÀ THUỐC</a
            >
          </li>
          <li>
            <img src="@/assets/img/heart2x.png" alt="heart2x" /><a href="#"
              >GÓC SỨC KHỎE</a
            >
          </li>
          <li>
            <img src="@/assets/img/intro.png" alt="intro" /><a href="#"
              >GIỚI THIỆU</a
            >
          </li>
          <li>
            <img src="@/assets/img/question.png" alt="question" /><a href="#"
              >HƯỚNG DẪN</a
            >
          </li>
        </ul>
      </div>

      <Modal />
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";
import Search from "@/views/components/Search.vue";
import LoginSuccess from "@/views/components/auth/LoginSuccess.vue";
import Modal from "@/views/components/Modal";
import { mapGetters } from "vuex";

export default {
  name: "Header",
  mixins: [mixins],
  components: { Search, Modal, LoginSuccess },

  data() {
    return {
      search: "",
      searchResult: [],
    };
  },

  computed: {
    ...mapGetters({
      cate: "category/categoriesList",
    }),
  },

  // created() {
  //   this.$store.dispatch('category/getCategoryList',{root: true});
  // }
};
</script>

<style lang="scss">
@import "@/assets/scss/helpers/variables";

.modal-header {
  display: none !important;
}

.modal-body {
  padding: 4rem 2rem 2rem 2rem !important;
  position: relative;

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 5px;
  }
}

.wrapper-header {
  background: #01adab;
  width: 100%;

  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0 0 0;

    .header-first {
      width: 100%;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          font-size: 14px;
        }

        a {
          text-decoration: none;
          color: $color-white;
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
            color: $color-white;
            padding: 0;
            margin: 0;
            margin-left: 10px;
            li {
              margin: 0;
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
    }

    .header-third {
      width: 100%;
      margin: 15px auto 0 auto;
      padding: 0;

      img {
        margin-right: 10px;
      }

      .item {
        position: relative;
        color: $color-white;
        font-size: 15px;
        cursor: pointer;

        &:hover {
          color: $color-primary;
        }

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
        width: 100%;
        padding: 10px;
        z-index: 1;

        li {
          color: $color-white;
          padding-bottom: 5px;
          transition: 0.4s;
          width: 100%;
          display: flex;

          &:hover {
            margin-left: 2px;
            padding-left: 2px;
          }

          &:hover a {
            padding-left: 2px;
            color: $color-primary;
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
        margin: 0;
        margin-bottom: 20px;

        a {
          text-decoration: none;
          color: #ffffff;
          font-size: 15px;

          &:hover {
            color: $color-primary;
          }
        }
      }
    }

    .header-content {
      display: flex;
      align-items: center;
      margin-left: -20px;
    }

    .header-content__right {
      display: flex;
      margin-left: 15px;

      .prescription,
      .cart {
        background: #ffffff;
        border-radius: 3px;
        padding: 4px 8px;
      }

      .cart {
        background-color: $color-white;
        border: 1px solid $dark;
        margin-left: 15px;

        &:hover {
          cursor: pointer;
          border: 1px solid $color-primary;
          color: $dark;
        }
      }

      .prescription {
        background-color: $color-white;
        border: 1px solid $dark;
        &:hover {
          cursor: pointer;
          border: 1px solid $color-primary;
          color: $dark;
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

.wrap-form {
  position: absolute;
  top: -5%;
  left: 31%;
  display: flex;
  align-items: center;

  .register-form {
    margin-left: 5px;
  }

  .login-form,
  .register-form {
    padding: 17px;
    font-size: $font-20;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }

  .login,
  .register {
    background-color: $primary-green;
    color: $color-white;
    padding: 17px;
    font-size: $font-20;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>

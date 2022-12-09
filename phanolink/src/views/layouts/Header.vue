<template>
  <div class="wrapper-header container-fluid">
    <div class="header container">
      <div class="header-first">
        <ul class="list-header-first">
          <li>
            <div>
              <img
                loading="lazy"
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
              <img
                src="@/assets/img/login2x.png"
                alt="user"
                v-if="!user.name"
              />
              <img
                src="@/assets/img/icons8-person-64.png"
                alt="user-logged"
                v-if="user.name"
              />
              <ul class="login-or-regis">
                <li>
                  <User />
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
          <Search
            v-model="search"
            @search-product="searchProductByHisTory"
            @search-change="searchChange"
          />

          <div id="wrapper-search-products">
            <div class="search-products">
              <div class="search-products--top custom-scrollbar">
                <div class="wrap-products-history" v-if="searchHistory && isShowHistory">
                  <div
                    class="products-history"
                    v-for="(itemHistory, index) in searchHistory"
                    :key="index"
                  >
                  <div class="products-left">
                    <img
                      src="@/assets/img/history.png"
                      alt="history.png"
                      class="icon-search"
                    />
                    <div class="item">{{ itemHistory }}</div>
                  </div>

                  <span @click="removeSearchHistory(itemHistory)">Xóa</span>
                  </div>
                </div>

                  <div class="products-searching" v-show="resultSearch.length > 0">
                    <div class="searching" v-for="(it,index) in resultSearch" :key="index">
                      <img
                      loading="lazy"
                      src="@/assets/img/search.png"
                      alt="search.png"
                      class="icon-search"
                      />
                      <router-link 
                      class="item" 
                          :to="{
                            name: 'ProductDetail',
                            params: {
                              slug: convertSlug(it.name),
                              categoryID: it.category_id,
                              productID: it.id,
                            },
                            query: { page: 1 },
                          }">
                          {{it.name.toLowerCase()}}
                      </router-link>
                    </div>
                  </div>

                <span class="search-not-found" v-text="notFoundText" v-if="isMatched"></span>
              </div>

              <div class="wrap-product-bottom">
                <template v-if="isLoadingCategory">
                  <div class="search-products--skeleton">
                    <div class="item-skeleton"  v-for="itms in 6" :key="itms">
                      <SkeletonImage :width="'160px'" :height="'90px'"/>
                      <SkeletonBar style="marginTop: 5px;" :width="'80%'" :height="height"/>
                    </div>
                  </div>
                </template>

                <template v-else>
                  <div class="search-products--item">
                    <div class="item" v-for="item in cate" :key="item.id">
                    <router-link
                      :to="{
                        name: 'Product',
                        params: { slug: convertSlug(item.name), id: item.id },
                      }"
                    >
                      <img
                        src="@/assets/img/thuc-pham-chuc-nang.png"
                        alt="tpcn"
                        v-if="item.id === 1"
                      />

                      <img
                        src="@/assets/img/duoc-pham.png"
                        alt="duoc pham"
                        v-if="item.id === 2"
                      />

                      <img
                        src="@/assets/img/cham-soc-suc-khoe.jpg"
                        alt="cham soc suc khoe"
                        v-if="item.id === 3"
                      />

                      <img
                        src="@/assets/img/cham-soc-da-cho-nam.png"
                        alt="cham soc da cho nam"
                        v-if="item.id === 4"
                      />

                      <img
                        src="@/assets/img/cham-soc-da-mat.jpg"
                        alt="cham soc da cho nu"
                        v-if="item.id === 5"
                      />

                      <img
                        src="@/assets/img/me-va-be.jpg"
                        alt="me va be"
                        v-if="item.id === 6"
                      />
                      {{ item.name }}
                    </router-link>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>

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

      <div class="header-third" container>
        <ul class="list-header-third">
          <li class="item">
            <img src="@/assets/img/category-product.png" alt="category" />
            <template
              >DANH MỤC SẢN PHẨM
              <ul class="item-drop" v-show="isLoadingCategory">
                <li v-for="i in 6" :key="i">
                  <SkeletonBar
                    :width="width"
                    :height="height"
                    :margin="margin"
                  />
                </li>
              </ul>

              <ul class="item-drop" v-show="!isLoadingCategory">
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
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";
import Search from "@/views/components/Search.vue";
import User from "@/views/components/auth/User.vue";
import { mapGetters } from "vuex";
import SkeletonBar from "@/views/components/skeleton/SkeletonBar.vue";
import SkeletonImage from "@/views/components/skeleton/SkeletonImage.vue";

export default {
  name: "Header",
  mixins: [mixins],
  components: { Search, User, SkeletonBar, SkeletonImage },

  data() {
    return {
      search: "",
      resultSearch: [],
      isMatched: false,
      isShowHistory: true,
      searchHistory: [],
      width: "100%",
      widthSkeletonBar: "10%",
      height: "15px",
      margin: "10px",
      notFoundText: "đề xuất tìm kiếm không phù hợp"
    };
  },

  created() {
    this.$store.dispatch("product/getAllProductByCategory", { root: true });
    if(localStorage.getItem("searchHistory")){
      this.searchHistory = JSON.parse(localStorage.getItem("searchHistory"));
    }
    this.searchChange();
  },

  computed: {
    ...mapGetters({
      cate: "category/categoriesList",
      isLoadingCategory: "category/isLoadCategory",
      user: "auth/allUser",
      allProducts: "product/allProductByCategories",
    }),
    
  },

  watch: {
    "$route.path": {
      handler() {
        let slugs = this.$route.params.slug;
        if(slugs) {
        this.searchHistory.unshift(slugs.replace(/-/g, " "));
        this.searchHistory = this.searchHistory.filter(
        (item, index, arr) => index === arr.indexOf(item)
        );
        localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
        }
      },
      deep: true,
      immediate: true,
    }
  },

  methods: {
     searchChange(search) {
      let arrOrigin = this.allProducts.flat(2); //only have arrays when user searching on input

      if (search && arrOrigin) {
        //method "normalize" removed diacritics of words
        const res  = arrOrigin.filter(item => {
          const result = item.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
          return result.indexOf(search.toLowerCase()) > -1;
        })

        if(res) {
          //"find" method return value matched satisfied with condition
          this.resultSearch = res;
          
        }

        if(this.resultSearch.length === 0) {
          this.isMatched = true;
        }else{
          this.isMatched = false;
          this.isShowHistory = false;
        }
      }

    }, 
    
    searchProductByHisTory(value) {
      const localSearch = this.searchHistory.length <= 11;
      //handle history search and then save to localStorage
      if (localSearch && value) {
        this.searchHistory.unshift(value);
      }
      let abortDuplicate = this.searchHistory.filter(
        (item, index, arr) => index === arr.indexOf(item)
      );
      if (abortDuplicate) this.searchHistory = abortDuplicate;
        localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
      value = "";
      
    },

    removeSearchHistory(item) {
      let indexSearch = this.searchHistory.indexOf(item);
      const searchItemStorage = localStorage.getItem("searchHistory") !== null;
      if(item) {
        this.searchHistory.splice(indexSearch,1);
        
       if(searchItemStorage) {
         localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
       }
      };
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/styles";
@media #{$info-tablet-horizontal} {
  .list-header-third li {
    display: flex;
    margin-right: 10px;
    img {
      height: unset;
      width: 24px;
    }
  }
 
}

::-webkit-scrollbar {
  width: 22px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #b6ccd4;
}

::-webkit-scrollbar-thumb {
  background-color: #abbdc4;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

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
            color: #ee295f;
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
            margin-left: 5px;
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

      li {
        @media #{$info-tablet-horizontal} {
          font-size: 13px;
        }
      }
      .list-header-third {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 20px 0;
        @media #{$info-tablet-horizontal}{
          margin-right: -10px;
          line-break: anywhere;
        }
      }

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
        top: 20px;
        left: 12%;
        gap: 0.5rem;
        background-color: #01adab;
        width: 100%;
        padding: 20px;
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
        a {
          text-decoration: none;
          color: #ffffff;
          font-size: 15px;
          @media #{$info-tablet-horizontal} {
            font-size: 13px;
          }

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
      position: relative;
      @media #{$info-tablet-horizontal} {
        margin-left: 0;
        position: unset;
      }

      #wrapper-search-products {
        display: none;
      }
      .search-products {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 90%;
        left: 4%;
        background-color: $color-white;
        z-index: 999;
        box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.5),
        30px 30px 20px rgba(0, 0, 0, 0.5),
        inset -20px -20px 20px rgba(225, 225, 225, 0.5);
        @media #{$info-tablet-horizontal} {
          top: 19%;
          left: 22%;
        }
      }

      .search-products--top {
        border-bottom: 1px solid grey;
        padding: 20px 0 15px 0;
        max-height: 300px;
        margin-bottom: -10px;
        overflow-x: hidden;
        
         .search-not-found {
            font-size: 14px;
            font-style: italic;
            float: right;
            margin-right: 20px;
          }

        .wrap-products-history {
          overflow: auto;
        }
    
        .delete-item {
          padding: 10px 50px;
          font-size: 15px;
          cursor: default;
        }

        .products-history {
            padding: 10px 20px;
             &:hover {
            cursor: pointer;
            opacity: 0.8;
            background-color: #d6cece;
        }
        .products-left {
            display: flex;
           
          .icon-search {
            margin-right: 10px;
            width: 20px;
            height: 20px;
            object-fit: cover;
          }

          .item {
            text-decoration: none;
            font-size: 15px;
            margin-right: 5px;
            color: $dark;
            width: 490px;
            white-space: nowrap;
            overflow: hidden !important;
            text-overflow: ellipsis;
          }
        }
        }

        .products-searching {
          flex-direction: column;
        }
        .products-searching :hover{
          cursor: pointer;
          opacity: 0.8;
          background-color: #d6cece;
        }

        .products-searching, .products-history {
          display: flex;
        }
          .searching {
            display: flex;
            padding: 10px 20px;
            margin-bottom: 5px;
           
            &:hover {
            cursor: pointer;
            opacity: 0.8;
            background-color: #d6cece;
          }

          .icon-search {
            margin-right: 10px;
            width: 20px;
            height: 20px;
            object-fit: cover;
          }

          .item {
            text-decoration: none;
            font-size: 15px;
            color: $dark;
            width: 500px;
            white-space: nowrap;
            overflow: hidden !important;
            text-overflow: ellipsis;
          }
        }

        .products-history {
          justify-content: space-between;
          span {
            font-size: 14px;
            color: #36c;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }

      .search-products--item {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 20px;
        gap: 5px;

        a {
          display: flex;
          text-align: center;
          font-size: 15px;
          text-decoration: none;
          font-weight: bold;
          padding: 5px;
          flex-direction: column;
          align-items: center;
          margin-bottom: -5px;
          color: $dark;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
          img {
            object-fit: cover;
            width: 90px;
            height: 90px;
            margin-bottom: 5px;
          }
        }
      
      }
      .search-products--skeleton {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 20px;
        gap: 5px;
        .item-skeleton {
          display: flex;
          text-align: center;
          padding: 5px;
          flex-direction: column;
          align-items: center;
          margin-bottom: -5px;
        }
      }
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

<template>
  <div class="header-content__left">
    <input
      id="searching"
      class="search"
      placeholder="Tìm kiếm hoặc nhập [ / ]"
      :value="search"
      autocomplete="off"
      @change="searchChange($event.target.value)"
      @keydown="keyOpenSearch"
      @click="handleClickInput($event)"
    />
    <div
      class="btn-search"
      @click="$emit('search-product', searchProduct)"
      @keydown="handleClickSearch"
    >
      <b-icon icon="search"></b-icon>
      Tìm kiếm
    </div>
  </div>
</template>

<script>
import { keyDownObj, keyDownSearch } from "@/utils/windowObject";
import { mapGetters } from "vuex";

export default {
  name: "Search",

  // model: {
  //   // prop: "search"
  //   event: "change",
  // },

  props: {
    search: {
      type: String,
    },
  },

  data() {
    return {
      searchProduct: "",
      products: [],
    };
  },

  computed: {
    ...mapGetters({
      productSearch: "product/productListByID",
    }),
  },

  methods: {
    searchChange(search) {
      this.searchProduct = search;
      this.$emit("search-change", search);
    },

    handleClickSearch() {
      return keyDownSearch;
    },

    keyOpenSearch() {
      return keyDownObj;
    },

    handleClickInput(e) {
      //e: - input#searching.search
      const searchProduct = document.getElementById("wrapper-search-products"),
        input = document.getElementById("searching");

      window.onclick = function (e) {
        // e - div.header-second

        if (e.srcElement._prevClass !== "search") {
          searchProduct.style.display = "none";
          input.value = "";
        }
      };
      if (e.target) {
        searchProduct.style.display = "block";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/styles";
@media #{$info-tablet-horizontal} {
  .search-products {
    top: 21%;
    left: 23%;
  }
}
// #searching {
//   display: none; /* Hidden by default */
//   position: fixed; /* Stay in place */
//   z-index: 1; /* Sit on top */
//   left: 0;
//   top: 0;
//   width: 100%; /* Full width */
//   height: 100%; /* Full height */
//   overflow: auto; /* Enable scroll if needed */
// }

.header-content__left {
  font-size: 15px;
  display: flex;
  border-radius: 10px;
  margin-left: 20px;
  .search {
    width: 500px;
    border: none;
    outline: none;
    border-radius: 5px 0 0 5px;
    padding: 8px 0 8px 15px;
    background-color: $color-white;
    @media #{$info-tablet-horizontal} {
      width: 350px;
    }
  }

  .btn-search {
    background: #e2e3e4;
    padding: 8px;
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
</style>
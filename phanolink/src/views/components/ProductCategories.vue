/<template>
  <div class="category container">
    <div class="category-header">
      <div class="category-left">
        <img src="@/assets/img/thucpham-green2x.png" :alt="item.name" />
        <span>{{ item.name }}</span>
      </div>
      <router-link :to="{ name: 'Product', params: { slug: convertSlug(item.name), id: item.id } }">
        Xem tất cả
      </router-link>
    </div>
  </div>
</template>

<script>
import mixins from "@/mixins";

export default {
  name: "ProductCategories",
  mixins: [mixins],
  props: { item: Object },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/helpers/_variables";

.category {
  margin-bottom: 20px;
  background-color: $color-bg-white;

  .category-header {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .category-left {
      img {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin-right: 10px;
        width: 20px;
      }

      span {
        font-size: 15px;
      }
    }
  }
}
</style>
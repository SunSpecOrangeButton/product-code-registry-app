<template>
  <div class="product-search-container">
    <!-- <div class="breadcrumbs">
      <router-link to="/" class="nav-link">Home Page</router-link>/
      <router-link to="/" class="nav-link disabled">Product Search</router-link>
    </div>-->
    <div class="download-search-results">
      <a href>Download Search Results</a>
    </div>
    <div class="product-count">
      <br />
      <strong>{{ productCount }} Products</strong>
    </div>
    <div class="product-search-sidebar">
      <component-product-filter></component-product-filter>
    </div>
    <div class="product-search-body">
      <component-product-list></component-product-list>
    </div>
  </div>
</template>


<script>
import ProductFilter from "../components/ProductFilter.vue";
import ProductList from "../components/ProductList.vue";
export default {
  components: {
    "component-product-list": ProductList,
    "component-product-filter": ProductFilter
  },
  computed: {
    productCount() {
      return this.$store.state.productCount;
    }
  }
};
</script>


<style scoped>
.product-search-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 0px 250px 15px auto 25px;
  grid-template-rows: 25px auto;
}

.product-search-sidebar {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

.product-search-body {
  grid-column: 4 / span 2;
  grid-row: 1 / span 2;
}

.breadcrumbs {
  grid-column: 2 / span 3;
  grid-row: 1 / 2;
}

.nav-link {
  display: inline;
  padding: 0;
  padding-right: 5px;
}

.download-search-results {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  font-family: "Roboto Condensed";
}

#sort-by-button {
  float: right;
}

.product-count {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  font-family: "Roboto Condensed";
}

a {
  color: #4285f4;
}
</style>
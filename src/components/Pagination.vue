<template>
  <div class="paginate">
    <b-pagination
      id="top-pagination"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      class="mt-4"
      @input="callPageNumber(currentPage)"
      align="right"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //      currentPage: 1,
      perPage: 20
    };
  },
  methods: {
    callPageNumber(currentPage) {
      let query_string_with_pagination = this.constructURLQueryStringWithPagination(
        currentPage
      );
      return this.$store.commit("callAPI", query_string_with_pagination);
    },
    constructURLQueryStringWithPagination(page_num) {
      let offset_num = 0;
      if (page_num == 0) {
        offset_num = 0;
      } else {
        offset_num = page_num * this.perPage - this.perPage;
      }
      let query_filter_string = "?";
      // console.log(
      //   "Query string on pagination component: " + this.$store.state.queryString
      // );
      if (this.$store.state.queryString) {
        query_filter_string = this.$store.state.queryString + "&";
      }
      let return_query_string =
        this.$store.state.apiURL +
        query_filter_string +
        "limit=" +
        this.perPage +
        "&offset=" +
        offset_num;
      // console.log(return_query_string);
      return return_query_string;
    }
  },
  computed: {
    rows() {
      return this.$store.state.productCount;
    },
    currentPage: {
      get() {
        return this.$store.state.currentPage;
      },
      set(value) {
        this.$store.commit("updateCurrentPage", value);
      }
    }
  }
};
</script>

<style>
a.page-link {
  color: #4b4e52 !important;
}

.page-item.active .page-link {
  background-color: #4285f4 !important;
  border-color: #4285f4 !important;
  color: white !important;
}
</style>
<template>
  <div class="product-public-list-container">
    <component-pagination class="pagination" id="top-buttons"></component-pagination>
    <div class="product-public-list">
      <b-table
        class="product-table"
        striped
        hover
        outlined
        small
        :fields="fields"
        :items="apiData.results"
        :busy="apiLoading"
      >
        <template v-slot:table-busy>
          <div class="text-center text-primary my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>&nbsp; Loading...</strong>
          </div>
        </template>
      </b-table>
    </div>
    <component-pagination class="pagination" id="bottom-buttons"></component-pagination>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
export default {
  props: ["admin_page"],
  data() {
    return {
      fields: [
        {
          key: "ProductCode",
          label: "Product Code",
          thStyle: { width: "274px" },
          thClass: ".col-field-styling"
        },

        {
          key: "ProductType",
          label: "Type",
          thClass: ".col-field-styling",
          thStyle: { width: "87px" }
        },
        {
          key: "ManufacturerName",
          label: "Manufacturer Name",
          thStyle: { width: "164px" },
          thClass: ".col-field-styling"
        },
        // {
        //   key: "ManufacturerCode",
        //   label: "Manufacturer Code"
        // },
        {
          key: "ManufacturerProductID",
          label: "Manufacturer Product ID",
          thStyle: { width: "274px" },
          thClass: ".col-field-styling"
        },
        {
          key: "Description",
          label: "Description",
          thClass: ".col-field-styling"
        }
        // {
        //   key: "AdvancedDetails",
        //   label: "Advanced Details"
        // }
      ]
    };
  },
  beforeCreate() {
    this.$store.commit("callAPI");
  },
  computed: {
    apiData() {
      // console.log("Product List API DATA:");
      // console.log(this.$store.state.apiData);
      return this.$store.state.apiData;
    },
    apiLoading() {
      return this.$store.state.apiLoading;
    },
    hasNext() {
      return this.$store.state.hasNext;
    },
    hasPrevious() {
      return this.$store.state.hasPrevious;
    },
    productCount() {
      return this.$store.state.productCount;
    },
    dataReady() {
      return this.$store.state.dataReady;
    }
  },
  methods: {
    nextPage() {
      this.$store.commit("toggleAPILoading");
      return this.$store.commit("callAPI", this.$store.state.nextPage);
    },
    previousPage() {
      this.$store.commit("toggleAPILoading");

      return this.$store.commit("callAPI", this.$store.state.previousPage);
    }
  },
  components: {
    "component-pagination": Pagination
  }
};
</script>

<style>
.btn {
  margin: 5px;
}
.product-public-list-container {
  display: grid;
  grid-template-rows: 50px 720px 50px;
  grid-template-columns: auto;
  height: 100%;
  padding-top: 5px;
  width: 1163px;
}

li {
  margin-top: -6px;
  margin-bottom: -6px;
}
ul {
  padding: 0;
  list-style: none;
}

.card {
  border: 2px solid #444549;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  height: 227px;
  width: 488px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 33% 1fr;
  grid-template-rows: 140px auto;
  font-family: "Roboto Condensed";
}

.logo {
  width: 140px;
  height: 140px;
  background-color: #d8d8d8;
}

.card-body {
  padding: 0;
  grid-column: 2 / 3;
}

.product-public-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  height: 725px;
  justify-content: flex-start;
  align-content: flex-start;
  grid-row: 2 / 3;
  grid-column: 1 /2;
  width: 1163px;
  overflow-y: auto;
}

a.nav-link {
  padding: 0px;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-left: 400px;
  margin-top: 150px;
  grid-row: 2 / 3;
  grid-column: 1 /2;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#top-buttons {
  grid-row: 1 / 2;
  margin-top: -20px;
  position: relative;
  margin-left: auto;
  margin-right: 0;
}

#bottom-buttons {
  grid-row: 3 / 4;
  position: relative;
  margin-left: auto;
  margin-right: 0;
}

.pagination {
  display: flex;
  justify-content: flex-end;
}

.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited,
.btn-primary:focus,
.btn-primary:disabled {
  background-color: #1d4679;
  border-color: #1d4679;
}

a {
  color: #1d4679;
}

.product-table {
  margin-left: 0px;
}

.product-code-field-col {
  width: 400px;
  text-align: center;
}

.col-field-styling {
  text-align: center;
}

.table {
  margin-bottom: 0px !important;
}
</style>
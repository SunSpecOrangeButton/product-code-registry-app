<template>
  <div class="admin-create-product">
    <h1 class="admin-create-product-title">Create New Product</h1>
    <div class="breadcrumbs">
      <router-link to="/admin" class="nav-link">Admin</router-link>/
      <router-link to="/" class="nav-link disabled">Create Product</router-link>
    </div>
    <form id="admin-create-product-form">
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Code</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="product-code"
            v-model="create_product_form.ProductCode"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="product-name"
            v-model="create_product_form.ProductName"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Manufacturer</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="product-manufacturer"
            v-model="create_product_form.ProductManufacturer"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Model</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="product-model"
            v-model="create_product_form.ProductModel"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Type</label>
        <div class="col-sm-10">
          <select class="custom-select" v-model="create_product_form.ProductType">
            <option value="BATTERY AND ENERGY STORAGE">Battery and Energy Storage</option>
            <option value="DER COMMUNICATION DEVICE">DER Communication Device</option>
            <option value="INVERTER">Inverter</option>
            <option value="PV MODULE">PV Module</option>
            <option value="SUB-COMPONENTS">Sub-components</option>
            <option value="TEST TOOLS">Test Tools</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Region</label>
        <div class="col-sm-10">
          <select class="custom-select" v-model="create_product_form.ProductRegion">
            <option value="NORTH AMERICA">North America</option>
            <option value="ASIA">Asia</option>
            <option value="EUROPE">Europe</option>
            <option value="AFRICA">Africa</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Certificate Type</label>
        <div class="col-sm-10">
          <select class="custom-select" v-model="create_product_form.ProductCertificationType">
            <option value="SUNSPEC RSD">SunSpec Rapid Shutdown</option>
            <option value="IEEE2030.5/CSIP">IEEE2030.5/CSIP</option>
            <option value="SUNSPEC MODBUS">SunSpec Modbus</option>
            <option value="IEEE1815/AN2018">IEEE1815 / AN2018</option>
          </select>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="postProduct">Create</button>
      <button type="button" class="btn btn-primary" @click="clearForm">Clear Form</button>

      <div class="alert alert-success" role="alert" v-show="api_success">Operation successful</div>
      <div class="alert alert-danger" role="alert" v-show="api_failure">Operation failure</div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import constants from "../constants.js";

export default {
  data() {
    return {
      create_product_form: {
        ProductCode: "",
        ProductName: "",
        ProductManufacturer: "",
        ProductModel: "",
        ProductType: "",
        ProductRegion: "",
        ProductCertificationType: "",
        entity: "e11bd349-4f0c-48ed-a3ab-3cf5d4a6a15a"
      },
      api_success: false,
      api_failure: false
    };
  },
  methods: {
    postProduct() {
      let postData = this.create_product_form;
      let axiosConfig = {
        headers: {
          Authorization: constants.TOKEN_AUTH
        }
      };
      let axiosURL = constants.API_ENDPOINT;
      console.log(postData);
      axios
        .post(axiosURL, postData, axiosConfig)
        .then(response => {
          console.log("Post response:" + response);
          this.api_success = true;
          this.alertTimeOut();
        })
        .catch(err => {
          console.log("error: ", err);
          this.api_failure = true;
          this.alertTimeOut();
        });
    },
    alertTimeOut() {
      setTimeout(() => {
        this.api_success = false;
        this.api_failure = false;
      }, 2000);
    },
    clearForm() {
      this.create_product_form.ProductCode = "";
      this.create_product_form.ProductName = "";
      this.create_product_form.ProductManufacturer = "";
      this.create_product_form.ProductModel = "";
      this.create_product_form.ProductType = "";
      this.create_product_form.ProductRegion = "";
      this.create_product_form.ProductCertificationType = "";
    }
  }
};
</script>


<style scoped>
.nav-link {
  display: inline !important;
  padding: 0;
  padding-right: 5px;
}
.admin-create-product {
  display: grid;
  grid-template-rows: 70px 30px auto;
  grid-template-columns: 25px auto 25px;
}
#admin-create-product-form {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
  padding: 25px;
  background-color: white;
  border-width: 2px;
  border-style: solid;
  max-width: 1000px;
}

.admin-create-product-title {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}

#submit-button {
  margin-left: 400px;
}

.breadcrumbs {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  display: inline;
}

.btn {
  margin: 5px;
}

.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited,
.btn-primary:focus,
.btn-primary:disabled {
  background-color: #1d4679 !important;
  border-color: #1d4679;
}
</style>

<!--



-->
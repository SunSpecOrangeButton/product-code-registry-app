<template>
  <div class="admin-create-product">
    <h1 class="admin-create-product-title">Edit Existing Product</h1>
    <div class="breadcrumbs">
      <router-link to="/admin" class="nav-link">Admin</router-link>/
      <router-link to="/admin/edit-products" class="nav-link">Edit Products</router-link>/
      <router-link to="/" class="nav-link disabled">Edit Product</router-link>
    </div>
    <form id="admin-create-product-form">
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Identifier</label>
        <div class="col-sm-10">
          <input
            readonly
            type="text"
            class="form-control"
            id="product-code"
            v-model="edit_product_form.ProductIdentifier"
            :disabled="pageDeleted"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Code</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="product-code"
            v-model="edit_product_form.ProductCode"
            :disabled="pageDeleted"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="product-code"
            v-model="edit_product_form.ProductName"
            :disabled="pageDeleted"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Manufacturer</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="product-code"
            v-model="edit_product_form.ProductManufacturer"
            :disabled="pageDeleted"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Model</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            id="product-code"
            v-model="edit_product_form.ProductModel"
            :disabled="pageDeleted"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="product-code" class="col-sm-2 col-form-label">Product Type</label>
        <div class="col-sm-10">
          <select
            class="custom-select"
            v-model="edit_product_form.ProductType"
            :disabled="pageDeleted"
          >
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
          <select
            class="custom-select"
            v-model="edit_product_form.ProductRegion"
            :disabled="pageDeleted"
          >
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
          <select
            class="custom-select"
            v-model="edit_product_form.ProductCertificationType"
            :disabled="pageDeleted"
          >
            <option value="SUNSPEC RSD">SunSpec Rapid Shutdown</option>
            <option value="IEEE2030.5/CSIP">IEEE2030.5/CSIP</option>
            <option value="SUNSPEC MODBUS">SunSpec Modbus</option>
            <option value="IEEE1815/AN2018">IEEE1815 / AN2018</option>
          </select>
        </div>
      </div>
      <!-- <button type="button" class="btn btn-danger" @click="productDelete">Delete</button> -->
      <div class="mb-1">
        <b-button @click="confirmDelete" variant="danger">Delete</b-button>
      </div>
      <button type="button" class="btn btn-primary" @click="productUpdate">Update</button>
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
      data: {},
      edit_product_form: {
        ProductIdentifier: "",
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
      api_failure: false,
      boxTwo: "",
      pageDeleted: false
    };
  },
  mounted() {
    let axiosConfig = {
      headers: {
        Authorization: constants.TOKEN_AUTH
      }
    };
    let axiosURL = constants.API_ENDPOINT + this.$route.params.id;
    axios
      .get(axiosURL, axiosConfig)
      .then(response => {
        console.log(response);
        this.edit_product_form.ProductIdentifier =
          response.data.ProductIdentifier;
        this.edit_product_form.ProductCode = response.data.ProductCode;
        this.edit_product_form.ProductName = response.data.ProductName;
        this.edit_product_form.ProductManufacturer =
          response.data.ProductManufacturer;
        this.edit_product_form.ProductModel = response.data.ProductModel;
        this.edit_product_form.ProductType = response.data.ProductType;
        this.edit_product_form.ProductRegion = response.data.ProductRegion;
        this.edit_product_form.ProductCertificationType =
          response.data.ProductCertificationType;
      })
      .catch(err => {
        console.log("error: ", err);
      });
  },
  methods: {
    productUpdate() {
      let axiosConfig = {
        headers: {
          Authorization: constants.TOKEN_AUTH
        }
      };
      let axiosURL = constants.API_ENDPOINT + this.$route.params.id + "/";
      axios
        .put(axiosURL, this.edit_product_form, axiosConfig)
        .then(response => {
          this.api_success = true;
          this.alertTimeOut();
        })
        .catch(err => {
          this.api_failure = true;
          this.alertTimeOut();
          console.log("error: ", err);
        });
    },
    productDelete() {
      let axiosConfig = {
        headers: {
          Authorization: constants.TOKEN_AUTH
        }
      };
      let axiosURL = constants.API_ENDPOINT + this.$route.params.id + "/";
      axios
        .delete(axiosURL, axiosConfig)
        .then(response => {
          this.pageDeleted = true;
          this.api_success = true;
          this.alertTimeOut();
        })
        .catch(err => {
          this.api_failure = true;
          this.alertTimeOut();
          console.log("error: ", err);
        });
    },
    alertTimeOut() {
      setTimeout(() => {
        this.api_success = false;
        this.api_failure = false;
      }, 2000);
    },
    confirmDelete() {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm("Please confirm that you want to delete.", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          if (value == true) {
            this.productDelete();
          }
        })
        .catch(err => {
          // An error occurred
        });
    },
    confirmUpdate() {}
  }
};
</script>


<style scoped>
.btn {
  margin: 5px;
}
</style>
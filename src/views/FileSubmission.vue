<!--
Accepts xlsx files

-->

<template>
  <div>
    <b-form-file v-model="file" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    <br />
    <button @click="uploadFile">Submit</button>
  </div>
</template>


<script>
import axios from "axios";
import AUTH_TOKEN from "../constants.js";

export default {
  data() {
    return {
      file: null
    };
  },
  methods: {
    uploadFile() {
      console.log(this.file);
      if (this.file == null) {
        console.log("Please select a file");
      } else {
        //let postData = this.file;
        let axiosConfig = {
          headers: {
            Authorization: AUTH_TOKEN,
            "Content-Type": "multipart/form-data"
          }
        };
        let axiosURL = "http://localhost:8000/api/v1/submission/";
        console.log(this.file);
        let formData = new FormData();
        formData.append("file", this.file);
        console.log(formData);
        axios
          .post(axiosURL, formData, axiosConfig)
          .then(response => {
            console.log(response.status);
          })
          .catch(err => {
            console.log("error: ", err);
          });
      }
    }
  }
};
</script>


<style>
</style>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import constants from "./constants.js";

Vue.use(Vuex);

// TODO: Refactor API calls so hasNext and hasPrevious are set via a function to reduce repeated code. will need to move some mutations to actions
// Add query string to set offsets against for pagination
export default new Vuex.Store({
  state: {
    apiData: [],
    apiURL: constants.API_ENDPOINT,
    apiLoading: true,
    hasNext: false,
    hasPrevious: false,
    currentPage: 1,
    nextPage: "",
    previousPage: "",
    productCount: "",
    dataReady: false,
    perPage: 20,
    queryString: ""
  },
  getters: {
    apiData: state => state.apiData
  },
  mutations: {
    callAPI(state, payload) {
      if (payload == null) {
        axios
          .get(state.apiURL, {
            headers: {
              Authorization: constants.TOKEN_AUTH
            }
          })
          .then(response => {
            state.apiLoading = false;
            state.apiData = response.data;
            //console.log("Test1");
            //console.log(state.apiData);
            // state.currentPage = 1;
            state.productCount = response.data.count;

            if (response.data.next == null) {
              state.hasNext = false;
            } else {
              state.hasNext = true;
              state.nextPage = response.data.next;
            }
            if (response.data.previous == null) {
              state.hasPrevious = false;
            } else {
              state.hasPrevious = true;
              state.previousPage = response.data.previous;
            }

            state.dataReady = true;
          });
      } else if (payload.charAt(0) == "?") {
        state.queryString = payload;
        // console.log("Test2");

        // console.log(state.queryString);
        let query_string = state.apiURL + payload;

        axios
          .get(query_string, {
            headers: {
              Authorization: constants.TOKEN_AUTH
            }
          })
          .then(response => {
            state.apiData = response.data;
            // console.log(state.apiData);

            state.apiLoading = false;
            state.productCount = response.data.count;
            // if (response.data.previous == null) {
            //   state.currentPage = 1;
            // } else {
            //   state.currentPage =
            //     payload.substring(
            //       payload.search("offset=") + 7,
            //       payload.length
            //     ) /
            //       6 +
            //     1;
            // }

            if (response.data.next == null) {
              state.hasNext = false;
            } else {
              state.hasNext = true;
              state.nextPage = response.data.next;
            }
            if (response.data.previous == null) {
              state.hasPrevious = false;
            } else {
              state.hasPrevious = true;
              state.previousPage = response.data.previous;
            }
            state.dataReady = true;
          });
      } else {
        let query_string = payload;
        axios
          .get(query_string, {
            headers: {
              Authorization: constants.TOKEN_AUTH
            }
          })
          .then(response => {
            state.apiData = response.data;
            // console.log("Test3");

            // console.log(state.apiData);

            state.productCount = response.data.count;
            state.apiLoading = false;
            // if (response.data.previous == null) {
            //   state.currentPage = 1;
            // } else {
            //   state.currentPage =
            //     payload.substring(
            //       payload.search("offset=") + 7,
            //       payload.length
            //     ) /
            //       6 +
            //     1;
            // }

            if (response.data.next == null) {
              state.hasNext = false;
            } else {
              state.hasNext = true;
              state.nextPage = response.data.next;
            }
            if (response.data.previous == null) {
              state.hasPrevious = false;
            } else {
              state.hasPrevious = true;
              state.previousPage = response.data.previous;
            }
            state.dataReady = true;
          });
      }
    },
    toggleAPILoading(state) {
      state.apiLoading = !state.apiLoading;
    },
    toggleDataReady(state) {
      state.dataReady = false;
    },
    clearQueryString(state) {
      state.queryString = "";
    },
    updateCurrentPage(state, value) {
      state.currentPage = value;
    }
  }
});

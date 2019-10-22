import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomePage.vue";
import About from "./views/AboutPage.vue";
import ProductSearchPage from "./views/ProductSearchPage.vue";
import ProductPage from "./views/ProductPage.vue";
import AdminPage from "./views/AdminPage.vue";
import AdminCreateProducts from "./views/AdminCreateProducts.vue";
import AdminEditProducts from "./views/AdminEditProducts.vue";
import AdminEditProduct from "./views/AdminEditProduct.vue";
import Login from "./views/Login";
import FileSubmission from "./views/FileSubmission.vue";
import ManufacturerSearchPage from "./views/ManufacturerSearchPage";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    { path: "/", redirect: "/product-search" },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: Login
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: About
    // },
    {
      path: "/product-search",
      name: "product-search",
      component: ProductSearchPage
    },
    // {
    //   path: "/product-page/:id",
    //   name: "product-page",
    //   component: ProductPage
    // },
    // {
    //   path: "/admin",
    //   name: "admin",
    //   component: AdminPage
    // },
    // {
    //   path: "/admin/create-products",
    //   name: "create-products",
    //   component: AdminCreateProducts
    // },
    // {
    //   path: "/admin/edit-products",
    //   name: "edit-products",
    //   component: AdminEditProducts
    // },
    // {
    //   path: "/admin/edit-products/:id",
    //   name: "edit-product",
    //   component: AdminEditProduct
    // },
    {
      path: "/submission",
      name: "submission",
      component: FileSubmission
    }
    // {
    //   path: "/manufacturer-search",
    //   name: "manufacturer-search",
    //   component: ManufacturerSearchPage
    // }
  ]
});

<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-custom">
    <router-link to="product-search" class="navbar-brand">
      <img id="sslogo" src="@/assets/sslogo.png" />
      <h1 class="app-title">Product Code Registry</h1>
    </router-link>
    <ul class="navbar-nav ml-auto">
      <!-- <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>-->
      <!-- <li class="nav-item">
        <router-link to="/product-search" class="nav-link">Product Search</router-link>
      </li>-->
      <!-- <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>
      </li>
      -->
      <li class="nav-item">
        <router-link :to="{ name: 'product-search' }" class="nav-link">Product Search</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'submission' }" class="nav-link">Submit</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link :to="{ name: 'manufacturer-search' }" class="nav-link">Manufacturer Search</router-link>
      </li>

      <li class="nav-item">
        <router-link :to="{name: 'admin'}" class="nav-link">Admin</router-link>
      </li>-->
      <!-- <li class="nav-item">
        <router-link to="/login" class="nav-link">Login</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href id="logout">Logout</a>
      </li>-->
    </ul>
  </nav>
</template>  

<style scoped>
.navbar-custom .navbar-brand:hover {
  color: #3b3932;
}
nav {
  font-family: "Roboto Condensed";
  font-size: 18px;
  font-style: normal;
  display: grid;
  grid-template-columns: 600px 1fr;
  padding-left: 20px;
  border-bottom: 1px solid #dadce0;
  padding-top: 12px;
}

.navbar-custom {
  background-color: white;
}

.navbar-custom .navbar-brand {
  color: #3b3932;
}

#sslogo {
  margin-top: -8px;

  width: auto;
  height: 50px;
}

.nav-link {
  color: #3b3932 !important;
}

.app-title {
  font-family: "Roboto";
  font-size: 25px;
  font-weight: bold;
  display: inline;
  text-transform: uppercase;
  margin-left: 5px;
}
</style>



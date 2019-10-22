<template>
  <div class="admin-container">
    <h1 class="title">Site administration</h1>

    <!-- <div class="breadcrumbs">
      <router-link to="/" class="nav-link disabled">Admin</router-link>
    </div>-->
    <div class="admin-options">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Database Models</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Entity</td>
            <td class="admin-function">
              <a class="nav-link disabled">Create New</a>
              <a class="nav-link disabled">Edit</a>
            </td>
          </tr>
          <tr class="highlight-row">
            <td>Product</td>
            <td class="admin-function">
              <router-link to="/admin/create-products" class="nav-link">Create New</router-link>
              <router-link to="/admin/edit-products" class="nav-link">Edit</router-link>
            </td>
          </tr>
          <tr>
            <td>Certification</td>
            <td class="admin-function">
              <a class="nav-link disabled">Create New</a>
              <a class="nav-link disabled">Edit</a>
            </td>
          </tr>
          <tr>
            <td>Test</td>
            <td class="admin-function">
              <a class="nav-link disabled">Create New</a>
              <a class="nav-link disabled">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="admin-logs">
      <table class="table" id="admin-table">
        <thead>
          <tr>
            <th scope="col">Admin logs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(No recent activity)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#admin-table {
  border-style: none;
}

.table {
  border-style: solid;
  border-width: 1px;
}

.admin-logs {
  grid-column: 4 / 5;
  grid-row: 3 / 4;
}

.title {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.breadcrumbs {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.admin-function {
  text-align: right;
}

.admin-options {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
.admin-container {
  display: grid;
  grid-template-columns: 100px 500px 25px 500px 1fr;
  grid-template-rows: 70px 30px auto;
}

.nav-link {
  display: inline;
  padding: 0;
  padding-right: 10px;
}

thead th {
  background-color: #e66026;
  color: white;
}

.highlight-row {
  background-color: #f0f8ff;
}
</style>
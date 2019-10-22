<template>
  <div class="login-container">
    <div class="card text-center" id="login-card">
      <div class="card-header">Sign In</div>
      <div class="card-body">
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <a href="#" class="btn btn-primary">Login</a>
      </div>
      <div class="card-footer text-muted">Forgot Password?</div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.login-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
}

#login-card {
  grid-column: 2 / 3;
  max-height: 400px;
}
</style>
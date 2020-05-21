<template>
  <ul class="nav nav-pills">
    <router-link tag="li" to="/" active-class="nav-item active" exact>
      <a class="nav-link">Home</a>
    </router-link>
    <router-link tag="li" to="/user" active-class="nav-item active">
      <a class="nav-link">User</a>
    </router-link>
  </ul>
</template>



<style scoped>
.nav li.router-link-active,
.nav li.router-link-exact-active {
  background-color: #007bff;
  border-radius: 4px;
  cursor: pointer;
}

.nav li.router-link-active a,
.nav li.router-link-exact-active a {
  color: white;
}
</style>>

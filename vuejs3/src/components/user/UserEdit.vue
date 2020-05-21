<template>
  <div>
    <h3>Edit the User</h3>
    <p>Local: {{ $route.query.local }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <button class="btn btn-danger">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra data</p>
  </div>
</template>

<style scroped>
#data {
  width: 100%;
  height: 500px;
  background-color: aquamarine;
}
</style>
<template>
  <div class="col-sm-12 col-md-6 col-lg-4 mt-2 mb-3">
    <div class="card">
      <div class="card-heading bg-success p-2">
        {{stock.name}}
        <small>{{stock.price}}</small>
      </div>
      <div class="card-body d-inline-flex justify-content-center align-middle">
        <div>
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientFunds}"
          />
        </div>
        <div>
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0"
          >{{ insufficientFunds? 'InsufficientFund': 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.btn {
  position: relative;
  padding: 10px 10px;
  top: -6px;
}
.danger {
  border: 1px solid red;
}
</style>
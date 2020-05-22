<template>
  <div class="col col-sm-12 col-md-12 col-lg-4 mt-2 mb-3">
    <div class="card">
      <div class="card-heading bg-info p-2">
        {{stock.name}}
        <small>{{ stock.price }} | Quantity: {{ stock.quantity }}</small>
      </div>
      <div class="card-body d-inline-flex justify-content-center align-middle">
        <div>
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
          />
        </div>
        <div>
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity <= 0"
          >{{insufficientQuantity? 'Not enough Stocks': 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };
      this.placeSellOrder(order);
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
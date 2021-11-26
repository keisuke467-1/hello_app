<template>
  <div class="alert alert-primary">
    <h1>{{ data.title }}</h1>
    <p class="mt-3 h5">{{ $store.state.message }}</p>
    <hr />
    <div
      class="alert alert-dark"
      @click="$store.dispatch('doit')">
      
      <a @click.stop="$store.commit('reset')">
        clicked:{{ $store.state.counter }}
      </a>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const data = reactive({
      title: "Vuex",
    });
    return {
      data,
    };
  },
};
</script>
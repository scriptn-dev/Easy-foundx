<template>
  <div></div>
</template>

<script>
export default {
  data: () => ({
    selection: 1,
  }),

  methods: {
    reserve() {
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>

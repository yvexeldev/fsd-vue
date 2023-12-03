<template>
    <component :is="props.tagName" class="header"><slot></slot> </component>
</template>

<script setup lang="ts">
interface Props {
    tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const props = defineProps<Props>();
</script>

<style scoped>
.header {
    font-style: normal;
    font-weight: 150%;
}

h1 {
    font-size: 64px !important;
}

h2 {
    font-size: 48px !important;
}

h3 {
    font-size: 36px !important;
}

h4 {
    font-size: 24px !important;
}

h5 {
    font-size: 18px !important;
}
</style>

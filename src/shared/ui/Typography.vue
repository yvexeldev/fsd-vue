<template>
    <component :is="'p'" :class="['typography', `size_${props.size}`, props.bold && 'bold']"><slot></slot> </component>
</template>

<script setup lang="ts">
interface Props {
    bold?: boolean;
    size: 'xs' | 's' | 'm' | 'l' | 'xl';
}

const props = defineProps<Props>();
</script>

<style scoped>
.typography {
    font-style: normal;
    font-weight: 150%;
}

.size_xs {
    font-size: 12px;
}

.size_s {
    font-size: 16px;
}

.size_m {
    font-size: 18px;
}

.size_l {
    font-size: 24px;
}

.size_xl {
    font-size: 36px;
}

.bold {
    font-weight: 700;
}
</style>

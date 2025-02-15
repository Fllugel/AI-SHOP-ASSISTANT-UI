<template>
  <html lang="en">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </html>
</template>

<script setup>
onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>
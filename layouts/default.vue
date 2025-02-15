<template>
  <div class="flex bg-white text-black dark:bg-black dark:text-white">
    <SidebarProvider>
      <Sidebar class="border-r-4 border-black dark:border-white flex flex-col justify-between">
        <div>
          <SidebarHeader class="flex items-center flex-row justify-center border-b-2 border-black dark:border-white">
            <component :is="AcademicCapIcon" class="mr-2 h-5 w-5" />
            <h1 class="text-2xl font-bold">Store ChatBot</h1>
          </SidebarHeader>

          <SidebarGroup>
            <SidebarContent>
              <div v-for="(item, index) in items" :key="index" class="mb-4 w-full">
                <NuxtLink :to="item.link" class="w-full">
                  <Button variant="ghost" class="w-full text-black dark:text-white flex justify-start items-center font-bold px-6 text-lg">
                    <component :is="item.icon" class="mr-4 h-5 w-5" />
                    {{ item.title }}
                  </Button>
                </NuxtLink>
              </div>
            </SidebarContent>
          </SidebarGroup>
        </div>

        <SidebarFooter>
          <button @click="toggleTheme" class="flex items-center justify-center w-full p-4">
            <component :is="themeIcon" class="h-6 w-6" />
          </button>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <slot/>
      </SidebarInset>

    </SidebarProvider>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { HomeIcon, ChatBubbleLeftIcon, AcademicCapIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

const items = ref([
  { title: 'Home', icon: HomeIcon, link: '/' },
  { title: 'Chat', icon: ChatBubbleLeftIcon, link: '/chat' },
])

const isDark = ref(true)

const themeIcon = computed(() => (isDark.value ? SunIcon : MoonIcon))

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>
<template>
  <div class="flex bg-black text-white">
    <SidebarProvider>
      <Sidebar class="border-r-4 border-white">
        <SidebarHeader class="flex items-center flex-row justify-center border-b-2 border-white">
          <component :is="AcademicCapIcon" class="mr-2 h-5 w-5" />
          <h1 class="text-2xl font-bold">Store ChatBot</h1>
        </SidebarHeader>

        <SidebarGroup>
          <SidebarContent>
            <div v-for="(item, index) in items" :key="index" class="mb-4 w-full">
              <NuxtLink :to="item.link" class="w-full">
                <Button variant="ghost" class="w-full text-white flex justify-start items-center font-bold px-6 text-lg">
                  <component :is="item.icon" class="mr-4 h-5 w-5" />
                  {{ item.title }}
                </Button>
              </NuxtLink>
            </div>
          </SidebarContent>
        </SidebarGroup>
      </Sidebar>

      <SidebarInset>
        <slot/>
      </SidebarInset>

    </SidebarProvider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { HomeIcon, ChatBubbleLeftIcon, AcademicCapIcon } from '@heroicons/vue/24/solid'

const items = ref([
  { title: 'Home', icon: HomeIcon, link: '/' },
  { title: 'Chat', icon: ChatBubbleLeftIcon, link: '/chat' },
])
</script>

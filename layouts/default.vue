<template>
  <div class="flex bg-black text-white">
    <SidebarProvider>
      <Sidebar class="flex border-white flex-col">
        <div>
          <SidebarHeader class="flex items-center flex-row justify-center border-b">
            <Icon name="heroicons-solid:academic-cap" class="mr-2 h-5 w-5" />
            <h1 class="text-2xl font-bold">Store ChatBot</h1>
          </SidebarHeader>

          <SidebarGroup>
            <SidebarContent>
              <div v-for="(item, index) in items" :key="index" class="w-full">
                <NuxtLink :to="item.link" class="w-full">
                  <Button
                      variant="ghost"
                      class="w-full text-white flex justify-start items-center font-bold px-6 text-lg"
                  >
                    <Icon :name="item.icon" class="mr-4 h-5 w-5" />
                    {{ item.title }}
                  </Button>
                </NuxtLink>
              </div>
            </SidebarContent>
          </SidebarGroup>
        </div>

        <SidebarFooter>
          <!-- Footer content goes here -->
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <keep-alive>
          <slot />
        </keep-alive>
      </SidebarInset>
    </SidebarProvider>
  </div>
</template>

<script setup>
const items = ref([
  { title: 'Home', icon: 'heroicons-solid:home', link: '/' },
  { title: 'Chat', icon: 'heroicons-solid:chat-alt', link: '/chat' },
])
</script>

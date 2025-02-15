<template>
  <div class="flex flex-col p-3 h-screen w-full bg-white text-black dark:bg-black dark:text-white">
    <!-- Inner Padding Wrapper -->
    <div class="flex flex-col h-full border-2 border-black dark:border-white rounded-lg bg-white dark:bg-black">
      <!-- Chat Messages Display -->
      <div class="flex-1 overflow-y-auto space-y-4 bg-white dark:bg-black rounded-t-lg">
        <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex p-3"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
              class="p-3 max-w-xs text-2xl border-2 border-black dark:border-white font-bold rounded-lg"
              :class="(message.role === 'user' || message.role === 'echo')
              ? 'bg-white dark:bg-black text-black dark:text-white'
              : 'bg-white dark:bg-black text-black dark:text-white'"
          >
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>

      <!-- Message Input Field -->
      <div class="border-t-2 border-black dark:border-white p-4 bg-white dark:bg-black rounded-b-lg">
        <form @submit.prevent="sendMessage" class="flex">
          <Input
              v-model="userInput"
              placeholder="Type your message..."
              class="flex-1 mr-2 bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white placeholder-black dark:placeholder-white rounded-lg text-2xl p-2 placeholder:text-2xl h-12 leading-12"
          />
          <Button type="submit" variant="default"
                  class="border-black dark:border-white rounded-lg p-2 h-12 flex items-center justify-center text-2xl">
            Send
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const messages = ref([])
const userInput = ref('')

async function sendMessage() {
  if (!userInput.value.trim()) return

  // Add the user's message (aligned to the right)
  messages.value.push({text: userInput.value, role: 'user'})

  // Simulate an echo response (using the same style as the user, but aligned to the left)
  const simulatedResponse = `Echo: ${userInput.value}`
  messages.value.push({text: simulatedResponse, role: 'echo'})

  // Clear the input
  userInput.value = ''
}
</script>
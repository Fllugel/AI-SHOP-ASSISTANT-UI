<template>
  <div class="flex flex-col h-screen w-full p-2 bg-black">
    <!-- Inner Padding Wrapper -->
    <div class="flex flex-col h-full border border-white rounded-lg bg-black dark:text-white">
      <!-- Chat Messages Display -->
      <div class="flex-1 overflow-y-auto space-y-4 bg-black rounded-t-lg">
        <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex p-3"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
              class="p-3 max-w-xs text-sm border border-white font-bold rounded-lg"
              :class="(message.role === 'user' || message.role === 'echo')
              ? 'bg-black text-white'
              : 'bg-black text-white'"
          >
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>

      <!-- Message Input Field -->
      <div class="border-t border-white p-4 bg-black rounded-b-lg">
        <form @submit.prevent="sendMessage" class="flex">
          <Input
              v-model="userInput"
              placeholder="Type your message..."
              class="flex-1 mr-2 bg-black text-white border border-white placeholder-white rounded-lg p-2"
          />
          <Button type="submit" variant="default" class="border-white rounded-lg p-2">Send</Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([])
const userInput = ref('')

async function sendMessage() {
  if (!userInput.value.trim()) return

  // Add the user's message (aligned to the right)
  messages.value.push({ text: userInput.value, role: 'user' })

  // Simulate an echo response (using the same style as the user, but aligned to the left)
  const simulatedResponse = `Echo: ${userInput.value}`
  messages.value.push({ text: simulatedResponse, role: 'echo' })

  // Clear the input
  userInput.value = ''
}
</script>

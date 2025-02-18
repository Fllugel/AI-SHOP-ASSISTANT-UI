<template>
  <div class="flex flex-col p-3 h-screen w-full bg-black text-white">
    <!-- Inner Padding Wrapper -->
    <div class="flex flex-col h-full border-2 border-white rounded-lg bg-black">
      <!-- Chat Messages Display -->
      <div class="flex-1 overflow-y-auto space-y-4 bg-black rounded-t-lg">
        <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex p-3"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
              class="p-3 max-w-xs text-2xl border-2 border-white font-bold rounded-lg bg-black text-white"
          >
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>

      <!-- Message Input Field -->
      <div class="border-t-2 border-white p-4 bg-black rounded-b-lg">
        <form @submit.prevent="sendMessage" class="flex">
          <Input
              v-model="userInput"
              placeholder="Type your message..."
              class="flex-1 mr-2 bg-black text-white border-2 border-white placeholder-white rounded-lg text-2xl p-2 placeholder:text-2xl h-12 leading-12"
          />
          <Button
              type="submit"
              variant="default"
              class="border-white rounded-lg p-2 h-12 flex items-center justify-center text-2xl"
          >
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

  messages.value.push({ text: userInput.value, role: 'user' })

  const simulatedResponse = `Echo: ${userInput.value}`
  messages.value.push({ text: simulatedResponse, role: 'echo' })

  userInput.value = ''
}
</script>

<template>
  <div class="flex flex-col p-3 h-screen w-full bg-black text-white">
    <div class="flex flex-col h-full border-2 border-white rounded-lg bg-black">
      <!-- Chat Messages -->
      <div ref="chatContainer" class="flex-1 overflow-y-auto space-y-4 bg-black rounded-t-lg p-3">
        <div
            v-for="(message, index) in chatStore.messages"
            :key="index"
            class="flex p-3"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div class="p-3 text-lg border-2 border-white font-bold rounded-lg text-white max-w-full break-words whitespace-pre-wrap bg-gray-950">
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>

      <!-- Message Input Field -->
      <div class="border-t-2 border-white p-4 bg-black rounded-b-lg">
        <form @submit.prevent="handleSend" class="flex">
          <Input
              v-model="userInput"
              placeholder="Type your message..."
              class="flex-1 mr-2 bg-black text-white border-2 border-white placeholder-white rounded-lg text-2xl p-2 placeholder:text-2xl h-12 leading-12"
          />
          <Button type="submit" variant="default" class="border-white rounded-lg p-2 h-12 flex items-center justify-center text-2xl">
            Send
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const chatStore = useChatStore()
const { messages } = storeToRefs(chatStore)
const { sendMessage } = useChat()
const userInput = ref('')
const chatContainer = ref(null)
const userId = ref('')

// Generate or retrieve user ID
function generateUserId() {
  return 'user-' + Math.random().toString(36).slice(2, 11)
}

onMounted(() => {
  const storedUserId = localStorage.getItem('chatUserId')
  userId.value = storedUserId || generateUserId()
  localStorage.setItem('chatUserId', userId.value)
})

// Auto-scroll to bottom when messages update
watch(
    messages,
    async () => {
      await nextTick()
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight
      }
    },
    { deep: true }
)

// Handle sending messages with placeholder
async function handleSend() {
  const message = userInput.value.trim()
  if (!message) return

  // Add user message to Pinia store
  chatStore.addMessage('user', message)

  // Clear the input field
  userInput.value = ''

  // Add a temporary bot response
  const placeholderId = Date.now()
  chatStore.addMessage('bot', 'Typing...')

  // Get the real bot response
  const botResponse = await sendMessage(userId.value, message)

  // Replace the placeholder with the actual bot response
  if (botResponse) {
    chatStore.messages.pop()
    chatStore.addMessage('bot', botResponse)
  } else {
    chatStore.messages.pop()
    chatStore.addMessage('bot', 'Error: Could not get a response.')
  }
}
</script>

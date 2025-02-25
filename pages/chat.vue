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
            <template v-if="message.items">
              <div v-if="message.text" class="mb-2">
                <p>{{ message.text }}</p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div
                    v-for="(item, key) in message.items"
                    :key="key"
                    class="flex border-2 border-white bg-black p-4 rounded-lg flex-col items-center"
                >
                  <div class="w-full aspect-square mb-2">
                    <img
                        :src="item.image_link || placeholderUrl"
                        alt="Product Image"
                        class="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div class="text-lg font-bold text-white mb-2 text-center max-w-lg line-clamp-2">
                    {{ item.row_index }}
                  </div>
                  <!-- Show Buy button if link exists, otherwise show disabled button -->
                  <template v-if="item.website_link">
                    <a
                        :href="item.website_link"
                        target="_blank"
                        class="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded w-full text-center"
                    >
                      Buy
                    </a>
                  </template>
                  <template v-else>
                    <button
                        disabled
                        class="bg-black text-white border font-bold py-2 px-4 rounded w-full text-center cursor-not-allowed truncate"
                    >
                      Not Available
                    </button>
                  </template>
                </div>
              </div>
            </template>
            <!-- Otherwise just show text -->
            <template v-else>
              <p>{{ message.text }}</p>
            </template>
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
const placeholderUrl = '/placeholder_large_dark.jpg'

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

// Handle sending messages
async function handleSend() {
  const message = userInput.value.trim()
  if (!message) return

  // Add user message to store
  chatStore.addMessage('user', message)
  userInput.value = ''

  // Add a temporary placeholder for the bot response
  chatStore.addMessage('bot', 'Typing...')

  // Send the message and wait for a response
  const result = await sendMessage(userId.value, message)

  // Remove the temporary placeholder
  chatStore.messages.pop()

  // Determine which data was returned
  const hasResponse = result && result.response && result.response.trim().length > 0
  const hasItems = result && result.items && Object.keys(result.items).length > 0

  if (hasResponse && hasItems) {
    // Both text and items returned – include both in the message.
    chatStore.addMessage('bot', { text: result.response, items: result.items })
  } else if (hasResponse) {
    // Only text returned.
    chatStore.addMessage('bot', result.response)
  } else if (hasItems) {
    // Only items returned.
    chatStore.addMessage('bot', { items: result.items })
  } else {
    // If neither was returned, add an error message.
    chatStore.addMessage('bot', 'Error: Could not get a response.')
  }
}
</script>

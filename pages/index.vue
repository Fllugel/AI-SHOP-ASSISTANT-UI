<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-10">
    <!-- Header Section -->
    <header class="text-center mb-6 my-5">
      <h1 class="text-5xl font-bold mb-4">Store ChatBot Overview</h1>
      <p class="text-xl">
        Your intelligent assistant for a seamless shopping experience.
      </p>
    </header>

    <!-- Main Content Section -->
    <section class="max-w-4xl w-full p-8 bg-gray-800 rounded-lg shadow-xl">
      <p class="text-lg leading-relaxed mb-6">
        Store ChatBot is an intelligent assistant for online stores. Its main purpose is to help users during the shopping process by providing personalized recommendations and streamlining the interaction with the store.
      </p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Bot Functionality:</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Automatic Processing of Customer Queries:</strong> The bot is capable of receiving and analyzing user messages, delivering appropriate responses without human intervention.</li>
        <li><strong>Chat History Analysis:</strong> It can review previous customer queries, which helps improve the quality of responses and ensures a contextual conversation.</li>
        <li><strong>Use of the RAG (Retrieval-Augmented Generation) Algorithm:</strong> By combining information retrieval with generative models, the bot delivers accurate and informative answers based on available data.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Tools Overview:</h2>
      <p class="text-lg leading-relaxed mb-6">
        The system employs several tools to distribute tasks, with each tool dedicated to a specific function (e.g., product search, providing store information, holiday recommendations). This approach enables the bot to operate quickly, accurately, and flexibly, ensuring a better user experience.
      </p>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Tools and Capabilities:</h2>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Product Lookup Tool:</strong> This tool allows users to search for and retrieve detailed information about products available in the store. It enables searching by product ID within the database. If a product is found, the bot returns:</li>
        <ul class="list-disc pl-6 mb-4 space-y-1">
          <li>id: The unique product identifier.</li>
          <li>row index: The product’s index (rowid) in the database.</li>
          <li>website link: The URL of the product's webpage.</li>
          <li>image link: The URL of the product's image.</li>
        </ul>
        <li><strong>Shop Info Tool:</strong> This tool retrieves store information from a file and provides users with general details about the company, such as its core values, contact information, digital metrics, and employee welfare information.</li>
        <li><strong>Holiday Info Tool:</strong> This tool offers product recommendations tailored to a specific holiday. It can be used to suggest appropriate products for a given festive occasion.</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-8 mb-4">Database Information:</h2>
      <p class="mb-4">The database contains a table that stores product information for the online store. The table includes the following fields:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Product ID - unique identifier of the product;</li>
        <li>Category - the main category the product belongs to;</li>
        <li>Sub Category - a more specific classification within the main category;</li>
        <li>Product Title - the name of the product;</li>
        <li>Stock Product - the quantity of the product available;</li>
        <li>Product Price - the price of the product;</li>
        <li>Product Image - URL link to the product's image;</li>
        <li>Product URL - URL link to the product's page on the website.</li>
      </ul>
    </section>

    <!-- Footer Section -->
    <footer class="mt-10">
      <p class="text-sm text-gray-400">
        Developed with passion by the CoverAI Team.
      </p>
    </footer>
  </div>
</template>

<script setup>
</script>

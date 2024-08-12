# AI Customer Support Bot 🤖

This project is an AI-powered customer support bot for a car dealership, built using Next.js, Material-UI, and OpenAI (or other AI model services like Hugging Face). The bot can assist customers by providing information about various car models, answering common questions, and managing chat sessions.

## Features

- **Interactive Chat Interface**: Users can interact with the bot through a modern, sleek UI that mimics the look of popular messaging apps.
- **Session Management**: Users can start a new session or end the current one, with clear notifications displayed within the chat box.
- **Dynamic Responses**: The bot uses AI to provide contextually relevant responses to customer inquiries.
- **Custom Bot Avatar**: The bot displays a custom avatar for its messages, enhancing the visual experience.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Add your API key**:
    - Create a `.env.local` file in the root of the project.
    - Add your OpenAI API key (or Hugging Face API key) to the file:
      ```bash
      NEXT_PUBLIC_OPENAI_API_KEY=your-api-key-here
      ```
    - For Google Gemini API:
      ```bash
      NEXT_PUBLIC_GOOGLE_API_KEY=your-google-api-key-here
      ```

4. **Move the avatar image**:
    - Ensure the `robot-avatar.png` file is placed in the `public` directory:
      ```
      my-ai-support-bot/public/robot-avatar.png
      ```

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev

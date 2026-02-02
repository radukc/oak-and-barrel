"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function ChatWidget() {
  useEffect(() => {
    const initChat = async () => {
      const { createChat } = await import("@n8n/chat");

      const username = "oak-barrel";
      const password = "oak-barrel#123";
      const credentials = btoa(`${username}:${password}`);

      createChat({
        webhookUrl:
          "https://raduc.app.n8n.cloud/webhook/f600a73e-2140-4bea-a58b-c52dc31fd611/chat",
        webhookConfig: {
          method: "POST",
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        },
        mode: "window",
        showWelcomeScreen: false,
        initialMessages: [
          "Welcome to Oak & Barrel! How can I help you today?",
          "I can assist with reservations, menu questions, or general inquiries.",
        ],
        i18n: {
          en: {
            title: "Oak & Barrel Assistant",
            subtitle: "Ask us anything about our restaurant",
            footer: "",
            getStarted: "New Conversation",
            inputPlaceholder: "Type your message...",
          },
        },
      });
    };

    initChat();
  }, []);

  return null;
}

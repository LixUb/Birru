// components/AIChatDialog.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Loader2, Sparkles } from "lucide-react";

const AIChatDialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'assistant' | 'user'; content: string }[]>([
    {
      role: "assistant",
      content: "Assalamu'alaikum! 👋 Saya asisten AI Birru. Ada yang ingin ditanyakan seputar ZISWAF (Zakat, Infak, Sedekah, Wakaf)?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setError("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage }),
      });

      if (!resp.ok) {
        const t = await resp.text();
        throw new Error(`Server error ${resp.status}: ${t}`);
      }

      const json = await resp.json();
      if (!json.ok) {
        throw new Error(json.error || "Unknown error from API");
      }

      const reply = json.data?.text ?? "Maaf, saya tidak dapat memproses pertanyaan Anda saat ini.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setError(`Terjadi kesalahan: ${err.message ?? err}`);
      setMessages((prev) => [...prev, { role: "assistant", content: "Maaf, terjadi kesalahan saat memproses permintaanmu." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Buka chat AI"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[90vw] max-w-md flex-col rounded-2xl border-2 border-primary/20 bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-primary to-accent p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="text-white">
                <div className="font-bold text-sm">Birru AI Assistant</div>
                <div className="text-xs opacity-90">Tanya seputar ZISWAF</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
              aria-label="Tutup chat"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${msg.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"}`}>
                  <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3 text-sm text-gray-800">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sedang mengetik.</span>
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center">
                <div className="rounded-xl bg-red-50 px-4 py-2 text-xs text-red-600">{error}</div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t-2 border-gray-100 p-4">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pertanyaan Anda."
                rows={1}
                className="flex-1 resize-none rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
                style={{ maxHeight: "100px" }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Kirim pesan"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatDialog;

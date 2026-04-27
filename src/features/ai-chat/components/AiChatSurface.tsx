import { useState } from 'react';
import { Send } from 'lucide-react';
import { Card } from '@/shared/ui';
import AiBadge from './AiBadge';

type LocalMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

/**
 * Local-state chat surface for the scaffold. When auth/profiles land this
 * hooks into `useChatMessages` and `useSendMessage` for real data.
 */
export default function AiChatSurface() {
  const [messages, setMessages] = useState<LocalMessage[]>([
    {
      id: 'intro',
      role: 'assistant',
      content:
        'I am Aura — an AI astrologer. I ground my answers in your chart and I will never claim to be human. Ask me anything.',
    },
  ]);
  const [draft, setDraft] = useState('');

  const send = () => {
    const content = draft.trim();
    if (!content) return;
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: 'user', content },
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        content:
          'This is a placeholder response. Wire me to the chat API to see grounded insights.',
      },
    ]);
    setDraft('');
  };

  return (
    <Card variant="glass" padding="none" className="flex h-full flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {messages.map((m) => (
          <div
            key={m.id}
            className={
              m.role === 'user'
                ? 'ml-auto max-w-md rounded-2xl bg-accent-violet/20 px-4 py-2.5 text-sm text-starlight'
                : 'max-w-md rounded-2xl bg-white/5 px-4 py-3 text-sm text-starlight'
            }
          >
            {m.role === 'assistant' && (
              <div className="mb-2">
                <AiBadge />
              </div>
            )}
            {m.content}
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="flex items-center gap-2 border-t border-white/5 p-3"
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask Aura anything…"
          className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-starlight outline-none placeholder:text-starlight-muted/70 focus:border-accent-violet/70"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="rounded-full bg-gold-violet p-2.5 text-cosmic-950 shadow-glow-gold disabled:opacity-60"
          disabled={!draft.trim()}
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </Card>
  );
}

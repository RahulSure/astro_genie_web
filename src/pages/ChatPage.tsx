import { AiChatSurface } from '@/features/ai-chat';

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-10rem)] flex-col">
      <header className="mb-4">
        <h1 className="font-serif text-3xl">Aura AI</h1>
        <p className="mt-1 text-sm text-starlight-muted">
          Transparent by design — every response is AI-generated guidance
          grounded in your chart.
        </p>
      </header>
      <div className="min-h-0 flex-1">
        <AiChatSurface />
      </div>
    </div>
  );
}

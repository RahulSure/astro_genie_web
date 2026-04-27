import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Card, Button } from '@/shared/ui';
import AiBadge from './AiBadge';

const suggestions = [
  'How will this week unfold for me?',
  'When is a good time to start a new venture?',
  'What does Saturn’s transit mean for me?',
];

export default function AiChatPrompt() {
  const navigate = useNavigate();
  return (
    <Card variant="glass" padding="lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <AiBadge />
          <h3 className="mt-3 font-serif text-2xl">
            Ask Aura, your AI astrologer
          </h3>
          <p className="mt-1 text-sm text-starlight-muted">
            Grounded in your chart. Responses always labelled as AI.
          </p>
        </div>
        <MessageCircle
          className="hidden h-8 w-8 text-accent-violet-soft sm:block"
          aria-hidden
        />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {suggestions.map((q) => (
          <button
            key={q}
            type="button"
            onClick={() =>
              navigate(`/app/chat?prompt=${encodeURIComponent(q)}`)
            }
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-starlight transition hover:border-white/20 hover:bg-white/10"
          >
            {q}
          </button>
        ))}
      </div>
      <div className="mt-5">
        <Button
          rightIcon={<ArrowUpRight className="h-4 w-4" />}
          onClick={() => navigate('/app/chat')}
        >
          Start a conversation
        </Button>
      </div>
    </Card>
  );
}

import DailyInsights from '@/features/daily-insights';
import AiChatPrompt from '@/features/ai-chat/components/AiChatPrompt';
import QuickActions from '@/features/dashboard/QuickActions';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <DailyInsights />
      <AiChatPrompt />
      <QuickActions />
    </div>
  );
}

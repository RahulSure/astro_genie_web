import { Sparkles } from 'lucide-react';
import { Badge } from '@/shared/ui';

/**
 * Transparent AI labelling — required everywhere an Aura response is shown.
 * Consistent styling + copy keeps compliance (PRD §4, §7) in one place.
 */
export default function AiBadge() {
  return (
    <Badge tone="violet" icon={<Sparkles className="h-3 w-3" />}>
      AI generated
    </Badge>
  );
}

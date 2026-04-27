import { ProfileList } from '@/features/profiles';

export default function ProfilesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-3xl">Saved profiles</h1>
        <p className="mt-1 text-sm text-starlight-muted">
          Manage birth details for yourself, family, and friends.
        </p>
      </header>
      <ProfileList />
    </div>
  );
}

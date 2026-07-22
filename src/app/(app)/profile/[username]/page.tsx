import ProfileHeader from "@/components/profile/profile-header";
import CuratedPlaylists from "@/components/profile/curated-playlists";
import MixtapeBanner from "@/components/profile/mixtape-banner";
import TopAlbums from "@/components/profile/top-albums";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  return (
    <main className="relative -mt-16 w-full">
      <ProfileHeader
        username={username}
        bio="Discover new sounds, share your favorite records, and keep your playlists close."
      />
      <MixtapeBanner />
      <CuratedPlaylists />
      <TopAlbums />
    </main>
  );
}

import Image from "next/image";
import { MessageCircle, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

type ProfileStat = {
  label: string;
  value: string;
};

type ProfileHeaderProps = {
  username: string;
  bio: string;
  stats?: ProfileStat[];
};

const defaultStats: ProfileStat[] = [
  { label: "followers", value: "1.2K" },
  { label: "following", value: "248" },
  { label: "playlists", value: "36" },
];

export default function ProfileHeader({
  username,
  bio,
  stats = defaultStats,
}: ProfileHeaderProps) {
  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden">
      <div className="relative max-h-112 min-h-96 w-full">
        <Image
          src="/beatles-banner-image.jpg"
          alt="Profile banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="from-background/10 to-background absolute inset-0 bg-linear-to-b via-transparent" />
        <div className="from-background/5 to-background absolute inset-0 bg-linear-to-l via-transparent" />
        <div className="from-background/5 to-background absolute inset-0 bg-linear-to-r via-transparent" />
      </div>

      <div className="relative z-10 mx-auto -mt-20 flex w-full flex-col gap-6 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-end">
          <Image
            src="/profile-pic.jpg"
            alt={`${username}'s profile picture`}
            width={144}
            height={144}
            className="border-background size-28 shrink-0 rounded-full border-4 object-cover sm:size-36"
          />

          <div className="min-w-0 space-y-3">
            <div>
              <h1 className="text-foreground truncate text-2xl font-bold tracking-tight sm:text-3xl">
                {username}
              </h1>
            </div>

            <p className="text-muted-foreground max-w-sm text-sm leading-6">
              {bio}
            </p>

            <dl className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-1.5">
                  <dt className="text-muted-foreground order-2">
                    {stat.label}
                  </dt>
                  <dd className="text-foreground font-semibold">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={`Message ${username}`}
          >
            <MessageCircle />
          </Button>
          <Button type="button">Follow</Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="More profile actions"
          >
            <MoreHorizontal />
          </Button>
        </div>
      </div>
    </section>
  );
}

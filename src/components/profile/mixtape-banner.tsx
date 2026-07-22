import Image from "next/image";
import { Mic2, Music2, Play, Users } from "lucide-react";

import { Button } from "@/components/ui/button";

const mixtapeStats = [
  { label: "Songs", value: "48", icon: Music2 },
  { label: "Artists", value: "32", icon: Mic2 },
  { label: "Followers", value: "1.4K", icon: Users },
];

const MixtapeBanner = () => {
  return (
    <section className="border-border relative isolate mx-auto mt-10 min-h-128 w-full max-w-6xl overflow-hidden rounded-2xl border bg-zinc-900 md:min-h-112">
      <div className="absolute inset-0 md:left-[34%]">
        <Image
          src="/mixtape-cover.jpg"
          alt="A listener enjoying music at a desk"
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 w-1/2 bg-linear-to-t from-zinc-900 via-zinc-900/60 to-transparent md:bg-linear-to-r md:from-zinc-900 md:via-zinc-900/75 md:to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-128 max-w-xl flex-col justify-end gap-6 px-6 py-8 sm:px-10 sm:py-10 md:min-h-112 md:justify-center">
        <div className="space-y-3">
          <p className="text-muted-foreground text-sm font-medium tracking-[0.2em] uppercase">
            <span className="text-primary">MyMusicAtlas</span> original
          </p>
          <h2 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
            Sushant&apos;s <span className="text-orange-500">Mixtape</span>
          </h2>
          <p className="text-muted-foreground max-w-md text-base leading-7">
            A constantly evolving mix for late nights, long drives, and every
            discovery in between.
          </p>
        </div>

        <dl className="flex flex-wrap gap-x-8 gap-y-4">
          {mixtapeStats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon
                className="text-muted-foreground size-5"
                aria-hidden="true"
              />
              <div>
                <dt className="text-muted-foreground text-xs tracking-[0.14em] uppercase">
                  {label}
                </dt>
                <dd className="text-foreground text-lg font-semibold">
                  {value}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <Button type="button" className="w-fit gap-2" size="lg">
          <Play className="size-4 fill-current" aria-hidden="true" />
          Tune In
        </Button>
      </div>
    </section>
  );
};

export default MixtapeBanner;

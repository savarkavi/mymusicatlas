import Image from "next/image";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";

type Album = {
  artist: string;
  name: string;
  cover: string;
};

const mockAlbums: Album[] = [
  {
    artist: "Tame Impala",
    name: "Currents",
    cover: "/currents.jpg",
  },
  {
    artist: "Kendrick Lamar",
    name: "good kid, m.A.A.d city",
    cover: "/good-kid-mad-city.jpg",
  },
  {
    artist: "Kanye West",
    name: "Graduation",
    cover: "/graduation.jpg",
  },
  {
    artist: "Radiohead",
    name: "In Rainbows",
    cover: "/in-rainbows.jpg",
  },
  {
    artist: "Radiohead",
    name: "OK Computer",
    cover: "/ok-computer.jpg",
  },
];

const TopAlbums = () => {
  return (
    <div className="mx-auto my-10 max-w-6xl">
      <div className="flex items-center justify-between border-b py-3">
        <p>Top Albums</p>
        <Button type="button" variant="link" size="sm">
          View All
        </Button>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {mockAlbums.map((album) => (
            <article key={album.name} className="min-w-0 space-y-2">
              <div className="bg-muted relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={album.cover}
                  alt={`${album.name} by ${album.artist}`}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  className="object-cover transition-transform duration-300"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-foreground truncate font-medium">
                  {album.name}
                </h3>
                <p className="text-muted-foreground truncate text-sm">
                  {album.artist}
                </p>
              </div>

              <div
                className="text-primary flex items-center gap-0.5"
                aria-label="Rated 5 out of 5 stars"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="fill-primary size-3"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAlbums;

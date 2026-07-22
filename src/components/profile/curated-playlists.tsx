import Image from "next/image";

import { Button } from "@/components/ui/button";

type PlaylistSong = {
  title: string;
  cover: string;
};

type Playlist = {
  name: string;
  songCount: number;
  songs: PlaylistSong[];
};

const mockPlaylists: Playlist[] = [
  {
    name: "Midnight Frequencies",
    songCount: 28,
    songs: [
      { title: "Currents", cover: "/currents.jpg" },
      { title: "Late Night Drive", cover: "/playlist-cover-1.jpg" },
      { title: "Graduation", cover: "/graduation.jpg" },
      { title: "Analog Glow", cover: "/playlist-cover-2.jpg" },
    ],
  },
  {
    name: "Headphones On",
    songCount: 43,
    songs: [
      { title: "good kid, m.A.A.d city", cover: "/good-kid-mad-city.jpg" },
      { title: "Window Seat", cover: "/playlist-cover-3.jpg" },
      { title: "OK Computer", cover: "/ok-computer.jpg" },
      { title: "In Rainbows", cover: "/in-rainbows.jpg" },
    ],
  },
  {
    name: "Golden Hour",
    songCount: 19,
    songs: [
      { title: "Graduation", cover: "/graduation.jpg" },
      { title: "Sunset Static", cover: "/playlist-cover-4.jpg" },
      { title: "Currents", cover: "/currents.jpg" },
      { title: "Warm Tape", cover: "/playlist-cover-5.jpg" },
    ],
  },
  {
    name: "The Long Way Home",
    songCount: 61,
    songs: [
      { title: "OK Computer", cover: "/ok-computer.jpg" },
      { title: "Afterparty Exit", cover: "/playlist-cover-6.jpg" },
      { title: "good kid, m.A.A.d city", cover: "/good-kid-mad-city.jpg" },
      { title: "Road Lights", cover: "/playlist-cover-7.jpg" },
    ],
  },
  {
    name: "Soft Reset",
    songCount: 35,
    songs: [
      { title: "In Rainbows", cover: "/in-rainbows.jpg" },
      { title: "good kid, m.A.A.d city", cover: "/good-kid-mad-city.jpg" },
      { title: "Analog Glow", cover: "/playlist-cover-2.jpg" },
      { title: "Graduation", cover: "/graduation.jpg" },
    ],
  },
];

const CuratedPlaylists = () => {
  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <div className="flex items-center justify-between border-b py-3">
        <p>Curated Playlists</p>
        <Button type="button" variant="link" size="sm">
          View All
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {mockPlaylists.map((playlist) => (
          <article key={playlist.name} className="min-w-0 space-y-2">
            <div
              className="bg-muted grid aspect-square grid-cols-2 overflow-hidden rounded-md"
              aria-label={`${playlist.name} playlist cover made from its first four songs`}
            >
              {playlist.songs.slice(0, 4).map((song, index) => (
                <div
                  key={`${song.cover}-${index}`}
                  className="relative min-h-0 min-w-0"
                >
                  <Image
                    src={song.cover}
                    alt={`${song.title} cover art`}
                    fill
                    sizes="(max-width: 640px) 22vw, (max-width: 1024px) 15vw, 10vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="min-w-0">
              <h3 className="text-foreground truncate font-medium">
                {playlist.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {playlist.songCount} songs
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CuratedPlaylists;

import Link from "next/link";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Music", href: "/music" },
  { label: "Playlists", href: "/playlists" },
  { label: "Members", href: "/members" },
];

const Header = () => {
  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/80 sticky top-0 z-50 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6">
        <Link
          href="/"
          className="text-foreground hover:text-primary shrink-0 text-xl font-bold tracking-tight transition-colors sm:text-2xl"
        >
          MyMusicAtlas
        </Link>

        <nav
          aria-label="Primary navigation"
          className="flex items-center gap-5 sm:gap-10"
        >
          <div className="hidden items-center gap-5 sm:flex sm:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-xs font-bold tracking-[0.12em] uppercase transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              size="sm"
              variant="outline"
              className="rounded-md px-4 py-4 text-xs font-bold tracking-[0.08em] uppercase"
            >
              Sign In
            </Button>
            <Button
              type="button"
              size="sm"
              className="rounded-md px-4 py-4 text-xs font-bold tracking-[0.08em] uppercase"
            >
              Sign up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

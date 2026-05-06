export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950/90 py-6 md:py-8 mt-12 md:mt-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="font-mono text-xs md:text-sm text-center">
          {/* Exit Message */}
          <div className="text-zinc-400 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span>Process finished with exit code 0.</span>
            <span className="hidden sm:inline">© Robin Hoesli 2026</span>
            <span className="sm:hidden mt-1">© Robin Hoesli 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
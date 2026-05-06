export function LandingHeader() {
  return (
    <header className="border-b border-zinc-800 bg-black sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center">
              <span className="text-white">🔐</span>
            </div>
            <div>
              <h1 className="text-white">passport.xyz</h1>
              <p className="text-zinc-500 text-sm">Building your reputation on-chain</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
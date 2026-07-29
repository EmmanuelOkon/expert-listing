function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-xl bg-slate-200 ${className}`} />
  );
}

export function DashboardPageSkeleton() {
  return (
    <main className="mx-auto w-full max-w-[1400px] px-4 py-4 sm:px-5 md:px-6 md:py-6">
      <div className="mb-5 space-y-3">
        <SkeletonBlock className="h-7 w-40 sm:h-8 sm:w-48" />
        <SkeletonBlock className="h-4 w-56 sm:w-72" />
      </div>

      <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="rounded-[16px] border border-[#E4E4E4] bg-white p-4 sm:p-5 md:p-6">
            <div className="mb-5 flex flex-col gap-3 border-b border-[#E4E4E4] pb-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <SkeletonBlock className="h-5 w-32" />
                <SkeletonBlock className="h-4 w-52" />
              </div>
              <div className="flex flex-col items-start gap-2 sm:items-end">
                <SkeletonBlock className="h-11 w-36 rounded-full" />
                <SkeletonBlock className="h-8 w-40 rounded-lg" />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
              <SkeletonBlock className="min-h-[220px] w-full rounded-2xl" />
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((__, index) => (
                  <SkeletonBlock key={index} className="h-28 rounded-xl" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E4E4E4] bg-white p-4 sm:p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <SkeletonBlock className="h-6 w-36" />
                <SkeletonBlock className="h-8 w-16 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {Array.from({ length: index === 0 ? 3 : 6 }).map((__, item) => (
                  <div key={item} className="space-y-2">
                    <SkeletonBlock className="h-4 w-16" />
                    <SkeletonBlock className="h-7 w-20" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 lg:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonBlock
            key={index}
            className="min-w-[85%] flex-[0_0_85%] snap-start rounded-2xl md:min-w-[56%] md:flex-[0_0_56%] h-[340px]"
          />
        ))}
      </div>

      <div className="hidden gap-5 lg:grid lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonBlock key={index} className="h-[340px] rounded-2xl" />
        ))}
      </div>
    </main>
  );
}

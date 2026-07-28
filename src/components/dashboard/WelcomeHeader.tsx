export function WelcomeHeader({ firstName }: { firstName: string }) {
  return (
    <div className="mb-3">
      <h1 className="text-xl md:text-xl font-semibold text-main-black tracking-tight">
        Welcome, {firstName}
      </h1>
    </div>
  );
}

export function WelcomeHeader({ firstName }: { firstName: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h1 className="text-xl font-semibold tracking-tight text-main-black sm:text-2xl">
        Welcome, {firstName}
      </h1>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl">
        <div className="mb-10">
          <Image
            src="/logo-black.svg"
            alt="Ark Capital"
            width={264}
            height={40}
            priority
            className="h-10 w-auto dark:hidden"
          />
          <Image
            src="/logo-white.svg"
            alt="Ark Capital"
            width={292}
            height={44}
            priority
            className="hidden h-10 w-auto dark:block"
          />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Ark Capital
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
          Our website is taking shape. Check back for company news, insights,
          and updates.
        </p>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-sm text-primary-400 ring-1 ring-primary-500/20">
          <span className="mr-2">🚧</span>
          Currently in Planning Phase
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
            rip social
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          <strong>Real Identity. Real Issues. Real Solutions.</strong>
        </p>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          An open-source civic engagement platform where verified citizens
          discuss real issues, moderated by AI, with direct routes to government
          action.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/issues"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-all hover:scale-105 shadow-lg shadow-primary-500/25"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg border border-gray-600 hover:border-primary-500 text-gray-300 hover:text-white transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <FeatureCard
          icon="🆔"
          title="Verified Identity"
          description="Phone & Aadhaar verification ensures real people, real accountability."
        />
        <FeatureCard
          icon="🤖"
          title="AI Moderation"
          description="Pre-publish content filtering. No abuse, spam, or nudity ever reaches the platform."
        />
        <FeatureCard
          icon="📜"
          title="Government Action"
          description="Issues route directly to CPGRAMS, state portals, and elected representatives."
        />
      </div>

      {/* Footer */}
      <footer className="mt-24 pb-8 text-center text-gray-500 text-sm">
        <p>
          Open Source • MIT License •{" "}
          <a
            href="https://github.com/akshayaparida/rip_social"
            className="text-primary-400 hover:underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm hover:border-primary-500/50 transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

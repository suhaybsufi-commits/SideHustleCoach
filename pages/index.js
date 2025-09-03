import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/about">About</Link> |{" "}
        <Link href="/blog">Blog</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Welcome to SideHustleCoach 🚀</h1>
      <p>Your AI-powered side hustle guide is coming soon.</p>
    </div>
  );
}

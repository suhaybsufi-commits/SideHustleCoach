import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <h1>Welcome to SideHustleCoach 🚀</h1>
      <p>Your AI-powered side hustle guide is coming soon.</p>
    </div>
  );
}

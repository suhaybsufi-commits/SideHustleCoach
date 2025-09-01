import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>SideHustleCoach.ai</h1>
      <p>Get your personalized AI side hustle plan today!</p>
      <Link href="/dashboard"><button>Generate My Plan</button></Link>
      <Link href="/blog"><button>Read Blog</button></Link>
    </div>
  )
}

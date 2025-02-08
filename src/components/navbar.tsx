import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
      <Link href="/" className="text-xl font-bold">
        School of DSA
      </Link>
      <div className="flex gap-4">
        <Button asChild variant="ghost">
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </div>
    </nav>
  )
} 
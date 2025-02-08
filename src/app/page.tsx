import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-xl text-muted-foreground">
            Join the best online platform to learn and practice DSA with live sessions and expert guidance
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Live Sessions</CardTitle>
              <CardDescription>Interactive classes with industry experts</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Join live coding sessions and get real-time feedback from experienced mentors.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Practice Problems</CardTitle>
              <CardDescription>Curated from top platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Access a vast collection of problems from LeetCode, CodeChef, and more.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Personalized Learning</CardTitle>
              <CardDescription>Track your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Get customized recommendations based on your skill level and goals.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

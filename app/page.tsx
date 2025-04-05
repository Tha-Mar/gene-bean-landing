import Link from "next/link"
import Image from "next/image"
import { Coffee, Dna, Leaf, Lock, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-orange-500" />
          <span className="text-xl font-medium">Gene Beans</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
            How It Works
          </Link>
          <Link href="#benefits" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Benefits
          </Link>
          <Link href="#testimonials" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-sm text-zinc-400 hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors hidden md:block">
            Log in
          </Link>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-amber-700/30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl"></div>
        <div className="absolute top-40 left-1/4 w-40 h-40 rounded-full bg-amber-800/20 blur-2xl"></div>
        <div className="absolute bottom-40 right-1/4 w-56 h-56 rounded-full bg-amber-500/10 blur-3xl"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            <div className="flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-xs text-orange-500">Ancestral Coffee Matching</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-amber-500 to-brown-500 text-transparent bg-clip-text">
            Your Genes. Your Beans.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-3">
            Discover coffee beans your ancestors would have consumed, tailored to your genetic profile for optimal
            health benefits.
          </p>
          <p className="text-lg md:text-xl font-medium mb-8 italic bg-gradient-to-r from-amber-400 to-orange-400 text-transparent bg-clip-text">
            Because your genes are in your beans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              Discover Your Beans
            </Button>
            <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent rounded-xl blur-xl"></div>
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <Image
              src="/genebean1.png?height=600&width=1200"
              width={600}
              height={300}
              alt="Gene Beans DNA Coffee Analysis"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-zinc-400">
            Our science-backed process connects your genetic heritage to the perfect coffee beans.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
            <div className="relative">
              <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Dna className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">DNA Analysis</h3>
              <p className="text-zinc-400">
                Submit your DNA sample or upload existing genetic data for our proprietary analysis.
              </p>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
            <div className="relative">
              <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ancestral Mapping</h3>
              <p className="text-zinc-400">
                Our AI maps your genetic heritage to historical coffee-growing regions around the world.
              </p>
            </div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
            <div className="relative">
              <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bean Matching</h3>
              <p className="text-zinc-400">
                Receive a personalized selection of coffee beans that align with your genetic profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add a new visual section with abstract art and images between How It Works and Benefits */}
      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-amber-900/20 blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-orange-800/15 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-amber-700/10 blur-2xl"></div>
          <div className="absolute bottom-20 left-1/4 w-48 h-48 rounded-full bg-brown-500/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Art of Genetic Coffee</h2>
            <p className="text-xl text-zinc-300 mb-6">
              Our proprietary process combines cutting-edge genetic science with centuries-old coffee traditions.
            </p>
            <p className="text-lg text-zinc-400 mb-8 italic">
              "Because your genes are in your beans" isn't just our tagline—it's the scientific principle behind our
              matching process.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
              <p className="text-zinc-400">Personalized to your DNA</p>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <div className="h-1 w-12 bg-amber-600 rounded-full"></div>
              <p className="text-zinc-400">Sourced from your ancestral regions</p>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <div className="h-1 w-12 bg-brown-500 rounded-full"></div>
              <p className="text-zinc-400">Roasted to genetic perfection</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/scientistbean.png?height=300&width=300"
                width={300}
                height={300}
                alt="Coffee beans close-up"
                className="rounded-lg object-cover h-full w-full"
              />
              <Image
                src="/diversitybean.png?height=200&width=300"
                width={300}
                height={100}
                alt="DNA visualization"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="/diversitybean.png?height=200&width=300"
                width={300}
                height={200}
                alt="Coffee plantation"
                className="rounded-lg object-cover h-full w-full"
              />
              <Image
                src="/genebean1.png?height=300&width=300"
                width={300}
                height={300}
                alt="Coffee brewing"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add a visual banner with the tagline */}
      <section className="w-full py-12 bg-gradient-to-r from-brown-800 via-amber-800 to-brown-700 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Abstract art elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brown-500/10 rounded-full blur-3xl"></div>

          {/* Coffee bean and DNA pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/genebean1.png?height=100&width=100')",
                backgroundSize: "100px",
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Coffee className="h-12 w-12 text-orange-400" />
              <Dna className="h-12 w-12 text-amber-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center md:text-left">
              Because your genes are in your beans.
            </h3>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Start Your Journey</Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="container mx-auto px-4 py-20 bg-zinc-950 rounded-3xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Genetic Coffee Benefits</h2>
          <p className="text-zinc-400">Discover why your ancestors' coffee choices matter for your health today.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1">
              <Leaf className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Enhanced Metabolism</h3>
              <p className="text-zinc-400">
                Coffee beans aligned with your genetic heritage can optimize your body's natural metabolic processes.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1">
              <Sparkles className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Improved Energy</h3>
              <p className="text-zinc-400">
                Experience more balanced, sustained energy without the typical coffee crash.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1">
              <Users className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Cultural Connection</h3>
              <p className="text-zinc-400">
                Form a deeper connection to your heritage through the flavors your ancestors enjoyed.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1">
              <Lock className="h-6 w-6 text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Personalized Antioxidants</h3>
              <p className="text-zinc-400">
                Benefit from antioxidant profiles that your body is genetically optimized to process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-zinc-400">Join thousands who have discovered their perfect genetic coffee match.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/genebean1.png?height=48&width=48"
                width={48}
                height={48}
                alt="Customer"
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium">Sarah K.</h4>
                <p className="text-xs text-zinc-500">Ethiopian Heritage</p>
              </div>
            </div>
            <p className="text-zinc-400">
              "Since switching to my genetically-matched coffee beans, my energy levels have been more consistent
              throughout the day. Plus, the flavor is incredible!"
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/genebean1.png?height=48&width=48"
                width={48}
                height={48}
                alt="Customer"
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium">Michael T.</h4>
                <p className="text-xs text-zinc-500">Colombian Ancestry</p>
              </div>
            </div>
            <p className="text-zinc-400">
              "I've always had digestive issues with coffee until Gene Beans. Now I can enjoy my morning cup without any
              discomfort. The science behind this is fascinating."
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/genebean1.png?height=48&width=48"
                width={48}
                height={48}
                alt="Customer"
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium">Aisha J.</h4>
                <p className="text-xs text-zinc-500">Yemeni Roots</p>
              </div>
            </div>
            <p className="text-zinc-400">
              "Learning about my ancestors' coffee traditions while enjoying beans that complement my genetic makeup has
              been an incredible journey of discovery."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-400">Everything you need to know about Gene Beans.</p>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-zinc-800">
          <div className="py-6">
            <h3 className="text-xl font-medium mb-2">How does Gene Beans analyze my DNA?</h3>
            <p className="text-zinc-400">
              We use a proprietary algorithm that analyzes specific genetic markers related to metabolism, taste
              perception, and ancestral origins to match you with the perfect coffee beans.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-xl font-medium mb-2">Is my genetic data secure?</h3>
            <p className="text-zinc-400">
              Absolutely not.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-xl font-medium mb-2">How long does the process take?</h3>
            <p className="text-zinc-400">
              From submitting your DNA sample to receiving your personalized coffee recommendations typically takes 2-3
              weeks.
            </p>
          </div>
          <div className="py-6">
            <h3 className="text-xl font-medium mb-2">Can I use existing DNA test results?</h3>
            <p className="text-zinc-400">
              Yes! We can analyze data from most major DNA testing services. Simply upload your raw data file during
              registration.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Abstract background with multiple brown shades */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700/30 via-brown-600/20 to-orange-600/30"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-800/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-brown-500/15 rounded-full blur-2xl"></div>

          {/* Coffee bean pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: "url('/genebean1.png?height=200&width=200')",
                backgroundSize: "200px",
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>

          {/* Border */}
          <div className="absolute inset-0 border border-orange-500/20 rounded-3xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Perfect Bean Match</h2>
            <p className="text-xl text-zinc-200 mb-3 max-w-2xl mx-auto">
              Join thousands who have unlocked the secret to better coffee through genetic matching.
            </p>
            <p className="text-lg font-medium italic mb-8 bg-gradient-to-r from-amber-400 to-orange-400 text-transparent bg-clip-text max-w-xl mx-auto">
              Because your genes are in your beans.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Coffee className="h-6 w-6 text-orange-500" />
              <span className="text-lg font-medium">Gene Beans</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <Link href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#benefits" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Benefits
              </Link>
              <Link href="#testimonials" className="text-sm text-zinc-400 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" className="text-sm text-zinc-400 hover:text-white transition-colors">
                FAQ
              </Link>
            </nav>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Gene Beans. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="#" className="hover:text-zinc-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-zinc-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


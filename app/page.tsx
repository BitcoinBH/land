import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Users,
  ExternalLink,
  Github,
  Newspaper,
  Briefcase,
  MapPin,
  Wallet,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Image
            src="/images/bitcoin-bh-logo.png"
            alt="Bitcoin BH Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span>Bitcoin BH</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#community" className="text-sm font-medium hover:underline underline-offset-4">
            Community
          </Link>
          <Link href="#meetups" className="text-sm font-medium hover:underline underline-offset-4">
            Meetups
          </Link>
          <Link href="#join" className="text-sm font-medium hover:underline underline-offset-4">
            Join Us
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Join the Bitcoin BH Community
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Connect with Bitcoin enthusiasts in Belo Horizonte since 2015. Learn, share, and grow together.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://chat.whatsapp.com/BZciIr4NptxJPD7Qf1av3t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#25D366] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#128C7E] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Join WhatsApp Group
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/bitcoin-bh-logo.png"
                  alt="Bitcoin BH Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Bitcoin BH</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bitcoin BH is a community of Bitcoin enthusiasts based in Belo Horizonte, Brazil. Established in 2015,
                  we've been at the forefront of Bitcoin education and adoption in the region.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-[#f7931a]">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Since 2015</h3>
                  <p className="text-gray-500">
                    One of the longest-running Bitcoin communities in Brazil with years of experience and knowledge.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-[#f7931a]">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Growing Community</h3>
                  <p className="text-gray-500">
                    Join hundreds of members who share insights, news, and opportunities in the Bitcoin ecosystem.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-[#f7931a]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Active Discussions</h3>
                  <p className="text-gray-500">
                    Engage in meaningful conversations about Bitcoin technology, markets, and philosophy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="meetups" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Meetups</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us at our regular meetups to learn, share knowledge, and connect with fellow Bitcoin enthusiasts.
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 p-6 flex items-center justify-center bg-amber-50">
                    <Image
                      src="/images/bitdevs-logo.png"
                      alt="Belo Horizonte BitDevs"
                      width={150}
                      height={150}
                      className="rounded-full"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">Belo Horizonte BitDevs</h3>
                      <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">235 members</span>
                    </div>
                    <p className="mt-2 text-gray-500">
                      BitDevs is a community for those interested in discussing and participating in Bitcoin research
                      and development. Our meetups cover the latest news, pull requests, technical topics, Lightning
                      Network, and other open source projects.
                    </p>
                    <div className="mt-4 flex flex-col sm:flex-row gap-2">
                      <Link
                        href="https://www.meetup.com/belo-horizonte-bitdevs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#f65858] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#e04747] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Join on Meetup
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        View Events
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-col space-y-2">
                  <div className="flex justify-center items-center mb-4 bg-gradient-to-b from-amber-50 to-white p-4 rounded-md">
                    <Image
                      src="/images/bitraffle-logo.png"
                      alt="BitRaffle Logo"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">BitRaffle</h3>
                    <Link
                      href="https://github.com/juancolchete/bitRaffle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500">
                    Open source solution for 100% verified raffles on the Bitcoin network. Transparent, secure, and
                    decentralized raffle system.
                  </p>
                  <Link
                    href="https://github.com/juancolchete/bitRaffle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-[#f7931a] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#e68a18] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-col space-y-2">
                  <div className="flex justify-center items-center mb-4 bg-white p-4 rounded-md">
                    <Image
                      src="/images/livecoins-logo.png"
                      alt="Livecoins Logo"
                      width={250}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Livecoins</h3>
                    <Link
                      href="https://livecoins.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      <Newspaper className="h-4 w-4" />
                      <span className="sr-only">Website</span>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500">
                    Brazil's leading news portal for Bitcoin and cryptocurrencies, offering real-time crypto prices,
                    tools, and everything you need to know about BTC and the world of digital assets.
                  </p>
                  <Link
                    href="https://livecoins.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-[#f7931a] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#e68a18] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-col space-y-2">
                  <div className="flex justify-center items-center mb-4 bg-white p-4 rounded-md">
                    <Image
                      src="/images/uaibit-logo.png"
                      alt="UAIBIT Logo"
                      width={250}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">UAIBIT</h3>
                    <Link
                      href="https://uaibit.com.br/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      <Briefcase className="h-4 w-4" />
                      <span className="sr-only">Website</span>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500">
                    Companies that adopt Bitcoin gain efficiency and drive innovation, but expert guidance is essential.
                    UAIBIT provides specialized consulting to ensure secure implementation, regulatory compliance, and
                    strategic planning—empowering businesses to fully leverage this technology in the local market.
                  </p>
                  <Link
                    href="https://uaibit.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-[#f7931a] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#e68a18] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-col space-y-2">
                  <div className="mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/images/btcmap-bitcoinbh.png"
                      alt="Bitcoin BH BTC Map"
                      width={400}
                      height={250}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">BitcoinBH BTC Map</h3>
                    <Link
                      href="https://btcmap.org/community/bitcoin-bh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      <MapPin className="h-4 w-4" />
                      <span className="sr-only">Map</span>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500">Merchant map of BitcoinBH community, on BTC Map</p>
                  <Link
                    href="https://btcmap.org/community/bitcoin-bh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-[#f7931a] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#e68a18] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Map
                  </Link>
                </div>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 flex flex-col space-y-2">
                  <div className="mb-4 rounded-md overflow-hidden">
                    <Image
                      src="/images/autocustody-workshop.png"
                      alt="Aqua + UAIBIT Workshop"
                      width={400}
                      height={250}
                      className="object-cover w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Aqua + UAIBIT Workshop</h3>
                    <Link
                      href="https://uaibit.com.br/2025/04/08/evento-aqua-uaibit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      <Wallet className="h-4 w-4" />
                      <span className="sr-only">Event</span>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500">
                    The Bitcoin Self-Custody Workshop is a hands-on training session organized by UAIBIT in
                    collaboration with Aqua Wallet and Jan3, with support from Livecoins. Scheduled for April 21, 2025,
                    in Belo Horizonte, the workshop is designed to teach participants the principles and practical steps
                    of securely managing their own Bitcoin using reliable self-custody tools.
                  </p>
                  <Link
                    href="https://uaibit.com.br/2025/04/08/evento-aqua-uaibit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-9 items-center justify-center rounded-md bg-[#f7931a] px-4 text-sm font-medium text-white shadow transition-colors hover:bg-[#e68a18] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    View Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bitcoin BH brings together a diverse group of individuals passionate about Bitcoin and its potential.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="p-6 flex flex-col space-y-2">
                    <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">
                      <Users className="h-16 w-16 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-bold">Community Highlight #{i}</h3>
                    <p className="text-sm text-gray-500">
                      Meet our community members and learn about their journey in the Bitcoin ecosystem.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="join" className="w-full py-12 md:py-24 lg:py-32 bg-[#f7931a]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Join Our WhatsApp Group
                </h2>
                <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with Bitcoin enthusiasts in Belo Horizonte. Share knowledge, discuss news, and participate in
                  events.
                </p>
              </div>
              <Link
                href="https://chat.whatsapp.com/BZciIr4NptxJPD7Qf1av3t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-lg font-medium text-[#f7931a] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Join WhatsApp Group
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500">© 2015-{new Date().getFullYear()} Bitcoin BH. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

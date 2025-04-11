import Image from "next/image"
import Link from "next/link"
import { Diamond, FileText, Package2, AlignJustify, TriangleAlert } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-primary px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-xl">
            DEAN/POS
          </Link>
          <div className="hidden md:flex ml-10 space-x-6">
            <Link href="/about" className="text-white hover:text-white/80">
              About
            </Link>
            <Link href="/products" className="text-white hover:text-white/80">
              Products
            </Link>
            <Link href="/software" className="text-white hover:text-white/80">
              Software
            </Link>
            <Link href="/blog" className="text-white hover:text-white/80">
              Blog
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/faq" className="text-white hover:text-white/80">
            F.A.Q.
          </Link>
          <Link href="/start-trial" className="bg-coral text-white px-4 py-2 rounded-full hover:bg-coral/90">
            Start Trial
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500">
        <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">The POS of your dreams</h1>
            <p className="text-primary-dark mb-8 max-w-md">
              we are dedicated to providing smart solutions that seamlessly integrate high-quality hardware with
              cutting-edge point-of-sale software
            </p>
            <div className="flex space-x-4">
              <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90">
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="bg-coral text-white px-6 py-3 rounded-full hover:bg-coral/90 flex items-center"
              >
                <span className="mr-2">FAQ</span>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="POS System with credit cards"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-coral mb-4">
                <Diamond size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sketch Version</h3>
              <p className="text-gray-600 text-sm">We made everything for your comfortable work in Sketch.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-coral mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">30 New Feature Pages</h3>
              <p className="text-gray-600 text-sm">
                A child was brought in, who had swallowed a necklace o towards mare.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-coral mb-4">
                <Package2 size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Well Organized</h3>
              <p className="text-gray-600 text-sm">
                She clutched the matron by the arm, and forcing her into a chair by the bedside.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-coral mb-4">
                <AlignJustify size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">HTML5</h3>
              <p className="text-gray-600 text-sm">
                HTML layout is based on one of the most common and framework - Bootstrap.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-coral mb-4">
                <Package2 size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pixel Perfect Design</h3>
              <p className="text-gray-600 text-sm">
                They made signs for me to come down from the rock, and go towards the shore.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="text-coral mb-4">
                <TriangleAlert size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Google Fonts</h3>
              <p className="text-gray-600 text-sm">
                Startup Framework works fine on devices supporting Retina Display.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Payment terminal with card"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 bg-primary p-12 flex flex-col justify-center">
          <div className="text-white/70 uppercase text-sm font-medium mb-2">POS SYSTEM BUNDLE ECONOMY</div>
          <h2 className="text-3xl font-bold text-white mb-4">Discounted Product of the Week</h2>
          <p className="text-white/80 mb-6">Customized cotton pullover hoodies with embroidery logo company</p>
          <div className="flex items-center mb-8">
            <span className="text-white font-bold mr-4">R8,924.99</span>
            <span className="text-white/70 line-through">R10,264.99</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/details" className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/10">
              Details
            </Link>
            <Link
              href="/buy-now"
              className="bg-coral text-white px-6 py-3 rounded-full hover:bg-coral/90 flex items-center"
            >
              <span className="mr-2">BUY NOW</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

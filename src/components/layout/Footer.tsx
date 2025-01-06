import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      {/* Modern geometric separator */}
      <div className="w-full h-32 relative bg-[#1A1F2C] overflow-hidden">
        {/* Decorative geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-4 left-1/4 w-16 h-16 bg-[#403E43] rotate-45 transform" />
          <div className="absolute top-8 right-1/3 w-12 h-12 bg-[#403E43] rotate-12 transform" />
          <div className="absolute bottom-4 left-2/3 w-20 h-20 bg-[#403E43] -rotate-12 transform" />
        </div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657 28 0h-2.83zM32.656 0L26.172 6.485 24 8.657 34.657 0h-2zM44.97 0L40.5 4.472 36.03 0h8.94zM12.807 0L9.5 3.308 6.193 0h6.614zM48.743 0L42.5 6.243 36.257 0h12.486zM15.857 0L9.5 6.357 3.143 0h12.714zM49.05 0L42.5 6.55 35.95 0h13.1zM30.807 0L24 6.807 17.193 0h13.614zM38.657 0L24 14.657 9.343 0h29.314zM40.743 0L24 16.743 7.257 0h33.486zM18.343 0L3.343 15H0v-2.343l15-15h3.343zm-9.1 0L0 9.243V6.414L6.414 0h2.829zM56.657 0L41.657 15H38.31L53.31 0h3.347zM47.757 0L0 47.757V44.93L44.93 0h2.827z' fill='%238E9196' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <footer className="bg-[#1A1F2C] border-t border-[#403E43]">
        <div className="container mx-auto py-8">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-lg font-semibold text-[#8E9196] hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-lg font-semibold text-[#8E9196] hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-lg font-semibold text-[#8E9196] hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="mt-6 text-sm text-[#8E9196] text-center">© 2023 Numerology Insights. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
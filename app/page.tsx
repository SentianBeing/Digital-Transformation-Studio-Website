import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import CaseStudies from '../components/CaseStudies';
import Expertise from '../components/Expertise';
import TechStacks from '../components/TechStacks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#FF005E] selection:text-white overflow-x-hidden">
            {/* Background Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-20 grayscale"
                >
                    <source src="https://res.cloudinary.com/der2xk0cv/video/upload/v1768050704/Img_9553_vsli13.mp4" type="video/mp4" />
                </video>
                {/* Dynamic Gradient Meshes */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]/95"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full gradient-mesh opacity-30"></div>
            </div>

            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <Clients />
                    <div className="bg-gradient-to-b from-transparent via-[#080808] to-transparent">
                        <CaseStudies />
                        <Expertise />
                        <TechStacks />
                    </div>
                    <Testimonials />
                    <FAQ />
                </main>
                <Footer />
            </div>
        </div>
    );
}

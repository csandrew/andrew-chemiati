import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { About, Services, Portfolio, Process, Testimonials, Contact } from '@/components/Sections';

export default function Home() {
    return <><Navbar /><main><Hero /><About /><Services />
        <section className="bg-gold py-10">
            <div className="container-x flex flex-col justify-between gap-6 text-ink sm:flex-row sm:items-center">
                <div>
                    <p className="text-2xl font-extrabold">Available for freelance projects.</p>
                    <p className="mt-1 text-ink/75">Let&apos;s turn your next idea into something useful.</p>
                </div>
                <a href="#contact" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-ink">Book a call</a>
            </div>
        </section>
        <Portfolio /><Testimonials /><Process /><Contact /></main>
        <footer className="bg-ink text-white">
            <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_1fr]">
                <div>
                    <a href="#home" className="text-2xl font-extrabold tracking-tight">Andrew Chemiati<span className="text-gold">.</span></a>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">Software Development · Web Applications · Backend & APIs · UI/UX & Frontend systems for businesses.</p>

                </div>
                <nav aria-label="Footer navigation">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Explore</h2>
                    <ul className="mt-5 space-y-3 text-sm text-white/70">
                        {[
                            ['Home', 'home'],
                            ['About', 'about'],
                            ['Services', 'services'],
                            ['Portfolio', 'portfolio'],
                            ['Contact', 'contact'],
                        ].map(([label, id]) => (
                            <li key={id}><a className="transition hover:text-gold" href={`#${id}`}>{label}</a></li>
                        ))}
                    </ul>
                </nav>
                <address className="not-italic">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Get in touch</h2>
                    <ul className="mt-5 space-y-4 text-sm text-white/70">
                        <li><span className="mb-1 block text-xs uppercase tracking-wider text-white/45">Email</span><a className="transition hover:text-gold" href="mailto:andreaschemiati@gmail.com">andreaschemiati@gmail.com</a></li>
                        <li><span className="mb-1 block text-xs uppercase tracking-wider text-white/45">Phone</span><a className="transition hover:text-gold" href="tel:+254735916581">+254 735 916 581</a></li>
                        <li><span className="mb-1 block text-xs uppercase tracking-wider text-white/45">Location</span><span>Nairobi, Kenya</span></li>
                    </ul>
                </address>
            </div>
            <div className="border-t border-white/10">
                <div className="container-x flex flex-col justify-between gap-3 py-5 text-xs text-white/45 sm:flex-row sm:items-center">
                    <p>© {new Date().getFullYear()} Andrew Chemiati. All rights reserved.</p>
                    <a
                        href="#home"
                        className="self-end transition hover:text-gold sm:self-auto"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer></>
}

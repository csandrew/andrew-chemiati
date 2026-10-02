'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { services, projects, testimonials } from '@/data/content';

export function About() {
    return <section id="about" className="section grid-bg">
        <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr] items-center"><div>
            <p className="section-kicker">About me</p>
            <h2 className="section-title mt-4">Design with purpose; <span className="text-brown">Build with intent.</span></h2>
            <div className="mt-8 aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-navy to-gold p-3">
                <div className="relative h-full overflow-hidden rounded-[1.5rem]">
                    <img
                        src="/projects/i-face.jpg"
                        alt="Andrew Chemiati"
                        className="h-full w-full object-cover"
                    />

                    {/* Dark gradient so text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

                    {/* Text overlay */}
                    <div className="absolute bottom-6 left-6 text-white">
                        <p className="mt-1 text-2xl font-bold">Andrew Chemiati</p>
                        <p className="text-white/70">Software Developer</p>
                    </div>
                </div>
            </div>
        </div>
            <div>
                <p className="max-w-2xl text-xl leading-9 text-muted">My journey into software development began with a simple curiosity:
                    how can an idea be turned into something people can actually use?</p> <br />

                <p className="max-w-2xl text-xl leading-9 text-muted">With a background in Computer Science and over a year of experience, that curiosity has grown into a passion for creating digital products.
                    I&apos;ve worked through the different stages of development: From understanding a problem and designing a solution to writing code, working with APIs and databases, and bringing ideas to life.

                    I&apos;m interested in more than just making things work.
                    I want to understand the problem behind the code and build solutions that are useful, intuitive, and reliable. </p><br />

                <p className="max-w-2xl text-xl leading-9 text-muted">My goal is to use technology to create useful products, improve how organisations work, and contribute to Africa's digital transformation.</p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="https://github.com/csandrew"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-gold px-7 py-4 text-sm font-bold text-ink transition hover:opacity-90"
                    >
                        GitHub
                    </a>

                </div>
            </div>
        </div>
    </section>
}

export function Services() {
    return <section id="services" className="section">
        <div className="container-x">
            <div className="max-w-2xl">
                <p className="section-kicker">What I do</p>
                <h2 className="section-title mt-4">Built around{' '}
                    <span className="text-brown">real business needs.</span>
                </h2></div>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {services.map((s, i) =>
                    <motion.article whileHover={{ y: -6 }} key={s.title} className="group rounded-[2rem] border border-navy-dark/10 bg-white p-7 shadow-sm transition hover:border-brown/40 hover:shadow-xl">
                        <span className="text-sm font-bold text-brown">0{i + 1}</span>
                        <h3 className="mt-10 text-xl font-bold">{s.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-muted">{s.text}</p>
                        <div className="mt-7 h-1 w-8 rounded bg-gold transition-all group-hover:w-16" />
                    </motion.article>
                )}
            </div>
        </div>
    </section>
}

export function Work() {
    return (
        <section id="work" className="section bg-gray-light/25">
            <div className="container-x">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="section-kicker">Selected work</p>
                        <h2 className="section-title mt-4">
                            Real problems <span className="text-brown">Real products.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-7 text-muted">
                        A selection of software projects, web applications, and
                        digital systems I&apos;ve designed and developed.
                    </p>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    {projects.map((p, i) => (
                        <motion.article
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: i * 0.05 }}
                            key={p.title}
                            className="group overflow-hidden rounded-lg bg-white shadow-sm"
                        >
                            {/* Project Preview */}
                            <div className="aspect-[16/10] overflow-hidden bg-ink">
                                <img
                                    src={p.image}
                                    alt={`${p.title} project preview`}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Details */}
                            <div className="p-7">
                                <div className="flex items-center justify-between gap-4">
                                    <p className="text-xs font-bold uppercase tracking-widest text-brown">
                                        {p.category}
                                    </p>

                                    <span className="text-xs text-muted">
                                        {p.year}
                                    </span>
                                </div>

                                <h3 className="mt-3 text-2xl font-bold">
                                    {p.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-muted">
                                    {p.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {p.tech?.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-gray-light px-3 py-1 text-xs font-medium"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-7 flex flex-wrap gap-3">
                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-80"
                                        >
                                            Live Demo
                                        </a>
                                    )}


                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Process() {
    const items = [['01', 'Understand', 'Understand the problem, users, requirements and constraints.'], ['02', 'Plan', 'Define the solution, architecture, functionality and technical approach.'], ['03', 'Build', 'Design, develop, integrate, and test the application.'], ['04', 'Deploy', 'Launch, monitor, document and continuously improve the product.']];
    return <section id="process" className="section bg-ink text-white">
        <div className="container-x">
            <p className="section-kicker">The workflow</p>
            <h2 className="section-title mt-4 max-w-3xl">A simple process from <span className="text-gold">idea to delivery.</span></h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-4">{items.map(([n, t, d]) => <div key={n} className="bg-ink p-7"><span className="text-sm font-bold text-gold">{n}</span>
                <h3 className="mt-16 text-xl font-bold">{t}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{d}</p>
            </div>
            )}</div>
        </div>
    </section>
}

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonial = testimonials[activeIndex];

    const showPrevious = () => {
        setActiveIndex(index => (index - 1 + testimonials.length) % testimonials.length);
    };

    const showNext = () => {
        setActiveIndex(index => (index + 1) % testimonials.length);
    };

    return <section id="testimonials" className="section">
        <div className="container-x max-w-4xl">
            <div className="text-center">
                <p className="section-kicker">Referrals</p>
                <h2 className="section-title mt-4"> What people I&apos;ve worked with <span className="text-brown">say.</span></h2>
            </div>
            <div
                className="mt-14"
                role="region"
                aria-roledescription="carousel"
                aria-label="Client testimonials"
                tabIndex={0}
                onKeyDown={event => {
                    if (event.key === 'ArrowLeft') showPrevious();
                    if (event.key === 'ArrowRight') showNext();
                }}
            >
                <div className="overflow-hidden rounded-[2rem] border border-navy-dark/10 bg-white p-8 shadow-sm sm:p-12">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.blockquote
                            key={activeIndex}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -14 }}
                            transition={{ duration: 0.22 }}
                            aria-live="polite"
                        >
                            <div className="text-2xl text-gold" aria-label="5 out of 5 stars">★★★★★</div>
                            <p className="mt-6 text-lg leading-8 sm:text-xl">“{testimonial.text}”</p>
                            <footer className="mt-8 border-t border-navy-dark/10 pt-6">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <p className="font-bold">{testimonial.name}</p>
                                        <p className="text-sm text-muted">{testimonial.role}</p>
                                    </div>

                                    {testimonial.linkedin && (
                                        <a
                                            href={testimonial.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${testimonial.name} on LinkedIn`}
                                            className="ml-auto grid h-9 w-9 place-items-center rounded-full border border-navy-dark/10 text-navy-dark/60 transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                                        >
                                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </footer>
                        </motion.blockquote>
                    </AnimatePresence>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                    <button
                        type="button"
                        onClick={showPrevious}
                        aria-label="Previous testimonial"
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-navy-dark/15 text-xl transition hover:border-gold hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
                    >
                        <span aria-hidden="true">←</span>
                    </button>
                    <div className="flex items-center justify-center gap-2" aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}>
                        {testimonials.map((item, index) => (
                            <button
                                key={`${item.name}-${index}`}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                                aria-current={index === activeIndex ? 'true' : undefined}
                                className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown ${index === activeIndex ? 'w-7 bg-gold' : 'w-2.5 bg-gray-light hover:bg-gold-muted'}`}
                            />
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={showNext}
                        aria-label="Next testimonial"
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-navy-dark/15 text-xl transition hover:border-gold hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
                    >
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
}

'use client';
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
    const [state, handleSubmit] = useForm("xvkgnjay");

    if (state.succeeded) {
        return (
            <section id="contact" className="section bg-gray-light/25">
                <div className="container-x max-w-xl text-center">
                    <p className="section-kicker">Message received</p>
                    <h2 className="section-title mt-4">Thanks for reaching out.</h2>
                    <p className="mt-6 leading-8 text-muted">
                        I&apos;ve got your message and I&apos;ll get back to you within a day or two.
                    </p>
                    <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="mt-8 rounded-md border border-navy-dark/10 px-6 py-3 text-sm font-bold transition hover:bg-navy-dark/5"
                    >
                        Send another message
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="section bg-gray-light/25">
            <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] items-start">
                <div>
                    <p className="section-kicker">Let&apos;s talk</p>
                    <h2 className="section-title mt-4">Have a project in <span className="text-brown">mind?</span></h2>
                    <p className="mt-6 max-w-md leading-8 text-muted">
                        Tell me what you&apos;re building, what you need, and where you want to go. I&apos;ll get back to you with the next step.
                    </p>
                    <div className="mt-10 space-y-5 text-sm">
                        <p><span className="font-bold">Email</span><br /><span className="text-muted">andreaschemiati@gmail.com</span></p>
                        <p><span className="font-bold">Phone</span><br /><span className="text-muted">+254 735 916 581</span></p>
                        <p><span className="font-bold">Location</span><br /><span className="text-muted">Nairobi, Kenya</span></p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-9"
                >
                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className="text-sm font-semibold">
                            Name
                            <input
                                required
                                className="mt-2 w-full rounded-xl border border-navy-dark/10 px-4 py-3 outline-none focus:border-brown"
                                name="name"
                                placeholder="Your name"
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </label>

                        <label className="text-sm font-semibold">
                            Email
                            <input
                                required
                                type="email"
                                className="mt-2 w-full rounded-xl border border-navy-dark/10 px-4 py-3 outline-none focus:border-brown"
                                name="email"
                                placeholder="you@example.com"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </label>
                    </div>

                    <label className="mt-5 block text-sm font-semibold">
                        Project type
                        <input
                            className="mt-2 w-full rounded-xl border border-navy-dark/10 px-4 py-3 outline-none focus:border-brown"
                            name="project"
                            placeholder="Website, branding, UI/UX..."
                        />
                    </label>

                    <label className="mt-5 block text-sm font-semibold">
                        Message
                        <textarea
                            required
                            rows={6}
                            className="mt-2 w-full resize-none rounded-xl border border-navy-dark/10 px-4 py-3 outline-none focus:border-brown"
                            name="message"
                            placeholder="Tell me about your project..."
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </label>

                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="mt-6 rounded-md bg-gold px-7 py-4 font-bold text-ink transition hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {state.submitting ? 'Sending...' : 'Send enquiry'}
                    </button>
                </form>
            </div>
        </section>
    );
}
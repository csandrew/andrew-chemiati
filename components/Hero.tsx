'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-ink pt-20 text-white"
        >
            {/* Background glow */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 75% 25%, var(--gold) 0, transparent 28%), radial-gradient(circle at 15% 80%, var(--gold) 0, transparent 22%)',
                }}
            />

            <div className="container-x relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">

                {/* LEFT — TEXT */}
                <div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-4xl text-5xl font-extrabold tracking-[-.06em] sm:text-7xl lg:text-8xl"
                    >
                        I build
                        <span className="text-gold"> software</span> that
                        solves real-world problems.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-7 max-w-2xl text-lg leading-8 text-white/65"
                    >
                        I design and develop web applications and digital
                        systems that help organisations and businesses work
                        smarter, serve their users better, and turn ideas into
                        working products.
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-9 flex flex-wrap gap-4"
                    >
                        <a
                            href="#work"
                            className="rounded-md bg-gold px-7 py-4 font-bold text-ink transition hover:opacity-90"
                        >
                            View my work
                        </a>


                    </motion.div>

                    {/* SKILLS */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-14 flex flex-wrap gap-3 text-sm text-white/50"
                    >
                        {[
                            'Software Development',
                            'Web Applications',
                            'UI/UX & Frontend',
                            'Backend & APIs',
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-white/10 px-4 py-2"
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT — PORTRAIT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="hidden lg:flex justify-center"
                >
                    <div className="relative w-full max-w-[430px]">

                        {/* Gold glow behind image */}
                        <div className="absolute -inset-4 rounded-[3rem] bg-gold/10 blur-3xl" />

                        {/* Image frame */}
                        <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[.04] p-3 shadow-2xl">

                            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">

                                <img
                                    src="/projects/i-face.jpg"
                                    alt="Andrew Chemiati"
                                    className="h-full w-full object-cover"
                                />

                                {/* Image gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />

                                {/* Name on image */}
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-sm font-medium text-white/60">
                                        Software Developer
                                    </p>

                                    <h2 className="mt-1 text-2xl font-bold">
                                        Andrew Chemiati
                                    </h2>
                                </div>
                            </div>
                        </div>



                    </div>
                </motion.div>
            </div>
        </section>
    );
}
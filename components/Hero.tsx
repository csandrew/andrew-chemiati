'use client';
import { motion } from 'framer-motion';
export default function Hero() {
    return <section id="home" className="relative min-h-screen overflow-hidden bg-ink text-white pt-20">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 75% 25%, var(--gold) 0, transparent 28%), radial-gradient(circle at 15% 80%, var(--gold) 0, transparent 22%)' }} />
        <div className="container-x relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
            <div>
                {/*<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-5 font-semibold text-white/60">Hello 👋 I&apos;m Andrew</motion.p> */}
                <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="max-w-4xl text-5xl font-extrabold tracking-[-.06em] sm:text-7xl lg:text-8xl">I build<span className="text-gold"> software</span> that solves real-world problems.</motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-7 max-w-2xl text-lg leading-8 text-white/65">I design and develop web applications and digital systems that help organisations and businesses work smarter, serve their users better, and turn ideas into working products.</motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-9 flex flex-wrap gap-4"><a href="#work" className="rounded-md bg-gold px-7 py-4 font-bold text-ink">View my work</a><a href="#contact" className="rounded-md border border-white/20 px-7 py-4 font-bold hover:bg-white hover:text-ink">Let&apos;s work together</a></motion.div>
                {<div className="mt-14 flex flex-wrap gap-3 text-sm text-white/50">{['Software Development', 'Web Applications', 'UI/UX & Frontend', 'Backend & APIs'].map(x => <span key={x} className="rounded-full border border-white/10 px-4 py-2">{x}</span>)}</div>}
            </div>
            <div className="hidden lg:block">
                <div className="relative mx-auto aspect-square max-w-[440px] rounded-[3rem] border border-white/10 bg-white/[.04] p-6 shadow-2xl">
                    <div className="h-full rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[.02] p-8">
                        <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-white/30" /><span className="h-3 w-3 rounded-full bg-white/20" /><span className="h-3 w-3 rounded-full bg-white/10" /></div>
                        <div className="mt-16 space-y-5">
                            <div className="h-5 w-2/5 rounded bg-gold/80" /><div className="h-4 w-4/5 rounded bg-white/20" /><div className="h-4 w-3/5 rounded bg-white/10" /><div className="grid grid-cols-2 gap-4 pt-8"><div className="h-32 rounded-2xl bg-gold/15" /><div className="h-32 rounded-2xl bg-white/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

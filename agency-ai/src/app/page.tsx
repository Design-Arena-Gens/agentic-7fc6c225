import ContactForm from "@/components/contact-form";
import {
  ArrowUpRight,
  Check,
  MousePointerClick,
  Sparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Cruscotti intelligenti",
    description:
      "Hub di controllo end-to-end con KPI predittivi, insight real-time e viste personalizzate per ogni team.",
    highlights: [
      "Integrazione con ERP, CRM e dati IoT",
      "Modelli di previsione personalizzati",
      "Report dinamici e alert proattivi",
    ],
  },
  {
    title: "Automazioni operative",
    description:
      "Sistemi orchestrati che eliminano il lavoro manuale tra reparti, riducendo tempi di risposta e errori.",
    highlights: [
      "Copiloti per flussi interni e customer care",
      "Pipeline di documenti, ticket e richieste",
      "Conformità e audit trail completi",
    ],
  },
  {
    title: "Intelligenza commerciale",
    description:
      "Marketing predittivo, campagne omnicanale e sales enablement guidati da AI conversazionale.",
    highlights: [
      "Segmentazione dinamica e scoring lead",
      "Copy e creatività generate e testate",
      "Voice AI per call center e follow-up",
    ],
  },
  {
    title: "Esperienze digitali",
    description:
      "Siti, funnel e micro-app evolutive con UX data-driven e contenuti adattivi in tempo reale.",
    highlights: [
      "UX modulare basata sui comportamenti",
      "A/B/n e personalizzazione live",
      "Integrazione analytics avanzata",
    ],
  },
];

const differentiators = [
  {
    label: "Discovery immersivo",
    value: "10 giorni",
    description:
      "Workshop intensivo con stakeholder, mappatura processi e quick-win per calcolare ROI immediato.",
  },
  {
    label: "Accelerator proprietari",
    value: "6 moduli",
    description:
      "Componenti riutilizzabili per NLP, visione, agenti dinamici e orchestrazione multi-model.",
  },
  {
    label: "Sicurezza enterprise",
    value: "ISO-ready",
    description:
      "Data governance, ambienti isolati e compliance by design per settori regolamentati.",
  },
];

const results = [
  { metric: "+42%", label: "conversioni su funnel B2B", context: "media 90 giorni" },
  { metric: "3,4x", label: "accelerazione dei processi", context: "after automazioni" },
  { metric: "-37%", label: "costi di gestione richieste", context: "grazie a voice AI" },
];

const process = [
  {
    phase: "01. Vision & Blueprint",
    focus:
      "Definiamo gli outcome critici, il modello operativo e l'architettura dati ideale.",
    outcome: "Roadmap strategica, KPI di successo e piano di rilascio incrementale.",
  },
  {
    phase: "02. Rapid Prototyping",
    focus:
      "Costruiamo in sprint soluzioni ad alto impatto, integrate con tool e basi dati esistenti.",
    outcome: "MVP funzionante in 21 giorni, validato con gli stakeholder chiave.",
  },
  {
    phase: "03. Scale & Enablement",
    focus:
      "Automatizziamo ruoli critici, formiamo i team e predisponiamo monitoraggio e governance.",
    outcome:
      "Rollout scalabile, documentazione, training e co-pilot dedicati su misura.",
  },
];

const testimonials = [
  {
    quote:
      "In otto settimane NEURA//FORGE ci ha consegnato una piattaforma AI che unisce marketing, sales e customer care. Le campagne ora si ottimizzano da sole e i nostri agenti hanno un copilota contestuale.",
    author: "Martina Lodi",
    role: "Chief Growth Officer, NexaLab",
  },
  {
    quote:
      "La capacità di orchestrare agenti AI, voice bot e sistemi legacy è impressionante. Hanno costruito reportistica predittiva che anticipa i volumi di richieste e attiva automazioni istantanee.",
    author: "Stefano Serra",
    role: "COO, Helix Utilities",
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,.25)_0,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(236,72,153,.25)_0,transparent_45%)]" />
      </div>
      <header className="border-b border-white/5 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
              NEURA//FORGE
            </p>
            <p className="text-sm text-slate-300">
              Sistemi AI su misura per business visionari
            </p>
          </div>
          <a
            href="#consulenza"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-400/20"
          >
            Prenota la consulenza
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>
      <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6 py-16 sm:py-24">
        <section className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-[0_20px_80px_-40px_rgba(6,182,212,0.6)] md:p-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                Agenzia AI Avanguardista
              </span>
              <h1 className="font-heading text-3xl leading-tight text-slate-50 sm:text-5xl sm:leading-[1.05]">
                Progettiamo ecosistemi di intelligenza artificiale che unificano
                dati, persone e crescita.
              </h1>
              <p className="text-lg text-slate-300 sm:text-xl">
                Dal primo prototipo alla scalabilità globale, costruiamo sistemi
                AI tailor-made che trasformano processi, customer experience e
                marginalità. Ogni iniziativa è guidata da insight reali, modelli
                proprietari e un team dedicato al tuo settore.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#consulenza"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Richiedi una diagnosi gratuita
                  <MousePointerClick className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#metodo"
                  className="inline-flex items-center gap-3 text-sm font-semibold text-slate-200 hover:text-cyan-200"
                >
                  Scopri il metodo end-to-end
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid gap-6 rounded-2xl border border-white/5 bg-slate-950/60 p-6 sm:grid-cols-3">
              {results.map((item) => (
                <div key={item.metric}>
                  <p className="font-heading text-3xl text-cyan-300 sm:text-4xl">
                    {item.metric}
                  </p>
                  <p className="text-sm text-slate-300">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="soluzioni" className="space-y-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-300">
              Soluzioni modulari
            </span>
            <h2 className="max-w-3xl font-heading text-3xl text-slate-50 sm:text-4xl">
              Un framework proprietario che trasforma ogni reparto con
              intelligenza aumentata.
            </h2>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Le nostre unit verticali lavorano in parallelo per rilasciare
              acceleratori pronti all&apos;uso e personalizzazioni profonde su
              infrastrutture cloud, on-premise o ibride.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 transition hover:border-cyan-400/60 hover:bg-slate-900/80"
              >
                <div className="pointer-events-none absolute -right-10 top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl" />
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-heading text-2xl text-slate-50">
                    {service.title}
                  </h3>
                  <Zap className="h-5 w-5 text-cyan-300" />
                </div>
                <p className="mt-4 text-sm text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm text-slate-200">{highlight}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="metodo" className="space-y-12">
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-300">
              Metodo
            </span>
            <h2 className="max-w-3xl font-heading text-3xl text-slate-50 sm:text-4xl">
              Dal primo blueprint alla scalabilità: guidiamo ogni step del tuo
              ecosistema AI.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {process.map((stage) => (
              <div
                key={stage.phase}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                  {stage.phase}
                </p>
                <p className="text-base text-slate-200">{stage.focus}</p>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300">
                  <p className="font-semibold text-slate-100">Deliverable:</p>
                  <p>{stage.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/60 p-10">
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-300">
              Perché noi
            </span>
            <h2 className="font-heading text-3xl text-slate-50 sm:text-4xl">
              Strategie, tecnologia e change management sotto un unico partner.
            </h2>
            <p className="text-base text-slate-300">
              Non ci fermiamo alla prototipazione. Disegniamo governance,
              security posture, adoption plan e training per ogni team. Il nostro
              modello operativo ibrido combina product studio, consulenza e
              delivery tecnica.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {differentiators.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-slate-950/50 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 font-heading text-2xl text-cyan-300">
                    {item.value}
                  </p>
                  <p className="mt-3 text-xs text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-900/80 p-8"
              >
                <p className="text-sm text-slate-200">{testimonial.quote}</p>
                <div className="mt-6 text-xs uppercase tracking-[0.2em] text-cyan-200">
                  {testimonial.author}
                </div>
                <div className="text-xs text-slate-400">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-slate-900/80 to-fuchsia-500/20 p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
            <div className="space-y-5">
              <span className="text-xs uppercase tracking-[0.4em] text-cyan-100">
                Consulenza gratuita
              </span>
              <h2 className="font-heading text-3xl text-slate-50 sm:text-4xl">
                Dimostriamo il valore in meno di tre settimane.
              </h2>
              <p className="text-base text-slate-200">
                Prenota una sessione strategica con i nostri lead architect:
                analizziamo i tuoi processi, identifichiamo quick-win e
                costruiamo un piano d&apos;azione con ROI tangibile. Nessun
                impegno, solo insight che puoi usare subito.
              </p>
              <ul className="space-y-3 text-sm text-slate-100">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-cyan-200" />
                  Audit su workflow, dati e maturità AI
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-cyan-200" />
                  Roadmap personalizzata con priorità e budget
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-cyan-200" />
                  Proposta di proof-of-value pronta ad essere sviluppata
                </li>
              </ul>
            </div>
            <div id="consulenza" className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/5 bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-50">NEURA//FORGE</p>
            <p className="text-xs text-slate-400">
              AI Agency | Milano · Berlino · Remote-first
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <a href="#soluzioni" className="hover:text-cyan-200">
              Soluzioni
            </a>
            <a href="#metodo" className="hover:text-cyan-200">
              Metodo
            </a>
            <a href="#consulenza" className="hover:text-cyan-200">
              Prenota
            </a>
            <span>© {new Date().getFullYear()} NEURA//FORGE. Tutti i diritti riservati.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

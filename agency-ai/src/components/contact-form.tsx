'use client';

import { FormEvent, useState } from "react";
import { LoaderCircle, SendHorizontal } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  nome: "",
  email: "",
  azienda: "",
  settore: "",
  sfida: "",
  obiettivo: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const updateField = (field: keyof typeof initialForm) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setMessage(null);

    try {
      const response = await fetch("/api/consultazione", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Errore di rete");
      }

      setStatus("success");
      setMessage(
        "Ricevuto! Ti ricontatteremo entro 24 ore con gli slot disponibili."
      );
      setFormData(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(
        "Qualcosa è andato storto. Riprova tra qualche secondo o scrivi a founder@neuraforge.com."
      );
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-1.5">
        <label htmlFor="nome" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
          Nome e cognome
        </label>
        <input
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={(event) => updateField("nome")(event.target.value)}
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          placeholder="Es. Laura Verdi"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            Email aziendale
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(event) => updateField("email")(event.target.value)}
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            placeholder="nome@azienda.com"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="azienda" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            Azienda
          </label>
          <input
            id="azienda"
            name="azienda"
            value={formData.azienda}
            onChange={(event) => updateField("azienda")(event.target.value)}
            required
            className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            placeholder="Nome azienda"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="settore" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
          Settore
        </label>
        <input
          id="settore"
          name="settore"
          value={formData.settore}
          onChange={(event) => updateField("settore")(event.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          placeholder="Es. Fintech, Retail, Manifattura"
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="sfida" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
          Qual è la sfida principale?
        </label>
        <textarea
          id="sfida"
          name="sfida"
          value={formData.sfida}
          onChange={(event) => updateField("sfida")(event.target.value)}
          required
          className="h-24 w-full resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          placeholder="Descrivi brevemente processi, volumi e aspettative."
        />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="obiettivo" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
          Obiettivo nei prossimi 90 giorni
        </label>
        <textarea
          id="obiettivo"
          name="obiettivo"
          value={formData.obiettivo}
          onChange={(event) => updateField("obiettivo")(event.target.value)}
          className="h-20 w-full resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          placeholder="Automazioni, crescita, customer experience..."
        />
      </div>
      <div className="space-y-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-cyan-500/60"
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Invio in corso...
            </>
          ) : (
            <>
              Invia richiesta
              <SendHorizontal className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
        {message && (
          <p
            className={`text-center text-xs ${
              status === "error" ? "text-rose-300" : "text-cyan-200"
            }`}
          >
            {message}
          </p>
        )}
      </div>
      <p className="text-[10px] text-slate-500">
        Inviando il form accetti la nostra <span className="text-slate-300">privacy policy</span> e il
        trattamento dei dati per finalità di contatto. Nessuna newsletter non richiesta.
      </p>
    </form>
  );
}

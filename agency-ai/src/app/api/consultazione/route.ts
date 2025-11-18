import { NextResponse } from "next/server";

const requiredFields = ["nome", "email", "azienda", "sfida"] as const;

type ConsultationPayload = {
  nome: string;
  email: string;
  azienda: string;
  settore?: string;
  sfida: string;
  obiettivo?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ConsultationPayload>;

    for (const field of requiredFields) {
      if (!payload[field] || String(payload[field]).trim().length === 0) {
        return NextResponse.json(
          { error: `Campo mancante: ${field}` },
          { status: 400 }
        );
      }
    }

    console.info("[CONSULTAZIONE]", {
      ...payload,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        message:
          "Richiesta registrata con successo. Ti ricontatteremo entro 24 ore lavorative.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONSULTAZIONE][ERROR]", error);
    return NextResponse.json(
      {
        error:
          "Impossibile processare la richiesta. Controlla i dati e riprova tra poco.",
      },
      { status: 500 }
    );
  }
}

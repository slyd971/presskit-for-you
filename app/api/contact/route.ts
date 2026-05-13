import { NextResponse } from "next/server";

import {
  hasContactFormErrors,
  normalizeContactFormPayload,
  validateContactForm,
} from "@/lib/contact-form";

export async function POST(request: Request) {
  try {
    const payload = normalizeContactFormPayload(await request.json());
    const errors = validateContactForm(payload);

    if (hasContactFormErrors(errors)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Certains champs doivent être corrigés.",
          errors,
        },
        { status: 400 },
      );
    }

    const apiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME;

    if (!apiKey || !baseId || !tableName) {
      console.error("Airtable env vars are missing.");

      return NextResponse.json(
        {
          ok: false,
          message: "Le formulaire est momentanément indisponible. Réessaie dans un instant.",
        },
        { status: 500 },
      );
    }

    const notes = [
      `Email: ${payload.email}`,
      `Téléphone / WhatsApp: ${payload.phone || "Non renseigné"}`,
      `Ville: ${payload.city || "Non renseignée"}`,
      `Activité / Projet: ${payload.activityName}`,
      `Type de press kit: ${payload.pressKitType}`,
      `Objectif: ${payload.mainGoal}`,
      `Univers: ${payload.visualStyle}`,
      `Deadline: ${payload.deadline}`,
      `Budget: ${payload.budget}`,
      `Message: ${payload.message || "Aucun message complémentaire."}`,
    ].join("\n");

    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Nom: payload.lastName,
                Prénom: payload.firstName,
                "Nom de scène": payload.stageName,
                Métier: payload.jobTitle,
                "Type de profil": ["Prospect"],
                Statut: "Prospect",
                Notes: notes,
              },
            },
          ],
        }),
        cache: "no-store",
      },
    );

    if (!airtableResponse.ok) {
      const details = await airtableResponse.text();
      console.error("Airtable request failed:", details);

      return NextResponse.json(
        {
          ok: false,
          message: "Impossible d’envoyer la demande pour le moment. Réessaie dans quelques minutes.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Ta demande a bien été envoyée. Tu recevras un retour rapidement.",
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Une erreur est survenue. Réessaie dans un instant.",
      },
      { status: 500 },
    );
  }
}

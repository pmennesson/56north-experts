/**
 * "Your last three missions" step of the expert application.
 * Shared by the form (client) and the server action. Stored in talents.missions (jsonb).
 */
export const MISSION_ROWS = [1, 2, 3] as const;

/** The last four years, newest first. The page is pre-rendered, so this is fixed at build time. */
const thisYear = new Date().getFullYear();
export const MISSION_YEARS = [thisYear, thisYear - 1, thisYear - 2, thisYear - 3].map(String);

export type Mission = { client: string; year: string | null; stake: string | null };

/** Reads the mission rows from the submitted fields. Rows without a client are dropped. */
export function parseMissions(data: Record<string, string>): Mission[] {
  const maxYear = new Date().getFullYear() + 1;
  const missions: Mission[] = [];
  for (const n of MISSION_ROWS) {
    const client = (data[`mission_client_${n}`] ?? "").slice(0, 80);
    if (!client) continue;
    const rawYear = data[`mission_year_${n}`] ?? "";
    const year = /^\d{4}$/.test(rawYear) && +rawYear >= 2000 && +rawYear <= maxYear ? rawYear : null;
    const stake = (data[`mission_stake_${n}`] ?? "").slice(0, 120) || null;
    missions.push({ client, year, stake });
  }
  return missions;
}

/** One line per mission, for the alert e-mail. */
export function formatMissions(missions: Mission[]): string {
  return missions.map((m) => [m.client, m.year, m.stake].filter(Boolean).join(" · ")).join(" | ");
}

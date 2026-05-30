// app/SQLTesting/actions.ts
'use server';

import { createLuvSQLExecutor, LuvSQLResult } from "@/UI-Features/webComponent/dashboardComponent/entriesComponent/DatabaseServer/LuvSQLServer";

let executorPromise: Promise<{ executeLuvSQL: any }> | null = null;

async function getExecutor() {
  if (!executorPromise) {
    executorPromise = createLuvSQLExecutor();
  }
  return executorPromise;
}

export async function defineBlueprint(
  dbName: string,
  columns: string
): Promise<LuvSQLResult> {
  const { executeLuvSQL } = await getExecutor();
  return executeLuvSQL('defineBlueprint', dbName, columns);
}
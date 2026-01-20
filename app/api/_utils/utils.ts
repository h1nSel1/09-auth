export function logErrorResponse(errorObj: unknown): void {
  const red = "\x1b[31m";
  const brightRed = "\x1b[91m";
  const reset = "\x1b[0m";

  console.log(`${red}> ${brightRed}Error Response Data:${reset}`);
  console.dir(errorObj, { depth: null, colors: true });
}

export async function throwIfResponseNotOk(
  response: Response,
  includeText: boolean = true,
): Promise<void> {
  if (response.ok) {
    return;
  }

  if (includeText) {
    throw new Error(`Unexpected HTTP ${response.status} with content ${await response.text()}`);
  } else {
    throw new Error(`Unexpected HTTP ${response.status}`);
  }
}

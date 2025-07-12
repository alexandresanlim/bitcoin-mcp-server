export const formatResponse = <T extends object>(
  title: string,
  data: T | null
): string => {
  if (!data) {
    return `Failed to retrieve ${title.toLowerCase()} data.`;
  }
  let msg = `${title}:\n`;
  for (const [key, value] of Object.entries(data)) {
    msg += `${key}: ${value ?? "N/A"}\n`;
  }
  return msg.trim();
};

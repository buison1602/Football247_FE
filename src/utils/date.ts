/**
 * Safely validates and parses a date string/value
 * @param dateInput - The date input (string, number, Date, or null/undefined)
 * @returns A valid Date object or null if invalid
 */
export function safeParseDate(dateInput: string | number | Date | null | undefined): Date | null {
  if (!dateInput) return null;

  try {
    const date = new Date(dateInput);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return null;
    }

    return date;
  } catch (error) {
    console.warn('Invalid date input:', dateInput, error);
    return null;
  }
}

/**
 * Safely converts a date to ISO string for HTML datetime attributes
 * @param dateInput - The date input (string, number, Date, or null/undefined)
 * @returns A valid ISO string or empty string if invalid
 */
export function formatDateForDateTime(dateInput: string | number | Date | null | undefined): string {
  const date = safeParseDate(dateInput);

  if (!date) {
    return ''; // Return empty string for invalid dates
  }

  try {
    return date.toISOString();
  } catch (error) {
    console.warn('Error converting date to ISO string:', dateInput, error);
    return '';
  }
}

/**
 * Safely formats a date for structured data (JSON-LD)
 * @param dateInput - The date input (string, number, Date, or null/undefined)
 * @returns A valid ISO string or static fallback to prevent hydration mismatch
 */
export function formatDateForStructuredData(dateInput: string | number | Date | null | undefined): string {
  const date = safeParseDate(dateInput);

  if (!date) {
    // For structured data, we need a valid date, but use static fallback to prevent hydration mismatch
    return '2025-01-17T00:00:00.000Z'; // Static fallback date
  }

  try {
    return date.toISOString();
  } catch (error) {
    console.warn('Error converting date to ISO string for structured data:', dateInput, error);
    return '2025-01-17T00:00:00.000Z'; // Static fallback date
  }
}

export function formatPublishedAt(dateString: string): string {
  // Safely parse the date first
  const utcDate = safeParseDate(dateString);

  if (!utcDate) {
    // Return a fallback for invalid dates
    return 'Recently';
  }

  const vnOffset = 7 * 60; // UTC+7, đơn vị: phút
  const localDate = new Date(utcDate.getTime() + vnOffset * 60 * 1000);

  const now = new Date();
  const nowVN = new Date(now.getTime() + vnOffset * 60 * 1000);

  const diffMs = nowVN.getTime() - localDate.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Nếu trong vòng 24 giờ
  if (diffHours < 24) {
    if (diffHours < 1) {
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
    }
    return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  }

  // Nếu đúng 1 ngày
  if (diffDays === 1) {
    return "Yesterday";
  }

  // Nếu > 1 ngày
  return localDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

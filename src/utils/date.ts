export function formatPublishedAt(dateString: string): string {
  // Chuyển đổi sang Date theo múi giờ Việt Nam
  const utcDate = new Date(dateString);
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

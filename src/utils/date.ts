export function formatDate(dateString: string): {
  day: string;
  formattedDate: string;
} {
  const date = new Date(dateString);
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" }).slice(0, 3);
  let suffix = "th";

  if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) suffix = "st";
  else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) suffix = "nd";
  else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) suffix = "rd";
  const formattedDate = `${dayOfMonth}${suffix} ${month}`;

  return { day, formattedDate };
}

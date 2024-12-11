import readingTime from 'reading-time';

export function getReadingTime(content: string) {
  const stats = readingTime(content);
  return stats;
}
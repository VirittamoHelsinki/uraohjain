export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function truncateText(text: string, maxCharacters = 100, readMoreText = 'Read more'): string {
  // Check if the text length is greater than the maximum allowed characters
  if (text.length > maxCharacters) {
    // Truncate the text to the specified number of characters
    const truncatedText = text.slice(0, maxCharacters);
    return `${truncatedText} ${readMoreText}`;
  } else {
    // If not truncated, return the original text
    return text;
  }
}

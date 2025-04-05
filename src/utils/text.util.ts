/**
 * Format views
 * @param views Views count
 * @returns Views formated
 */
export function formatViews(views: number) {
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (views >= 1_000) {
      return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return views.toString();
}
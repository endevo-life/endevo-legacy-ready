import { Link } from "react-router-dom";

export interface NeighbourItem {
  /** Stable identity used to find the current page in the list. */
  key: string;
  href: string;
  title: string;
}

interface NeighbourLinksProps {
  /** Accessible name of the <nav>, also shown as the list heading. */
  label: string;
  previousLabel: string;
  nextLabel: string;
  /** Every item, oldest first. */
  items: NeighbourItem[];
  currentKey: string;
  /** How many extra items the short list shows. */
  moreCount?: number;
}

const cardClass =
  "flex min-h-[44px] flex-col justify-center rounded-lg border border-gray-200 px-4 py-3 transition-colors hover:border-brand-orange hover:bg-orange-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2";

/**
 * Previous / next links plus a short list of other items, shown at the end
 * of an article or episode page.
 *
 * The /blog and /videos listings paginate with buttons, so their HTML only
 * links to the first few items. These plain links give crawlers (and
 * readers) a path from every page to every other one. Renders nothing when
 * the current item is not in the list, e.g. if the list failed to load.
 */
const NeighbourLinks = ({
  label,
  previousLabel,
  nextLabel,
  items,
  currentKey,
  moreCount = 3,
}: NeighbourLinksProps) => {
  const index = items.findIndex((item) => item.key === currentKey);
  if (index === -1 || items.length < 2) return null;

  const previous = index > 0 ? items[index - 1] : undefined;
  const next = index < items.length - 1 ? items[index + 1] : undefined;

  // The items after the next one, wrapping round to the start, so the list
  // never repeats the current page or the neighbours above it.
  const shown = new Set([currentKey, previous?.key, next?.key]);
  const more: NeighbourItem[] = [];
  for (
    let step = 2;
    step < items.length + 1 && more.length < moreCount;
    step++
  ) {
    const item = items[(index + step) % items.length];
    if (shown.has(item.key)) continue;
    shown.add(item.key);
    more.push(item);
  }

  return (
    <nav aria-label={label} className="mt-12 border-t border-gray-200 pt-8">
      <div className="grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link to={previous.href} className={cardClass}>
            <span className="block text-sm text-muted-foreground">
              <span aria-hidden="true">← </span>
              {previousLabel}
            </span>
            <span className="block font-medium text-brand-navy">
              {previous.title}
            </span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && (
          <Link to={next.href} className={`${cardClass} sm:text-right`}>
            <span className="block text-sm text-muted-foreground">
              {nextLabel}
              <span aria-hidden="true"> →</span>
            </span>
            <span className="block font-medium text-brand-navy">
              {next.title}
            </span>
          </Link>
        )}
      </div>

      {more.length > 0 && (
        <>
          <h2 className="mb-2 mt-10 font-playfair text-xl font-bold text-brand-navy">
            {label}
          </h2>
          <ul className="divide-y divide-gray-200">
            {more.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.href}
                  className="flex min-h-[44px] items-center py-2 text-gray-700 underline-offset-4 transition-colors hover:text-brand-orange hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
};

export default NeighbourLinks;

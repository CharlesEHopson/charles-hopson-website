import { useMemo, useState } from 'react';
import './personal-page.css';

const favoriteGroups = [
  {
    id: 'anime',
    category: 'Anime',
    items: [
      'Dragon Ball',
      'Gurren Lagann',
      'Re:Zero',
      'KonoSuba',
      "JoJo's Bizarre Adventure",
      'Fate/Stay Night: Unlimited Blade Works',
      'Naruto',
      'My Hero Academia',
      'Jujutsu Kaisen',
      'And more',
    ],
    note: 'A selection of favorite anime series.',
  },
  {
    id: 'video-games',
    category: 'Video Games',
    items: [
      'Grand Theft Auto: San Andreas',
      'Kingdom Hearts series',
      'Deltarune',
      "Marvel's Spider-Man",
      'Wayhaven Chronicles',
      'Gravity Rush 2',
      'Devil May Cry series',
      'Cyberpunk 2077',
      'Final Fantasy VII Remake',
      'Final Fantasy XVI',
      'Gacha games',
      'And more',
    ],
    note: 'Favorites across mobile, console, and PC gaming.',
  },
  {
    id: 'creative-writing',
    category: 'Creative Writing',
    items: [
      'Short stories',
      'Story drafts',
      'Dungeons & Dragons',
      'Character profiles',
      'Character backstories',
    ],
    note: 'A place for writing ideas and character development.',
  },
  {
    id: 'visual-art',
    category: 'Visual Art',
    items: [],
    note: 'Gallery placeholders for drawings and photography. Artwork can be added later.',
    gallery: true,
  },
  {
    id: 'fictional-novels',
    category: 'Fictional Novels (Audiobooks)',
    items: [
      'Percy Jackson & the Olympians (Original Series)',
      'Mistborn (First Trilogy)',
      'More on the way soon',
    ],
    note: 'Audiobooks are the preferred format.',
    isNew: true,
  },
];

const sectionDescriptions = {
  biography: {
    title: 'Biography',
    description:
      'A personal timeline is planned, with dated life events, descriptions, and room for photographs. This section is still being put together.',
  },
  works: {
    title: 'Works in Progress',
    description:
      'A space for creative projects, works in progress, and ideas for future projects. Details will be added as they take shape.',
  },
};

function FavoriteThingsTable({ filter, sortAlphabetically }) {
  const visibleGroups = useMemo(() => {
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredGroups = favoriteGroups.filter((group) => {
      const searchableText = [
        group.category,
        group.note,
        ...group.items,
        ...(group.gallery ? ['drawings', 'photography', 'gallery'] : []),
      ]
        .join(' ')
        .toLocaleLowerCase();

      return searchableText.includes(normalizedFilter);
    });

    if (sortAlphabetically) {
      filteredGroups.sort((first, second) =>
        first.category.localeCompare(second.category),
      );
    }

    return filteredGroups;
  }, [filter, sortAlphabetically]);

  return (
    <section className="personal-content-section" aria-labelledby="favorites-heading">
      <div className="personal-content-heading">
        <div>
          <p className="eyebrow">The things I enjoy</p>
          <h2 id="favorites-heading">Favorite Things</h2>
        </div>
        <span className="personal-entry-count">
          {visibleGroups.length} {visibleGroups.length === 1 ? 'category' : 'categories'}
        </span>
      </div>

      {visibleGroups.length > 0 ? (
        <div className="personal-table-wrap">
          <table className="personal-favorites-table">
            <caption>Favorite interests and selected examples</caption>
            <thead>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Favorites and examples</th>
                <th scope="col">Notes</th>
              </tr>
            </thead>
            <tbody>
              {visibleGroups.map((group) => (
                <tr key={group.id}>
                  <th scope="row">
                    <span className="personal-table-category">
                      {group.category}
                      {group.isNew && <span className="personal-new-label">New</span>}
                    </span>
                  </th>
                  <td>
                    {group.gallery ? (
                      <div className="personal-art-gallery" aria-label="Visual art gallery placeholders">
                        <div className="personal-art-placeholder" role="img" aria-label="Drawing placeholder">
                          <span>01</span>
                          <strong>Drawing</strong>
                          <small>Gallery placeholder</small>
                        </div>
                        <div className="personal-art-placeholder" role="img" aria-label="Photography placeholder">
                          <span>02</span>
                          <strong>Photography</strong>
                          <small>Gallery placeholder</small>
                        </div>
                        <div className="personal-art-placeholder" role="img" aria-label="Additional art placeholder">
                          <span>03</span>
                          <strong>More art</strong>
                          <small>Gallery placeholder</small>
                        </div>
                      </div>
                    ) : (
                      <ul className="personal-favorite-list">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                  <td className="personal-table-notes">{group.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="personal-no-results" role="status">
          No favorite categories match “{filter}”. Try another search term.
        </div>
      )}
    </section>
  );
}

function ComingSoonSection({ section }) {
  const content = sectionDescriptions[section];

  return (
    <section className="personal-coming-soon" aria-labelledby="personal-coming-soon-heading">
      <span className="personal-coming-soon-mark" aria-hidden="true">{section === 'biography' ? '01' : '02'}</span>
      <p className="eyebrow">In development</p>
      <h2 id="personal-coming-soon-heading">{content.title}</h2>
      <span className="personal-status-label">Coming Soon</span>
      <p>{content.description}</p>
    </section>
  );
}

export default function PersonalPage() {
  const [draftCategory, setDraftCategory] = useState('favorites');
  const [draftFilter, setDraftFilter] = useState('');
  const [draftSort, setDraftSort] = useState(false);
  const [loadedCategory, setLoadedCategory] = useState('');
  const [loadedFilter, setLoadedFilter] = useState('');
  const [loadedSort, setLoadedSort] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoadedCategory(draftCategory);
    setLoadedFilter(draftFilter.trim());
    setLoadedSort(draftSort);
  }

  return (
    <main id="personal" className="page-shell personal-page">
      <section className="personal-hero">
        <p className="eyebrow">Main Page / Personal</p>
        <h1>A little more <span>about me.</span></h1>
        <p className="personal-hero-description">
          A collection of interests, creative pursuits, and personal experiences.
          Choose a section below to explore it without leaving or reloading the page.
        </p>
      </section>

      <section className="personal-explorer" aria-labelledby="personal-explorer-heading">
        <div className="section-heading personal-explorer-heading">
          <div>
            <p className="eyebrow">Explore the personal side</p>
            <h2 id="personal-explorer-heading">Choose a section</h2>
          </div>
          <p className="personal-section-intro">
            Select what you would like to see, then submit the form to load that section.
          </p>
        </div>

        <form className="personal-selection-form" onSubmit={handleSubmit}>
          <div className="personal-form-fields">
            <label className="personal-form-field" htmlFor="personal-category">
              <span>Section</span>
              <select
                id="personal-category"
                name="category"
                value={draftCategory}
                onChange={(event) => setDraftCategory(event.target.value)}
              >
                <option value="favorites">Favorite things</option>
                <option value="biography">Biography</option>
                <option value="works">Works in Progress</option>
              </select>
            </label>

            <label className="personal-form-field" htmlFor="personal-filter">
              <span>Filter favorite entries</span>
              <input
                id="personal-filter"
                name="filter"
                type="search"
                value={draftFilter}
                onChange={(event) => setDraftFilter(event.target.value)}
                placeholder="Try anime, games, audiobooks..."
              />
            </label>

            <label className="personal-sort-option" htmlFor="personal-sort">
              <input
                id="personal-sort"
                name="sortAlphabetically"
                type="checkbox"
                checked={draftSort}
                onChange={(event) => setDraftSort(event.target.checked)}
              />
              <span>Sort favorite categories alphabetically</span>
            </label>
          </div>

          <div className="personal-form-actions">
            <p className="personal-form-help">
              Filtering and sorting apply when Favorite Things is selected.
            </p>
            <button className="personal-submit-button" type="submit">
              Load section <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </section>

      <section className="personal-results" aria-live="polite">
        {!loadedCategory ? (
          <div className="personal-empty-state">
            <span className="personal-empty-icon" aria-hidden="true">↳</span>
            <div>
              <h2>Your selection will appear here.</h2>
              <p>Choose one of the three sections above and select “Load section” to begin.</p>
            </div>
          </div>
        ) : loadedCategory === 'favorites' ? (
          <FavoriteThingsTable filter={loadedFilter} sortAlphabetically={loadedSort} />
        ) : (
          <ComingSoonSection section={loadedCategory} />
        )}
      </section>

      <div className="personal-back-link-wrap">
        <a className="text-link" href="#home">
          <span aria-hidden="true">←</span> Back to the Main Page
        </a>
      </div>
    </main>
  );
}

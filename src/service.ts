import { type Config } from './config.js';
import { Kodi } from './kodi.js';
import { Logger } from './logger.js';

export class Service {
  readonly #logger: Logger;
  readonly #kodi: Kodi;
  readonly #tag: string;

  constructor(config: Config, logger: Logger) {
    const createComponentLogger = (component: string) => logger.child({ component });

    this.#logger = createComponentLogger('Service');
    this.#kodi = new Kodi(createComponentLogger('Kodi'), config.kodi.jsonRpc);
    this.#tag = config.tag;
  }

  async run() {
    const tvShows = await this.#kodi.getTvShowsWithTag(this.#tag);
    tvShows.sort((a, b) => a.label.localeCompare(b.label));

    for (const tvShow of tvShows) {
      const watchedEpisodes = await this.#kodi.getWatchedEpisodesForTvShow(tvShow);
      watchedEpisodes.sort((a, b) => a.season - b.season || a.episode - b.episode);

      for (const watchedEpisode of watchedEpisodes) {
        this.#logger.info(
          { showtitle: watchedEpisode.showtitle, label: watchedEpisode.label },
          'Deleting episode',
        );
        await this.#kodi.removeEpisode(watchedEpisode);
      }
    }
  }
}

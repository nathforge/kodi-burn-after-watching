import { throwIfResponseNotOk } from './httputils.js';
import { Logger } from './logger.js';

export type Episode = {
  episode: number;
  episodeid: number;
  label: string;
  season: number;
  showtitle: string;
};

export type TvShow = {
  label: string;
  tvshowid: number;
};

export class Kodi {
  readonly #logger: Logger;
  readonly #url: string;

  constructor(logger: Logger, url: string) {
    this.#logger = logger;
    this.#url = url;
  }

  async getTvShowsWithTag(tag: string): Promise<TvShow[]> {
    const response = await this.#call('VideoLibrary.GetTVShows', {
      filter: { field: 'tag', operator: 'is', value: tag },
    });
    return (response as { tvshows: TvShow[] }).tvshows;
  }

  async getWatchedEpisodesForTvShow(tvShow: TvShow): Promise<Episode[]> {
    const response = await this.#call('VideoLibrary.GetEpisodes', {
      properties: ['episode', 'season', 'showtitle'],
      tvshowid: tvShow.tvshowid,
      filter: { field: 'playcount', operator: 'greaterthan', value: '0' },
    });
    return (response as { episodes: Episode[] }).episodes;
  }

  async removeEpisode(episode: Episode): Promise<void> {
    await this.#call('VideoLibrary.RemoveEpisode', {
      episodeid: episode.episodeid,
    });
  }

  async #call<T>(method: string, params: Record<string, unknown> = {}): Promise<T> {
    const request = {
      jsonrpc: '2.0',
      id: 0,
      method,
      ...(params !== undefined ? { params } : {}),
    };

    const response = await fetch(this.#url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });

    this.#logger.debug(
      { request, response: { status: response.status } },
      'Kodi JSON-RPC response',
    );

    await throwIfResponseNotOk(response);

    const payload = (await response.json()) as
      | { result: T; error?: undefined }
      | { error: { code: number; message: string; data?: unknown }; result?: undefined };

    if (payload.error) {
      const { code, message } = payload.error;
      throw new Error(`${code}: ${message}`);
    }

    if (payload.result === undefined) {
      throw new Error('Missing result');
    }

    return payload.result;
  }
}

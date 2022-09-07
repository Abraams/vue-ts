export type TApiClientResponse<T = unknown> = { status: number, data: T } | never;

export default {
  async get<T>(url: Url, options = {}): Promise<TApiClientResponse<T>> {
    const response = await fetch(url, {
      method: 'GET',
      ...options,
    });

    const { status, ok } = response;

    if (!ok) {
      throw new Error(`url: ${url}, status: ${status}`);
    }

    const data = await response.json();

    return {
      status,
      data,
    };
  },
};

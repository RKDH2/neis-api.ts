export class NeisApiError extends Error {
  static handle(error: Error) {
    console.error('Failed to fetch Neis Information', error);
  }
}

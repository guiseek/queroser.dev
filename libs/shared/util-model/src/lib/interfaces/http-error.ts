export interface HttpError extends Error {
  new (init: {
    error?: unknown
    headers?: Headers
    status?: number
    statusText?: string
    url?: string
  }): this

  new (
    init: {
      headers?: Headers
      status?: number
      statusText?: string
      url?: string
    },
    defaultStatus: number,
    defaultStatusText: string
  ): this

  headers: Headers
  status: number
  statusText: string
  url: string | null
  ok: boolean
  error: Error
}

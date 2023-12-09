export interface Session {
  id: string;

  sessionName: string;

  sessionKey: string;

  thumbnail?: string;

  order?: number,
}

export interface SessionItem {
  id: string;

  title: string;

  extension: string;

  sessionId: string;

  thumbnail?: string;
}

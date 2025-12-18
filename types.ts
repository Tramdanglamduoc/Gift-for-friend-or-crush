
export type Language = 'vi' | 'en';

export interface ContentItem {
  vi: string;
  en: string;
}

export interface Question {
  id: number;
  icon: string;
  title: ContentItem;
  content: ContentItem;
  warning?: boolean;
}

export type Page = 'home' | 'wish-tree' | 'digital-figures' | 'fireworks' | 'emotion-balloons' | 'messy-corkboard' | 'christmas-tree';

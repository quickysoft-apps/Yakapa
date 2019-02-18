import * as Settings from '@front/settings';
import * as Admin from '@front/admin';

interface Plugin {
  name: string;
  Root: () => JSX.Element;
}

export const plugins: Plugin[] = [Settings, Admin];

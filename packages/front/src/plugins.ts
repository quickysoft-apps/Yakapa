import { FunctionComponent } from 'react';

import * as Settings from '@front/settings';
import * as Admin from '@front/admin';

export interface YakapaPlugin {
  name: string;
  Root: FunctionComponent<{ text: string }>;
}

// const exportPlugins = async () => {
//   return [
//     await import('@front/settings'),
//     await import('@front/admin')
//   ] as YakapaPlugin[];
// };

export const plugins = [Settings, Admin];

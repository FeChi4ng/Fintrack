/* eslint-disable @typescript-eslint/no-empty-object-type */

import "styled-components";
import type { AppTheme } from "../styles/themes";

declare module "styled-components" {
  interface DefaultTheme extends AppTheme {}
}

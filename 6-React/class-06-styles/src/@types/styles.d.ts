import { appDarkTheme } from "../styles/themeDark";

type AppTheme = typeof appDarkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

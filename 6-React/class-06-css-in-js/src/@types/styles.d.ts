import { appTheme } from "../styles/theme";

type AppTheme = typeof appTheme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

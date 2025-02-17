export type IconsId =
  | "linux";

export type IconsKey =
  | "Linux";

export enum Icons {
  Linux = "linux",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Linux]: "61697",
};

export const inputDir = './src/svgicons';
export const outputDir = './src/iconfonts';
export const fontTypes = ['ttf', 'woff', 'woff2'];
export const assetTypes = ['ts', 'css', 'json', 'html'];
export const fontsUrl = '';
export const normalize = true;
export const formatOptions = {
  // Pass options directly to `svgicons2svgfont`
  woff: {
    // Woff Extended Metadata Block - see https://www.w3.org/TR/WOFF/#Metadata
    metadata: '...',
  },
  json: {
    // render the JSON human readable with two spaces indentation (default is none, so minified)
    indent: 2,
  },
  ts: {
    // select what kind of types you want to generate (default `['enum', 'constant', 'literalId', 'literalKey']`)
    types: ['constant', 'literalId'],
    // render the types with `'` instead of `"` (default is `"`)
    singleQuotes: true,
    // customise names used for the generated types and constants
    enumName: 'MyIconType',
    constantName: 'MY_CODEPOINTS',
    // literalIdName: 'IconId',
    // literalKeyName: 'IconKey'
  },
};
// export const templates = {
//   css: './my-custom-tp.css.hbs'
// };
// export const pathOptions = {
//   ts: './src/types/icon-types.ts',
//   json: './misc/icon-codepoints.json'
// };
// export const codepoints = {
//   'chevron-left': 57344, // decimal representation of 0xe000
//   'chevron-right': 57345,
//   'thumbs-up': 57358,
//   'thumbs-down': 57359,
// };

// export function getIconId({
//   basename, // `string` - Example: 'foo';
//   relativeDirPath, // `string` - Example: 'sub/dir/foo.svg'
//   absoluteFilePath, // `string` - Example: '/var/icons/sub/dir/foo.svg'
//   relativeFilePath, // `string` - Example: 'foo.svg'
//   index, // `number` - Example: `0`
// }) {
//   return [index, basename].join('_'); // '0_foo'
// }

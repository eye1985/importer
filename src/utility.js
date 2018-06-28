const isExtension = (ext) => (url) => url.slice(-ext.length).indexOf(ext) !== -1;

export const isCss = isExtension('css');
export const isJs = isExtension('js');
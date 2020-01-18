export const pickClassNames = (styles: any, classKeys: string[]) => {
  return classKeys
    .map(key => styles[key])
    .filter(Boolean)
    .join(' ');
};

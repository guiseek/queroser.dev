export const slugify = <T extends string | number>(...args: T[]) =>
  // prettier-ignore
  args.join(' ').normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-')

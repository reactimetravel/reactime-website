export default function akamaiLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `https://github.com/${src}?imwidth=${width}`;
}

export const images = `
  image {
    ...,
    alt,
    'width': asset->metadata.dimensions.width,
    'height': asset->metadata.dimensions.height,
    'url': asset->url
  }
`;

export const intUrl = `
  link {
    ...,
    'intUrl': intUrl->slug.current
  }
`;

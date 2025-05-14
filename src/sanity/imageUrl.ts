import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client configuration
const client = createClient({
  projectId: "5gcprvbl",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Use CDN for faster response
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

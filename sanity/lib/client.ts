import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // se è settato a true viene utilizzata la cache a 60 secondi altrimenti se messo a false non viene utilizzata la cache
});

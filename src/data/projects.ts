import { Url } from "next/dist/shared/lib/router/router"

export interface ProjectMetadata {
  title: string,
  homepage?: Url,
  repository?: Url,
  tags: string[],
  updatedAt: string
}

const projects = [
  {
    metadataPath: '/projects/20210411003203_colors.json',
    markdownPath: '/projects/20210411003203_colors.md',
  },
  {
    metadataPath: '/projects/20210412004319_mapa_do_bairro.json',
    markdownPath: '/projects/20210412004319_mapa_do_bairro.md',
  },
  {
    metadataPath: '/projects/20230511082635_typhoon.json',
    markdownPath: '/projects/20230511082635_typhoon.md',
  },
  {
    metadataPath: '/projects/20230511083645_cascalho.json',
    markdownPath: '/projects/20230511083645_cascalho.md',
  },
  {
    metadataPath: '/projects/20250526002820_yugioh-fm.json',
    markdownPath: '/projects/20250526002820_yugioh-fm.md',
  },
]

export default projects

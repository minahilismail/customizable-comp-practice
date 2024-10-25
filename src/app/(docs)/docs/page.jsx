import { promises as fs } from 'fs'
import path from 'path';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';


export const metadata = {
  title: 'Projects',
  description: 'Customize your components with greater ease.'
}

export default async function Projects() {
  const filenames = await fs.readdir(path.join(process.cwd(), 'src/projects'));



  const projects = await Promise.all(filenames.map(async (filename) => {
    const content = await fs.readFile(path.join(process.cwd(), 'src/projects', filename), 'utf-8');
    const { frontmatter } = await compileMDX({
      source: content,
      options: {
        parseFrontmatter: true
      }
    })
    return {
      filename,
      slug: filename.replace('.mdx', ''),
      ...frontmatter
    }
  }))

  return (

        <div >
          <h2 className="sr-only">Project Ideas</h2>
          <ul>
            {projects.map(({ title, slug }) => {
              return (
                <li>
                  <Link href={`/projects/${slug}`}>{ title }</Link>
                </li>
              )
            })}
          </ul>
        </div>
  )
}
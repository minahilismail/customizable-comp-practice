import { compileMDX } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs';
import path from 'path';
import ProjectHeader from '@/components/ProjectHeader';
import CodeBlock from '@/components/CodeBlock';
import ComponentPreview from '@/components/ComponentPreview';
import CustomizationPanel from '@/components/CustomizationPanel';

export default async function ProjectPage({ params : {docSlug}} ) {
  const content = await fs.readFile(path.join(process.cwd(), 'src/docs', `${docSlug}.mdx`), 'utf-8');


  const data = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: true
    },
    components: {
      ProjectHeader,
      CodeBlock,
      ComponentPreview,
      CustomizationPanel
    }
  })

  return (
    <div className="mt-10">
      {/* <h1>{ data.frontmatter.title }</h1> */}
      { data.content }
    </div>
  )
}


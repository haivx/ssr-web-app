import React, { FC } from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import { majorScale, Pane, Heading, Spinner } from 'evergreen-ui'
import matter from 'gray-matter'
import Head from 'next/head'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'
import { Post } from '../../types'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import { posts} from '../../content'

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  const content = hydrate(source)
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    )
  }
  return (
    <Pane>
      <Head>
        <title>{`Known Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginY={majorScale(3)}>
            {frontMatter.title}
          </Heading>
          <Pane>{content}</Pane>
        </Container>
      </main>
    </Pane>
  )
}

BlogPost.defaultProps = {
  source: '',
  frontMatter: { title: 'default title', summary: 'summary', publishedOn: '' },
}

export function getStaticPaths() {
  const postPath = path.join(process.cwd(), 'posts')
  const fileNames = fs.readdirSync(postPath)
  const slugs = fileNames.map((name) => {
    const filePath = path.join(postPath, name)
    const file = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(file)
    return data
  })
  return {
    paths: slugs.map((s) => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

/**
 * Need to get the paths here
 * then the the correct post for the matching path
 * Posts can come from the fs or our CMS
 */

export async function getStaticProps  ({ params }) {
  let post = null;
  try {

    console.log('params', params)
    const filePath = path.join(process.cwd(), 'posts', params.slug + '.mdx')
    console.log('filePath', filePath)
    post = fs.readFileSync(filePath, 'utf-8')
  } catch (e) {
    const cmsPost = posts.published.map(p => {
      return matter(p)
    })

    const match = cmsPost.find(p => p.data.slug=== params.slug)
    post = match?.content
  }
  const  { data } = matter(post || '')
  const mdxSource = await renderToString(post, { scope: data })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    }
  }
}

export default BlogPost

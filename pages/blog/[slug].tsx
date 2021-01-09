import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import {
  Container,
  Heading,
  Box,
} from '@chakra-ui/react';

function Paragraph({ children }) {
  return <p style={{ padding: '1em 0' }}>{children}</p>
}

function CodeBlock({ language, value }) {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
}

export default function Blog({ content, frontmatter }) {
  return (
    <Container>
      <Link href="/">
        <Box pt="1em" as="a" d="inline-block" cursor="pointer" _hover={{ borderBottom: '1px solid black' }}>
          👈 Go Back to Home Page
        </Box>
      </Link>
      <Heading>{frontmatter.title}</Heading>
      <Box as="p">{frontmatter.date}</Box>
      <Box as="article">
        <ReactMarkdown
          escapeHtml={false}
          source={content}
          renderers={{
            code: CodeBlock,
            paragraph: Paragraph,
            heading: Heading,
          }}
        />
      </Box>
    </Container>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/contents/blog`);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.toString(),
    }
  }));

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }){
  const markdownWithMetaData = fs
    .readFileSync(`${process.cwd()}/contents/blog/${slug}/index.md`)
    .toString();

  const { data, content } = matter(markdownWithMetaData);

  // Convert post date format to: Month day, Year
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = data.date.toLocaleString('id-ID', options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content,
      frontmatter,
    }
  };
}
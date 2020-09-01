import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Text from '../../components/Text';
import Layout from '../../components/Layout';

function CodeBlock({ language, value }) {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
}

export default function BlogPost({ content, frontmatter }) {
  return (
    <Layout title={frontmatter.title}>
      <Text as="article" style={{ padding: '1rem' }}>
        <ReactMarkdown
          escapeHtml={false}
          source={content}
          renderers={{
            code: CodeBlock,
          }}
        />
      </Text>
    </Layout>
  );
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
      content: `# ${data.title} \n${content}`,
      frontmatter,
    }
  };
}


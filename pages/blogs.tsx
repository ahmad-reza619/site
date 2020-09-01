import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

import Text from '../components/Text';
import Layout from '../components/Layout';

import classes from '../styles/Blogs.module.css';

export default function Blogs({ posts }: { posts: {date: Date, [key: string]: any}[] }) {
  return (
    <Layout>
      <section className={classes.container}>
          <Text as="h1">
            Blogs
          </Text>
        <div>
          {posts.map(({ frontmatter: { title, description, date } }) => (
            <article key={title} className={classes.post}>
              <Link href="/blogs/[slug]" as={`/blogs/${title}`}>
                <Text as="h3" className={classes.postTitle}>{title}</Text>
              </Link>
              <Text as="h5" className={classes.postDate}>{date}</Text>
              <Text as="p" className={classes.description}>{description}</Text>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/contents/blog`);

  const posts = files.map(filename => {
    const markdownWithMetaData = fs
      .readFileSync(`${process.cwd()}/contents/blog/${filename.toString()}/index.md`)
      .toString();

    const { data } = matter(markdownWithMetaData);

    // Convert post date format to: Month day, Year
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = data.date.toLocaleString('id-ID', options);

    const frontmatter = {
      ...data,
      title: filename.toString(),
      date: formattedDate,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.reverse(),
    },
  };
}

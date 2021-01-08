import Head from 'next/head';
import Link from 'next/link';
import {
  Stack,
  HStack,
  Center,
  Box,
  Image,
  Heading
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import fs from 'fs';
import matter from 'gray-matter';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Ahmad Reza Personal Web</title>
      </Head>
      <Stack
        direction={["column", "row"]}
        padding=".5rem 1rem"
        width="100%"
        justify="space-evenly"
        spacing="24px"
      >
        <Box>
          <Box>
            <Link href="/">
              <HStack>
                <Image src="/owlsvg.png" boxSize="40px" alt="Go to home" />
                <Box>Hungry Dev</Box>
              </HStack>
            </Link>
          </Box>
          <Center>
            <Stack direction="column" align="center">
              <Image src="me.jpg" boxSize="200px" borderRadius="full" />
              <Heading as="h1">Ahmad Reza</Heading>
              <Heading as="h2" size="md">
                Frontend Software Engineer
              </Heading>
              <Box as="p" textAlign="center">
                React · Next JS · Gatsby JS · Freetime Open Sourcerer · 21yo
              </Box>
            </Stack>
          </Center>
        </Box>
        <Box as="section">
          <Heading as="h2" mb=".8rem">Blogs</Heading>
          <Stack direction="column" spacing="1em">
            {posts.map(({ frontmatter: { title, description, date } }) => (
              <Link href="/blog/[slug]" as={`/blog/${title}`}>
                <Box as="article">
                  <Heading as="h3" size="md">{title}</Heading>
                  <Box as="small" >{date}</Box>
                  <Box as="p" >{description}</Box>
                </Box>
              </Link>
            ))}
          </Stack>
        </Box>
        <HStack spacing="1.5rem">
          <Heading as="h2" size="md">Contact Me</Heading>
          <a href="https://twitter.com/HungryDev1" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://github.com/ahmad-reza619" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a href="https://www.linkedin.com/in/ahmad-reza-68ab52170/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </HStack>
      </Stack>
    </>
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

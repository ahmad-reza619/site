import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  useColorModeValue,
  useColorMode,
  Button,
  Spacer,
  Stack,
  HStack,
  Center,
  Box,
  Heading
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import fs from 'fs';
import matter from 'gray-matter';
import gsap  from 'gsap';

const MusicPlayer = dynamic(() => import('../components/MusicPlayer'), { ssr: false });

const MyImage = styled(Image)`
  border-radius: 50%;
`;

interface Post {
  frontmatter: {
    title: string;
    description: string;
    date: string;
    onprogress?: boolean;
  }
}

interface Props {
  posts: Post[],
}

export default function Home({ posts }: Props) {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue("gray", "black");

  const refTitle = useRef(null);
  const refSub = useRef(null);
  const refDesc = useRef(null);
  useEffect(() => {
    gsap
      .timeline()
      .from(refTitle.current, { y: '1em', duration: .5 })
      .from(refSub.current, { y: '1em', duration: .5 })
      .from(refDesc.current, { y: '100%', duration: .5 })
  }, []);

  const refPosts = useRef([]);
  const refBlogSection = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(refBlogSection.current, { y: -10, duration: 1 });
    refPosts.current.map(refPost => tl.from(refPost, { y: 20, opacity: 0, duration: .8, stagger: .4 }))
  }, []);

  function hoverPost(index) {
    return () => {
      gsap
        .timeline()
        .to(refPosts.current[index], { background: color });
    }
  }
  function leavePost(index) {
    return () => {
      gsap
        .timeline()
        .to(refPosts.current[index], { background: 'initial' });
    }
  }
  return (
    <>
      <Head>
        <title>Ahmad Reza Personal Web</title>
      </Head>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        padding=".5rem 1rem"
        minH="100vh"
        justify="space-evenly"
        spacing="24px"
      >
        <Box>
          <Box>
            <Link href="/">
              <HStack>
                <Image
                  src="/owlsvg.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <Box>Hungry Dev</Box>
                <Spacer />
                <Button
                  onClick={toggleColorMode}
                >
                  <FontAwesomeIcon icon={faMoon} />
                </Button>
              </HStack>
            </Link>
          </Box>
          <Center height="100%">
            <Stack direction="column" align="center">
              <MyImage
                src="/me.jpg"
                layout="intrinsic"
                width={200}
                height={200}
                // boxSize={{ base: 200, xl: 'full' }}
                // borderRadius={{ base: 'full', xl: 'none' }}
              />
              <Box overflow="hidden">
                <Heading as="h1" ref={refTitle} >Ahmad Reza</Heading>
              </Box>
              <Box overflow="hidden">
                <Heading as="h2" size="md" ref={refSub}>
                  Frontend Software Engineer
                </Heading>
              </Box>
              <Box overflow="hidden">
                <Box as="p" textAlign="center" ref={refDesc}>
                  React · Next JS · Gatsby JS · Freetime Open Sourcerer · 21yo
                </Box>
              </Box>
              <HStack spacing="1.5rem">
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
          </Center>
        </Box>
        <Box as="section" ref={refBlogSection}>
          <MusicPlayer />
          <Heading as="h2" p="0 1rem" mb=".8rem">📖 Blogs</Heading>
          <Stack overflow="auto" direction="column" spacing="1em">
            {posts.map(({ frontmatter: { title, description, date } }, index) => (
              <Link
                key={title}
                href="/blog/[slug]"
                as={`/blog/${title}`}
              >
                <Box
                  ref={el => refPosts.current[index] = el}
                  cursor="pointer"
                  boxSizing="border-box"
                  p="1rem"
                  as="article"
                  onMouseEnter={hoverPost(index)}
                  onMouseLeave={leavePost(index)}
                >
                  <Heading as="h3" size="md">{title}</Heading>
                  <Box as="small" >{date}</Box>
                  <Box as="p" >{description}</Box>
                  <Box fill="black" w="100%" h="0"/>
                </Box>
              </Link>
            ))}
          </Stack>
        </Box>
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

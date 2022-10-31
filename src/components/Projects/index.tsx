import React from 'react';
import { Flex, Heading, SimpleGrid, Image, Link } from '@chakra-ui/react';

import { texts } from '../../lib/texts';

export const Projects = () => {
  const { projects } = texts;

  return (
    <Flex direction="column" gap={8}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        {projects.title}
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} gap={8}>
        {projects.items.map(({ id, title, link }) => (
          <Flex
            key={id}
            direction="column"
            bg="gray.200"
            p={4}
            borderRadius="xl"
            alignItems="center"
            justifyContent="center"
            height={36}
          >
            <Link href={link} target="_blank" rel="external nofollow noreferrer noopener" maxW={48}>
              <Image src={`/images/projects/${id}.png`} alt={title} title={title} maxH={24} />
            </Link>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

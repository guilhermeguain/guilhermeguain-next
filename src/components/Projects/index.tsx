import React from 'react';
import Image from 'next/image';
import { Flex, Heading, SimpleGrid, Link } from '@chakra-ui/react';

import { useProjects } from './hooks/useProjects';

export const Projects = () => {
  const { t, projects, handleProjectClick } = useProjects();

  return (
    <Flex direction="column" gap={8}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        {t('projects:title')}
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} gap={8}>
        {projects.map(({ id, link }) => (
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
            <Link
              href={link}
              target="_blank"
              rel="external nofollow noreferrer noopener"
              data-id={id}
              onClick={handleProjectClick}
            >
              <Image
                src={`/images/projects/${id}.png`}
                alt={t(`projects:${id}`)}
                title={t(`projects:${id}`)}
                placeholder="blur"
                blurDataURL={`/images/projects/${id}.png`}
                width={200}
                height={60}
              />
            </Link>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

import React from 'react';
import { Box, Flex, Heading, Text, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

import { useApp } from '../../contexts/App';

export const DataDrivenSeo = () => {
  const { content } = useApp();
  const { dataDrivenSeo } = content;

  return (
    <Flex direction="column" gap={8}>
      <Heading fontSize="2xl" borderBottom="1px" pb={2} borderColor="gray.200">
        {dataDrivenSeo.title}
      </Heading>
      <Flex direction={['column', 'column', 'column', 'row']} gap={8}>
        {dataDrivenSeo.items.map(({ id, title, icon, items }) => (
          <Box key={id} flex={1}>
            <Flex gap={4} alignItems="center" mb={4}>
              <Image as={icon} title={title} alt={title} />
              <Heading
                as="h3"
                fontSize="sm"
                textTransform="uppercase"
                fontWeight="bold"
                color="gray.400"
              >
                {title}
              </Heading>
            </Flex>
            <List spacing={4}>
              {items.map((item, index) => (
                <ListItem key={index} display="flex" alignItems="baseline">
                  <ListIcon as={FaChevronRight} color="secondary.400" fontSize="xs" />
                  <Text fontSize={['sm', 'sm', 'md']}>{item}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

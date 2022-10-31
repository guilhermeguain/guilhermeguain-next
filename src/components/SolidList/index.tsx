import React from 'react';
import { Box, Text, List, ListItem } from '@chakra-ui/react';

export const SolidList = () => {
  const letters = [
    { initial: 'S', desc: 'Single Responsability Principle' },
    { initial: 'O', desc: 'Open-Closed Principle' },
    { initial: 'L', desc: 'Liskov Substitution Principle' },
    { initial: 'I', desc: 'Interface Segregation Principle' },
    { initial: 'D', desc: 'Dependency Inversion Principle' },
  ];

  return (
    <Box p={2}>
      <Text color="gray.500" textAlign="justify" mb={4}>
        <strong>SOLID</strong> é um acrônimo criado por Michael Feathers , após observar que cinco
        princípios da orientação a objetos e design de código poderiam se encaixar nesta palavra.
      </Text>
      <List spacing={2}>
        {letters.map(({ initial, desc }) => (
          <ListItem key={initial}>
            <Text color="gray.500">
              <Text
                as="span"
                display="inline-flex"
                width={3}
                justifyContent="center"
                color="secondary.400"
              >
                {initial}
              </Text>{' '}
              - {desc}
            </Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

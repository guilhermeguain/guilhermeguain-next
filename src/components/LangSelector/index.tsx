import React from 'react';
import { Box, Select } from '@chakra-ui/react';

import { useLangSelector } from './hooks/useLangSelector';

export const LangSelector = ({ ...rest }) => {
  const { locale, handleLangChange } = useLangSelector();

  return (
    <Box border="1px" py={1} pl={4} pr={1} borderRadius="3xl" borderColor="gray.600">
      <Select
        size="xs"
        colorScheme="primary"
        variant="unstyled"
        color="gray.300"
        defaultValue={locale}
        onChange={handleLangChange}
        sx={{ cursor: 'pointer', option: { color: 'gray.800' } }}
        {...rest}
      >
        <option value="en-US">English</option>
        <option value="pt-BR">Portuguese</option>
      </Select>
    </Box>
  );
};

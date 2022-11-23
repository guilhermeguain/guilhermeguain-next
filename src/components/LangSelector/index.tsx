import React from 'react';
import { Select } from '@chakra-ui/react';

import { useLangSelector } from './hooks/useLangSelector';

export const LangSelector = ({ ...rest }) => {
  const { locale, handleLangChange } = useLangSelector();

  return (
    <Select
      size="sm"
      colorScheme="primary"
      variant="unstyled"
      color="gray.300"
      borderRadius="3xl"
      defaultValue={locale}
      onChange={(event) => {
        handleLangChange(event.currentTarget.value);
      }}
      {...rest}
    >
      <option value="en-US">English</option>
      <option value="pt-BR">Portuguese</option>
    </Select>
  );
};

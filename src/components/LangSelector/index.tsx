import React from 'react';

import { useLangSelector } from './hooks/useLangSelector';

import { Container, Input, Option } from './styles.css';

type LangSelectorProps = {
  id: string;
  style?: React.CSSProperties;
};

export const LangSelector = ({ id, style }: LangSelectorProps) => {
  const { locale, handleLangChange } = useLangSelector();

  return (
    <>
      <div className={Container}>
        <select
          name="lang_selector"
          id={id}
          className={Input}
          defaultValue={locale}
          onChange={handleLangChange}
          style={style}
        >
          <option value="en-US" className={Option}>
            English
          </option>
          <option value="pt-BR" className={Option}>
            Portuguese
          </option>
        </select>
      </div>
    </>
  );
};

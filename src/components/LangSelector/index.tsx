import React from 'react';

import { useLangSelector } from './hooks/useLangSelector';

import { Container, Input, Option } from './styles.css';

type LangSelectorProps = {
  style?: React.CSSProperties;
};

export const LangSelector = ({ style }: LangSelectorProps) => {
  const { locale, handleLangChange } = useLangSelector();

  return (
    <>
      <div className={Container}>
        <select
          name="lang_selector"
          id="lang_selector"
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

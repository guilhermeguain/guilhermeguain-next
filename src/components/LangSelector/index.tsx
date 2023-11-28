'use client';

import { useLangSelector } from './hooks/useLangSelector';
import { LangSelectorProps } from './types';

import { Container, Input, Option } from './styles.css';

export const LangSelector = ({ id, style }: LangSelectorProps) => {
  const { locale, handleLangChange } = useLangSelector();

  return (
    <div className={Container}>
      <label htmlFor={id} style={{ color: '#fff', fontSize: 0 }}>
        Idioma
      </label>
      <select
        name="lang_selector"
        id={id}
        className={Input}
        defaultValue={locale}
        onChange={handleLangChange}
        style={style}
      >
        <option value="en-US" className={Option}>
          Inglês
        </option>
        <option value="pt-BR" className={Option}>
          Português
        </option>
      </select>
    </div>
  );
};

import React, { Fragment, useMemo } from 'react';

const escapeRegexp = (term: string): string =>
  term.replace(/[|\\{}()[\]^$+*?.-]/g, (char: string) => `\\${char}`);

function buildRegex(query: string[]) {
  const _query = query.filter((text) => text.length !== 0).map((text) => escapeRegexp(text.trim()));
  if (!_query.length) {
    return null;
  }

  return new RegExp(`(${_query.join('|')})`, 'ig');
}

function highlightWords({ text, query }: HighlightOptions): Chunk[] {
  const regex = buildRegex(Array.isArray(query) ? query : [query]);
  if (!regex) {
    return [{ text, match: false }];
  }
  const result = text.split(regex).filter(Boolean);
  return result.map((str) => ({ text: str, match: regex.test(str) }));
}

export function useHighlight(props: UseHighlightProps) {
  const { text, query } = props;
  return useMemo(() => highlightWords({ text, query }), [text, query]);
}

export function Highlight(props: HighlightProps): JSX.Element {
  const { children, query, styles } = props;

  if (typeof children !== 'string') {
    throw new Error('The children prop of Highlight must be a string');
  }

  const chunks = useHighlight({ query, text: children });

  return (
    <>
      {chunks.map((chunk, index) => {
        return chunk.match ? (
          <span key={index} style={styles}>
            {chunk.text}
          </span>
        ) : (
          <Fragment key={index}>{chunk.text}</Fragment>
        );
      })}
    </>
  );
}

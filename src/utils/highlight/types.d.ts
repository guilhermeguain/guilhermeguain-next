type UseHighlightProps = HighlightOptions;

type HighlightProps = {
  query: string | string[];
  children: string | ((props: Chunk[]) => React.ReactNode);
  styles?: CSSProperties;
};

type Chunk = {
  text: string;
  match: boolean;
};

type HighlightOptions = {
  text: string;
  query: string | string[];
};

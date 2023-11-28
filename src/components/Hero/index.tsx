import { SiReact, SiTypescript, SiEslint } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { Container, CustomContent, Role, Name, Desc, Badges } from './styles.css';

export const Hero = () => {
  return (
    <section id="hero" className={Container}>
      <div className={CustomContent}>
        <h1 className={Role}>Desenvolvedor Front-end</h1>
        <h2 className={Name}>Guilherme Guain</h2>
        <span className={Desc}>Desde 2012, resolvendo problemas e criando soluções web.</span>
        <div className={Badges}>
          <SiReact title="React.js" />
          <SiTypescript title="TypeScript" />
          <TbBrandNextjs title="Next.js" />
          <SiEslint title="ESLint" />
        </div>
      </div>
    </section>
  );
};

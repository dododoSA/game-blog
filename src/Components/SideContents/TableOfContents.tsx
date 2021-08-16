import { useEffect } from 'react';
import tocbot from 'tocbot';

const TableOfContents = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.toc-content',
      headingSelector: 'h2, h3',
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <>
      <div>目次</div>
      <div className='toc' />
    </>
  );
};

export { TableOfContents };

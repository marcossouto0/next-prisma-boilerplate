import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    {
      // Create a Header and a style for all the pages
    }

    <div>{props.children}</div>
  </div>
);

export { Main };

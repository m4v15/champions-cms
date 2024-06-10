import type { ReactNode } from 'react';

type ISectionProps = {
  children: ReactNode;
};

export const Section = (props: ISectionProps) => (
  <div className="mx-auto max-w-screen-lg px-3 pb-32 pt-10">
    {props.children}
  </div>
);

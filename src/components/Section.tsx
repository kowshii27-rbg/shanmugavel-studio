import { clsx } from "clsx";
import Container from "./Container";
import type { ReactNode } from "react";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export default function Section({ id, children, className, as: Tag = "section" }: Props) {
  return (
    <Tag id={id} className={clsx("py-14 sm:py-16 lg:py-20", className)}>
      <Container>{children}</Container>
    </Tag>
  );
}

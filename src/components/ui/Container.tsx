import { cn } from '@/lib/utils';

type TChildren = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className }: TChildren) {
  return (
    <div className={cn('mx-auto max-w-7xl px-4 xl:px-0', className)}>
      {children}
    </div>
  );
}

export default Container;

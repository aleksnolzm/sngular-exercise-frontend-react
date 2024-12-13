export interface ResultProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  total: number;
}
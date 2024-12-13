export interface FormProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'className' | 'style'> {
  onChange?: ((value: number) => void);
}
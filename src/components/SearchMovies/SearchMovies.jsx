import { Icon, Input, Wrapper } from './SearchMovies.styled';

export const SearchMovies = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Icon />
    </Wrapper>
  );
};

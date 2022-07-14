import { useGetPokemonByNameQuery } from "../../services/pokemon";

const Test = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('users');
  console.log(data, error, isLoading, 'test');
  return (
    <div>Test</div>
  )
};

export default Test;
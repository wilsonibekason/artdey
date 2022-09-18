import * as React from "react";
import {
  useAddPokemonMutation,
  useDeletePokemonMutation,
  useGetPokemonByiDQuery,
  useGetPokemonByNameQuery,
  useUpdatePokemonMutation,
} from "./index";

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const {
    data,
    error,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    isUninitialized,
  } = useGetPokemonByNameQuery("bulbasaur");
  // Individual hooks are also accessible under the33 generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // render UI based on data and loading state
}
// {id} :m{id: string}
export const ContactDetail = ({ id }) => {
  const { data, isFetching, isError, isLoading, isSuccess } =
    useGetPokemonByiDQuery(id);
  return (
    <>
      <div>{JSON.stringify(data, undefined, 2)}</div>
    </>
  );
};
export const AddContact = () => {
  const [addPokemon] = useAddPokemonMutation();
  const [deletePokemons] = useUpdatePokemonMutation();
  const [updatePokemons] = useDeletePokemonMutation();
  ///  {
  const { refetch } = useGetPokemonByNameQuery();
  const contact = {
    id: "2",
    name: "John",
    email: "wlspsmcooekeoe",
  };
  const addHandler = async () => {
    await addPokemon.mutate({
      variables: {
        input: {
          name: contact.name,
          email: contact.email,
        },
      },
      //   refetch();
    });
    //await addPokemon(contactm)
  };

  const updatePokemon = async () => {
    await updatePokemons(contact);
  };

  const deletePokemon = async () => {
    await deletePokemons(contact.id);
  };
  return (
    <>
      <button>add contact</button>
      <button>add contact</button>
      <button>add contact</button>
    </>
  );
};

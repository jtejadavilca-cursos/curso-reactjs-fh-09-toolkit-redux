import { pokemonApi } from "../../../api";
import { startLoadingPokemons, setPokemons } from "./";

export const getPokemons = ( page = 0 ) => {
    //https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: realizar petición http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${page}&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log('data', data);

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

        dispatch( setPokemons({ pokemons: data.results, page: page + 1 })  )
    }
}
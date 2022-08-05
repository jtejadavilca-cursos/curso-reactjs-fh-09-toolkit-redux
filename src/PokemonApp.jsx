import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices';

export const PokemonApp = () => {

    const { isLoading, page, pokemons } = useSelector( (state) => state.pokemons);
    const dispatch = useDispatch();


    useEffect( () => {
        dispatch( getPokemons() );
    }, []);

  return (
    <>
        <h1>Pokemon</h1>

        <hr />

        <table>
            <tr>
                <td>Name</td>
                <td>URL</td>
            </tr>
            {
                pokemons
                    .map( pok =>  (
                        <tr>
                            <td>{ pok.name }</td>
                            <td>{ pok.url }</td>
                        </tr>
                    ))
            }
        </table>

        <button onClick={() => dispatch( getPokemons( page ) ) } disabled={isLoading}>Next</button>
    </>
  )
}

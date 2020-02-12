import React, { Component } from 'react';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {

        const currentComponentItems = this.state.items;

        fetchKantoPokemon();

        function fetchKantoPokemon() {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
                .then(response => response.json())
                .then(allpokemon => allpokemon.results.forEach(pokemon => fetchPokemonData(pokemon)))
        }

        function fetchPokemonData(pokemon) {
            let url = pokemon.url
            fetch(url)
                .then(response => response.json())
                .then((pokeData) => {
                    currentComponentItems.push(pokeData);
                })
        }
    }


    render() {
        // async function fetchPokemonData(pokemon) {
        //     let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
        //     await fetch(url)
        //         .then(response => response.json())
        //         .then(pokeData => {
        //             console.log(pokeData);
        //             items.push(<li>{pokeData.name}</li>);
        //             console.log(items);
        //         })

        //     //pokeData.forEach(element => items.push(<li>{element}</li>))
        //     //);
        // }

        // async function fetchKantoPokemon() {
        //     await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        //         .then(response => response.json())
        //         .then(allpokemon => allpokemon.results.forEach(pokemon => fetchPokemonData(pokemon)))
        // }

        console.log(this.state.items);
        let items = this.state.items.map((param, i) => { return <li key={i}>{param.name}</li> });
        console.log(items);


        return (
            <ul>
                {items}
            </ul>
        )
    }
}
import React, { Component } from 'react';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    arr = [];

    fetchKantoPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=850')
            .then(response => response.json())
            .then(allpokemon => allpokemon.results.forEach(pokemon => this.fetchPokemonData(pokemon)))
    }

    fetchPokemonData = (pokemon) => {
        let url = pokemon.url
        fetch(url)
            .then(response => response.json())
            .then((pokeData) => {

                // this.setState({
                //     items: pokeData
                // })

                this.setState(state => {
                    const items = state.items.concat(pokeData);
                    return {
                        items
                    };
                });

                //console.log(this.state.items);

                this.arr.push(pokeData)

            })
    }

    componentDidMount() {

        //const currentComponentItems = this;

        this.fetchKantoPokemon();

        // function fetchKantoPokemon() {
        //     fetch('https://pokeapi.co/api/v2/pokemon?limit=99')
        //         .then(response => response.json())
        //         .then(allpokemon => allpokemon.results.forEach(pokemon => fetchPokemonData(pokemon)))
        // }

        // function fetchPokemonData(pokemon) {
        //     let url = pokemon.url
        //     fetch(url)
        //         .then(response => response.json())
        //         .then((pokeData) => {
        //             currentComponentItems.setState({
        //                 items: pokeData
        //             })
        //         })
        // }
    }


    render() {
        console.log('arr', this.arr);

        return (
            <ul>
                {

                    this.state.items.map(item =>
                        (
                            <li key={item.name}><span>{item.id} - </span>{item.name}
                            </li>
                        )
                    )}
            </ul>
        )
    }
}
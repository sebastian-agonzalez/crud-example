import React, { Component } from 'react';
import List from '../ListPoke/list'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-12 mt-4'>
                            <h1 className='text-center'>Lista De Pokémon</h1>
                            <button type="button" className="btn btn-primary">Primary</button>
                        </div>
                        <div className='row'>
                            <div className='offset-lg-2 col-lg-8'>
                                <div className='panel'>
                                    <List/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
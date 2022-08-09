import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render(){
    const { pokemons } = this.props;
    const { name, type, image, averageWeight, moreInfo } = pokemons;
    return (
    <div className="pokemon">
      <div>
      <img src={ image } alt={ name }/>
      </div>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>Peso médio: {averageWeight.value} {averageWeight.measurementUnit}</p>
        <div>
          <button _blank>
            <a className="link" href={moreInfo} >Saiba mais</a>
          </button>
        </div>
    </div>

    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  })
};

export default Pokemon;
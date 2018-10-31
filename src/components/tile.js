import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  overflow: hidden;
  transform: scale(${({ scale }) => `${scale}, ${scale}`});
  transform-origin: top left;
`;

const Image = styled.img`
  transform: translate(-${({ left }) => left}px, 0);
`;

class Tile extends React.Component {
    static propTypes = {
      src: PropTypes.string.isRequired,
      tile: PropTypes.object.isRequired,
      state: PropTypes.number.isRequired,
      scale: PropTypes.number.isRequired
    };
  
    render() {
      const { src, tile, state, scale } = this.props;
      const left = tile.width * state;
      return (
        <Container width={tile.width} height={tile.height} scale={scale}>
          <Image src={src} left={left} />
        </Container>
      );
    }
  }
  export default Tile;
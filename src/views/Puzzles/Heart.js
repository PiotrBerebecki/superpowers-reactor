import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyledHeart } from './../../styled/index';
import { toggleFavourite } from './sagas';

function Heart({ isFavourite, id, toggleFavourite }) {
  const handleClick = () => toggleFavourite(id);
  return (
    <StyledHeart
      isFavourite={isFavourite}
      onClick={handleClick}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d="M16.042 8.345c0 0-2-4.262-6.5-4.262-4.917 0-7.5 4.167-7.5 8.333 0 6.917 14 15.5 14 15.5s13.916-8.5 13.916-15.5c0-4.25-2.666-8.333-7.416-8.333s-6.5 4.262-6.5 4.262z" />
    </StyledHeart>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ toggleFavourite }, dispatch);
};

export default connect(null, mapDispatchToProps)(Heart);

import React from "react";
import New from "./New";
import Popular from "./Popular";

const DEFAULT_CONFIG = {
  popularThreshold: 1000,
  newThreshold: 100,
};

const withHighlight = (Component, config = DEFAULT_CONFIG) => {
  const WrapperComponent = (props) => {
    if (props.views >= config.popularThreshold) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }

    if (props.views < config.newThreshold) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }

    return <Component {...props} />;
  };

  // Добавляем displayName для удобства отладки
  WrapperComponent.displayName = `WithHighlight(${
    Component.displayName || Component.name
  })`;

  return React.memo(WrapperComponent);
};

export default withHighlight;

const transition = {duration: 0.7, ease: [0.87, 0, 0.13, 1]}

export const sideBarAnim = {
  initial: {
    y: "100%",
  },

  entry: {
    y: "0%",
    transition: transition
  },

  exit: {
    y: "-100%",
    transition: transition
  }
}

export const hoverSlide = {
  initial: {
    y: "0%",
    transition: {duration: 0.4, ease: [0.87, 0, 0.13, 1]}
  },

  entry: {
    y: "-100%",
    transition: {duration: 0.4, ease: [0.87, 0, 0.13, 1]}
  }
}

export const preSvgAnim = {
  initial: {
    height: "0px";
    transition: {durat}
  }
}
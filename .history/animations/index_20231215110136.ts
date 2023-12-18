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
    height: "0px",
  },
  entry: {
    height: "140px",
  }
}

export const preTextAnim = {
  initial: (i: number) => ({y: "100%"}),
  entry: (i: number) => ({y: "0%",  transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 1 + 0.03 * i}}),
  exit: (i: number) => ({y: "-100%", transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: -0.05 * i}}),
}

export const preText2Anim = {
  initial: {y: "100%"},
  entry:  {y: "0%",  transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 1 + 0.03 * i}},
  exit: {y: "-100%", transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: -0.05 * i}},
}

export const preBarAnim = {
  initial: (i: number) => ({height: "105vh"}),
  entry: (i: number) => ({height: "0vh",  transition: { duration: 1, ease: [0.7, 0, 0.3, 1], delay: 0.07 * i}}),
}
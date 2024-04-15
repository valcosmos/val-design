type point = 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br'

export type PointType = [point, point]
export type PlacementType =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'leftTop'
  | 'left'
  | 'leftBottom'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight'

// const placementMap = {
//   topLeft: ['bl', 'tl'],
//   top: ['bc', 'tc'],
//   topRight: ['br', 'tr'],
//   leftTop: ['tr', 'tl'],
//   left: ['cr', 'cl'],
//   leftBottom: ['br', 'bl'],
//   rightTop: ['tl', 'tr'],
//   right: ['cl', 'cr'],
//   rightBottom: ['bl', 'br'],
//   bottomLeft: ['tl', 'bl'],
//   bottom: ['tc', 'bc'],
//   bottomRight: ['tr', 'br'],
// }

export function getPlacement({ target }: { target: HTMLElement, overlay?: any }) {
  const { height, left, top } = target.getBoundingClientRect()

  const { top: ctop } = document.body.getBoundingClientRect()
  const { scrollTop: cScrollTop } = document.body
  return {
    position: 'absolute',
    top: top + height - ctop + cScrollTop,
    let: left,
  }
}

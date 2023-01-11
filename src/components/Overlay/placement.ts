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

const placementMap = {
  topLeft: ['bl', 'tl'],
  top: ['bc', 'tc'],
  topRight: ['br', 'tr'],
  leftTop: ['tr', 'tl'],
  left: ['cr', 'cl'],
  leftBottom: ['br', 'bl'],
  rightTop: ['tl', 'tr'],
  right: ['cl', 'cr'],
  rightBottom: ['bl', 'br'],
  bottomLeft: ['tl', 'bl'],
  bottom: ['tc', 'bc'],
  bottomRight: ['tr', 'br']
}

console.log(placementMap)


export function getPlacement({ target, overlay }: { target: HTMLElement; overlay?: any }) {
  console.log("🚀 ~ file: placement.ts:37 ~ getPlacement ~ overlay", overlay)
  const { width, height, left, top } = target.getBoundingClientRect()
  console.log("🚀 ~ file: placement.ts:38 ~ getPlacement ~ width", width)

  const { left: cleft, top: ctop } = document.body.getBoundingClientRect()
  console.log("🚀 ~ file: placement.ts:41 ~ getPlacement ~ cleft", cleft)
  const { scrollTop: cScrollTop, scrollLeft: cScrollLeft } = document.body
  console.log("🚀 ~ file: placement.ts:43 ~ getPlacement ~ cScrollLeft", cScrollLeft)
  return {
    position: 'absolute',
    top: top + height - ctop + cScrollTop,
    let: left
  }
}

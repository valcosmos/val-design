// 接受两个参数，第一个是参数名称，第二个是回掉
test('common matcher', () => {
  // 2+2是不是等于4
  expect(2 + 2).toBe(4)
  // 2+2是不是 不等于 5
  expect(2 + 2).not.toBe(5)
})

// 判断boolean
test('to be true or false', () => {
  // 1是否为真
  expect(1).toBeTruthy()
  // 0是否为假
  expect(0).toBeFalsy()
})

// 判断数字
test('number', () => {
  // 4是否比3大
  expect(4).toBeGreaterThan(3)
  // 2是否比3小
  expect(2).toBeLessThan(3)
})

// 操作对象
test('object', () => {
  // tobe 是完全相同
  // expect({ name: 'cupid' }).toBe({ name: 'cupid' })
  // toEqual 是值是否相同
  expect({ name: 'cupid' }).toEqual({ name: 'cupid' })
})

import React from 'react'
import { config } from 'react-transition-group'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import { AutoComplete, AutoCompleteProps } from './autoComplete'

config.disabled = true

const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 }
]
const testProps: AutoCompleteProps = {
  fetchSuggestions: (query) => {
    return testArray.filter((item) => item.value.includes(query))
  },
  onSelect: jest.fn(),
  placeholder: 'auto-complete'
}

let wrapper: RenderResult, inputNode: HTMLInputElement
describe('test AutoComplete component', () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    wrapper = render(<AutoComplete {...testProps} />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    inputNode = wrapper.getByPlaceholderText(
      'auto-complete'
    ) as HTMLInputElement
  })
  it('test basic AutoComplete behavior', async () => {
    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    // await waitFor(() => {
    //   expect(wrapper.queryByText('ab')).toBeInTheDocument()
    // })
    // should have two suggestion items
    // expect(
    //   wrapper.container.querySelectorAll('.suggestion-item').length
    // ).toEqual(2)
    //click the first item
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(wrapper.getByText('ab'))
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
    //fill the input
    expect(inputNode.value).toBe('ab')
  })
  it('should provide keyboard support', async () => {
    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    // await waitFor(() => {
    //   expect(wrapper.queryByText('ab')).toBeInTheDocument()
    // })
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const firstResult = wrapper.queryByText('ab')
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const secondResult = wrapper.queryByText('abc')

    // arrow down
    fireEvent.keyDown(inputNode, { keyCode: 40 })
    expect(firstResult).toHaveClass('is-active')
    //arrow down
    fireEvent.keyDown(inputNode, { keyCode: 40 })
    expect(secondResult).toHaveClass('is-active')
    //arrow up
    fireEvent.keyDown(inputNode, { keyCode: 38 })
    expect(firstResult).toHaveClass('is-active')
    // press enter
    fireEvent.keyDown(inputNode, { keyCode: 13 })
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
  })
  it('click outside should hide the dropdown', async () => {
    // input change
    fireEvent.change(inputNode, { target: { value: 'a' } })
    // await waitFor(() => {
    // expect(wrapper.queryByText('ab')).toBeInTheDocument()
    // })
    fireEvent.click(document)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(wrapper.queryByText('ab')).not.toBeInTheDocument()
  })
  it('renderOption should generate the right template', () => {})
  it('async fetchSuggestions should works fine', () => {})
})

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AutoComplete } from './autoComplete'
import axios from 'axios'

const handleFetch = (query: string) => {
  return axios
    .get(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res)
    .then(({ data }) => {
      console.log(data)
      return data.items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, ...item }))
    })
}

export default {
  title: 'Auto Complete',
  component: AutoComplete
} as ComponentMeta<typeof AutoComplete>

const Template: ComponentStory<typeof AutoComplete> = (props) => (
  <AutoComplete {...props} />
)

export const SimpleComplete = Template.bind({})

SimpleComplete.args = {
  fetchSuggestions: handleFetch,
  onSelect: action('selected')
}

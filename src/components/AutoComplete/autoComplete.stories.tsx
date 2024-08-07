import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import axios from 'axios'
import { AutoComplete } from './autoComplete'

function handleFetch(query: string) {
  // return arr.filter((item) => parseInt(item) > parseInt(query))
  return axios
    .get(`https://api.github.com/search/users?q=${query}`)
    .then(res => res)
    .then(({ data }) => {
      return data.items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
}

export default {
  title: 'Data Entry/Auto Complete 自动完成',
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>

const Template: ComponentStory<typeof AutoComplete> = props => <AutoComplete {...props} />

export const DefaultAutoComplete = Template.bind({})

// interface GithunUserProps {
//   login: string
//   url: string
//   avatar_url: string
// }
// const renderOption = (i: DataSourceType) => {
//   const item = i as DataSourceType<GithunUserProps>
//   return (
//     <>
//       <h2>login:{item.login}</h2>
//       <p>url:{item.url}</p>
//       <p>avatar:{item.avatar_url}</p>
//     </>
//   )
// }

DefaultAutoComplete.args = {
  fetchSuggestions: handleFetch,
  onSelect: action('selected'),
  // renderOptions: renderOption
}

import {withProps} from 'recompose'

type Props = {
  choices: Array<{text: string, value: string}>,
  selected: string,
}

export const withSelectedText = withProps((props: Props) => {
  const choice = props.choices[props.selected]
  const selectedText = choice
    ? choice.text
    : 'Please select a choice'
  return {selectedText}
})

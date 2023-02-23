import {List, Para, HLine} from './styledComponents'

const WordCount = props => {
  const {wordDetails} = props
  const {inputValue, inputWordLength} = wordDetails

  return (
    <List>
      <Para>
        {inputValue} : {inputWordLength}
      </Para>
      <HLine />
    </List>
  )
}

export default WordCount

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import WordCount from '../WordCount'

import {
  AppContainer,
  LeftContainer,
  LeftHeading,
  RightContainer,
  RightHeading,
  IMG,
  FormContainer,
  Input,
  Button,
  AddingWordsList,
} from './styledComponents'

class Home extends Component {
  state = {charactersList: [], inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {inputValue} = this.state

    const newWord = {
      id: uuidv4(),
      inputValue,
      inputWordLength: inputValue.length,
    }

    this.setState(prevState => ({
      charactersList: [...prevState.charactersList, newWord],
      inputValue: '',
    }))
  }

  renderInputsListView = () => {
    const {charactersList} = this.state

    return (
      <AddingWordsList>
        {charactersList.map(eachEntry => (
          <WordCount key={eachEntry.id} wordDetails={eachEntry} />
        ))}
      </AddingWordsList>
    )
  }

  renderNoInputsView = () => (
    <IMG
      alt="no user inputs"
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
    />
  )

  render() {
    const {charactersList, inputValue} = this.state

    console.log(charactersList)

    return (
      <AppContainer>
        <LeftContainer>
          <LeftHeading>Count the characters like a Boss</LeftHeading>

          {charactersList.length !== 0
            ? this.renderInputsListView()
            : this.renderNoInputsView()}
        </LeftContainer>
        <RightContainer>
          <RightHeading>Character Counter</RightHeading>
          <FormContainer onSubmit={this.onSubmitForm}>
            <Input
              onChange={this.onChangeInput}
              placeholder="Enter the Characters here"
              type="text"
              value={inputValue}
            />
            <Button type="submit">Add</Button>
          </FormContainer>
        </RightContainer>
      </AppContainer>
    )
  }
}

export default Home

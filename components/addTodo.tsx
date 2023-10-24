import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { type } from 'os'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

const addTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')

  }
  return (
		<>
    <Flex as={'form'} flexDir='column' onSubmit={addTodoHandler} >
      <Text mb='8px'>Enter your task:</Text>
			<Input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder='Here is a sample placeholder'
				size='lg'
			/>
      <Button type='submit' colorScheme='twitter'>Submit</Button>
    </Flex>
			
		</>
	);
}

export default addTodo
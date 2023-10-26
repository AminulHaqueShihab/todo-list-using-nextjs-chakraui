import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { type } from 'os'
import React, {FormEvent, useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/features/todo/todoSlice'

const createTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e: FormEvent) => {
		e.preventDefault();
		dispatch(addTodo(input));
		setInput('');
	};
  return (
		<>
    <Flex as={'form'} flexDir='column' onSubmit={addTodoHandler} >
      <Text mb='8px'>Enter your task:</Text>
			<Input
				value={input}
				type='text'
				onChange={(e) => setInput(e.target.value)}
				placeholder='Here is a sample placeholder'
				size='lg'
			/>
      <Button type='submit' colorScheme='twitter'>Submit</Button>
    </Flex>
			
		</>
	);
}

export default createTodo;
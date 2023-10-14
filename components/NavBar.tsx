import {
  Heading,
  Container,
  Flex,
  Box,
  Text,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex as={"nav"} p={"20px"} alignItems={"center"}>
      <Heading as={"h1"}>TODO List</Heading>
      <Spacer />
      <HStack spacing={4}>
        <Box px={"20px"} py={"10px"} bg={"gray.200"} rounded={"full"} fontSize={"xl"} fontWeight={"bold"}>
          J
        </Box>
        <Text>John Doe</Text>
        <Button colorScheme="purple">Log Out</Button>
      </HStack>
    </Flex>
  );
}

// "use client";

import { Link, List, ListItem, ListIcon, Flex } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiEdit, FiAtSign } from "react-icons/fi";
export default function Sidebar() {
  return (
    <List
      color={"white"}
      fontSize={"xl"}
      fontWeight={"bold"}
      spacing={4}
      mt={5}
    >
      <ListItem>
        <Link href={"/"}>
          <Flex alignItems={"center"} gap={2}>
            <FaRegCalendarAlt />
            {/* <ListIcon as={CalendarIcon} color={"white"} /> */}
            Dashboard
          </Flex>
        </Link>
      </ListItem>

      <ListItem>
        <Link href={"/"}>
          <Flex alignItems={"center"} gap={2}>
            <FiEdit />
            {/* <ListIcon as={CalendarIcon} color={"white"} /> */}
            Create
          </Flex>
        </Link>
      </ListItem>

      <ListItem>
        <Link href={"/"}>
          <Flex alignItems={"center"} gap={2}>
            <FiAtSign />
            {/* <ListIcon as={CalendarIcon} color={"white"} /> */}
            Profile
          </Flex>
        </Link>
      </ListItem>
    </List>
  );
}

import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Profile from "./Profile";

const Sidebar = () => {
  const { isAuth } = useSelector((state) => state.AuthReducer);

  const { tasks } = useSelector((state) => state.AppReducer);

  const personalTasks = tasks.filter((item) => item.tags.includes("Personal"));
  const officialTasks = tasks.filter((item) => item.tags.includes("official"));
  const otherTasks = tasks.filter((item) => item.tags.includes("others"));

  // console.log("side", personalTasks.length);
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedTags, setSelectedTags] = useState(
    searchParams.getAll("tags") || []
  );

  const handleTagChange = (tag) => {
    let newSelectedTags = [...selectedTags];

    if (selectedTags.includes(tag)) {
      newSelectedTags.splice(newSelectedTags.indexOf(tag), 1);
    } else {
      newSelectedTags.push(tag);
    }

    setSelectedTags(newSelectedTags);
  };

  useEffect(() => {
    if (selectedTags) {
      setSearchParams({ tags: selectedTags });
    }
  }, [selectedTags, setSearchParams]);

  return (
    <Box width="20%" height="99vh">
      <Stack dir="column">
        <Box height="28vh" >
          {/* Profile */}
          <Profile/>
        </Box>
        <Box height="60vh" >
          <Box
             my={3}
            // border="1px solid blue"
            bg={selectedTags.includes("All") ? "blue.600" : "blue.200"}
            fontWeight={"extrabold"}
            color={"whiteAlpha.900"}
            cursor={"pointer"}
            onClick={() => handleTagChange("All")}
          >
            <Flex padding={"1em 0.5em"}>
              <Text>All</Text>
              <Text marginLeft={"auto"}>{tasks.length}</Text>
            </Flex>
          </Box>
          <Box
            my={3}
            // border="1px solid white"
            bg={selectedTags.includes("Personal") ? "green.600" : "green.200"}
            fontWeight={"extrabold"}
            color={"whiteAlpha.900"}
            cursor={"pointer"}
            onClick={() => handleTagChange("Personal")}
          >
            <Flex padding={"1em 0.5em"}>
              <Text>Personal</Text>
              <Text marginLeft={"auto"}>{personalTasks.length}</Text>
            </Flex>
          </Box>
          <Box
            my={3}
            // border="1px solid white"
            bg={selectedTags.includes("official") ? "yellow.900" : "yellow.600"}
            fontWeight={"extrabold"}
            color={"whiteAlpha.900"}
            cursor={"pointer"}
            onClick={() => handleTagChange("official")}
          >
            <Flex padding={"1em 0.5em"}>
              <Text>Official</Text>
              <Text marginLeft={"auto"}>{officialTasks.length}</Text>
            </Flex>
          </Box>
          <Box
            my={3}
            // border="1px solid white"
            bg={selectedTags.includes("others") ? "blue.800" : "blue.200"}
            fontWeight={"extrabold"}
            color={"whiteAlpha.900"}
            cursor={"pointer"}
            onClick={() => handleTagChange("others")}
          >
            <Flex padding={"1em 0.5em"}>
              <Text>Others</Text>
              <Text marginLeft={"auto"}>{otherTasks.length}</Text>
            </Flex>
          </Box>
        </Box>

        <Button>{isAuth && "SignOut"}</Button>
      </Stack>
    </Box>
  );
};

export default Sidebar;

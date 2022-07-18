import React from 'react'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';

const Profile = () => {
  return (
    <Center py={0} my={1}>
        <Box
        border={"1px "}
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
        //   boxShadow={'lg'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'60px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-10}>
            <Avatar
              size={'lg'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
          <Box p={1}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                John Doe
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>
         </Box>
        </Box>
      </Center>
  )
}

export default Profile
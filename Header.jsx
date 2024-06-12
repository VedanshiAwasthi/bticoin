import {Button , HStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <HStack bg='black' shadow={'base'} color='white' p={'4'}>
        <Button variant={"unstyled"}> <Link to="/">Home</Link> </Button>
        <Button variant={"unstyled"}> <Link to="/exchanges">Exchanges</Link> </Button>
        <Button variant={"unstyled"}> <Link to="/coins">Coins</Link> </Button>
   

       
    </HStack>
  )
}

export default Header
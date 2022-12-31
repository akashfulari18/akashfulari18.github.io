import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import abtStyle from "../Styles/About.module.css"

function About() {
  return (
    <div className={abtStyle.abtMain}>
      <Box h={900}>

      About
      <div className={abtStyle.abtContainer}>

        <div className={abtStyle.abtcard}>
            <div className={abtStyle.abtRight}>

          
              <Text fontSize='3xl' fontWeight={700} color={"purple.500"}>Hello There...👋</Text>
              <br />
              I Am Akash Fulari.
              <br/>
              An Aspiring Full Stack Web Devloper
            </div>

        </div>
        <div className={abtStyle.abtcard}>
          <Box>
            
          </Box>
        </div>

      </div>
      </Box>
    </div>
  )
}

export default About
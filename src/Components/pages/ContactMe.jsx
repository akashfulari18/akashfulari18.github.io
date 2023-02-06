import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import gmail from "../../image/gmail.png";
import linkedIn from "../../image/linkedin.png";
import github from "../../image/github.png";
import phone from '../../image/phone.png';
import address from '../../image/address.png';

function ContactMe() {
  return (
    <Box id="contact" backgroundColor={"blackAlpha.800"} p="2rem">
      <Flex  borderBottom={"2px solid red"}
      w="90%" m="auto" justifyContent={"center"} fontSize={"2.5rem"} color={"white"} fontWeight="700">
        <Text>Contact </Text>
        <Text color="red" ml="0.5rem">Me</Text>
      </Flex >
{/* box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px; */}
      <Box  m="auto" mt="4rem" w={{base:"100%",sm:"90%",md:"50%",lg:"40%"}}>
        <Flex flexDirection={"column"}  gap="1rem" p={"1rem"}>

        <Flex id="contact-address" alignItems={"center"} >
          <Image src={address} w="2rem"></Image>
            <Text>
            <a href="">
                <Text color={"red.500"} fontWeight="500" pl={"1rem"}>
                  Ahemdnagar , Maharashtra.
                </Text>
              </a>
            </Text>
          </Flex>

          <Flex  id="contact-email"
 justifyContent={"left"} alignItems="center" >
            <Image display={"inline-block"} src={gmail} w="2rem"></Image>
            <Text>
              <a href="mailto:fulariakash007@gmail.com" target={"_blank"} rel="noreferrer">
              
                <Text color={"red.500"} fontWeight="500" pl={"1rem"}>fulariakash007@gmail.com</Text>
              </a>
            </Text>
          </Flex>
          <Flex id="contact-linkedin" alignItems={"center"}>
            <Image src={linkedIn} w="2rem">
           
            </Image>
            <Text>
              <a href="https://www.linkedin.com/in/akash-fulari-b57848190/" target={"_blank"} rel="noreferrer">
                <Text color={"red.500"} fontWeight="500" pl={"1rem"}>
                  Akash_Fulari_LinkedIn
                </Text>
              </a>
            </Text>
          </Flex>
          <Flex  id="contact-github" alignItems={"center"} >
            <Image src={github} w="2rem"></Image>
            <Text>
              <a href="https://github.com/akashfulari18" target={"_blank"} rel="noreferrer">
                <Text color={"red.500"} fontWeight="500" pl={"1rem"}>
                  Akash_Fulari_Github
                </Text>
              </a>
            </Text>
          </Flex>
          <Flex id="contact-phone" alignItems={"center"} >
          <Image src={phone} w="2rem"></Image>
            <Text>
            <a href="tel:7620152833" rel="noreferrer">
                <Text color={"red.500"} fontWeight="500" pl={"1rem"}>
                  +91 7620152833
                </Text>
              </a>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default ContactMe;

import { Box, Container, Heading, Button, Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { FcGoogle } from "react-icons/fc";

export const WelcomePage: React.FC = (): JSX.Element => {
  return (
    <Container
      minH="100vh"
      display="flex"
      justifyContent="center"
      flexDir="column"
      gap={9}
    >
      <Box display="flex" flexDir="column" gap={2} mt="-15vh">
        <Box display="flex" alignItems="center" gap={1}>
          <Image boxSize="30px" objectFit="cover" src="../../public/logo.svg" />
          <Heading as="h1" size="lg">
            ontask
          </Heading>
        </Box>

        <Typewriter
          options={{
            strings: ["Simplify your tasks, clarify your life's direction."],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>

      <Button
        leftIcon={<FcGoogle style={{ fontSize: "24px" }} />}
        aria-label="signup-button"
        variant="solid"
        w="fit-content"
      >
        Login with Google
      </Button>
    </Container>
  );
};

import { Button } from "@chakra-ui/button"

export const PrimaryButton = (props) => {
  const { title, width, margin, onClick } = props

  return (
    <Button
      w={width}
      m={margin}
      borderRadius="3xl"
      bg="primary.200"
      color="primary.50"
      fontWeight="normal"
      onClick={onClick}
      _hover={{ bg: "primary.400", transition: ".5s" }}
      _focus={{ focus: "none" }}
    >
      {title}
    </Button>
  )
}
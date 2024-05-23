import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, Button } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    price: "$699",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    price: "$999",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    price: "$199",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>Products</Link>
          <Link href="#" p={2}>Contact</Link>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" ml={4}>
            Cart
          </Button>
        </Flex>
      </Flex>

      <Box as="main" p={4}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">Welcome to ElectroShop</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {products.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold" mb={4}>{product.price}</Text>
                <Button colorScheme="teal" variant="solid">Add to Cart</Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" bg="blue.800" color="white" p={4} textAlign="center">
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;
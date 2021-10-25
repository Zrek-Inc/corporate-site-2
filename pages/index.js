import { Box, Image } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/layout'
import { PrimaryButton } from '../src/components/atoms/PrimaryButton'
import HomeServiceImage from '../src/static/home_service.png'
import HomeHeroMessage from '../src/static/hero_message.png'
import HeroBackgroundImage from '../src/static/home.jpeg'
import { BorderButton } from '../src/components/atoms/BorderButton'
// import { Header } from '../src/components/organisations/Header'

export default function Home() {
  return (
    <Box>
      {/* <Header /> */}
      <Box
        pos="relative"
        w="100%"
        h="100vh"
        bgImage={HeroBackgroundImage.src}
        bgSize="cover"
      >
        <Image
          src={HomeHeroMessage.src}
          pos="absolute"
          top="50%"
          left="5%"
          w="50%"
        />
      </Box>
      <Box as="main" w="100%">
        <Box as="section" w="60%" mx="auto" my={16} textAlign="center">
          <Box py={[8, 12]}>
            <Heading as="h1" size="xl">ゼットレックとは</Heading>
            <Heading as="h2" size="md" pt={4}>About us</Heading>
          </Box>
          <Box>
            <Text>ゼットレックは、デジタルテクノロジーを駆使して、持続可能な社会の実現を目指すスタートアップです。優しくて強い意志をもった人や企業と共に、良い未来を本気で創っていきたい。私たちはそんな純粋な想いを原動力に、活動しています。画期的なシステムを構築し、あらゆる人が人間らしく生きることができる世界を創っていきます。</Text>
          </Box>
          <PrimaryButton title="ビジョン" width="15%" margin="8" />
        </Box>
        <Box as="section" w="60%" mx="auto" my={16} textAlign="center">
          <Box py={[8, 12]}>
            <Heading as="h1" size="xl">サービス</Heading>
            <Heading as="h2" size="md" py={4}>Service</Heading>
          </Box>
          <Box display="flex">
            <Box textAlign="left" w="55%">
              <Heading as="h3" size="sm">流れを敏感に捉え、地球を支える</Heading>
              <Heading as="h3" size="sm" pt={4}>Everyday Action for the Earth.</Heading>
              <Text py={8}>後世まで綺麗な地球を残すため、勇気を振り絞って、それぞれが小さなアクションを起こすことが大切です。それが私たちの責任であり、良い未来を築くために必要不可欠なことです。ゼットレっくは、そんな勇気ある人々を支援するために全力を尽くして、共に世界を前進させていきます。</Text>
              <Box display="flex" w="100%" justifyContent="space-evenly">
                <PrimaryButton title='事業内容' width="35%" />
                <BorderButton title='もっと詳しく'　width="35%" />
              </Box>
            </Box>
            <Box w="45%">
              <Image src={HomeServiceImage.src} />
            </Box>
          </Box>
        </Box>
        <Box as="section" w="60%" mx="auto" my={16} textAlign="center">
          <Box py={[8, 12]}>
            <Heading as="h1" size="xl">ニュース</Heading>
            <Heading as="h2" size="md" py={4}>News</Heading>
            <PrimaryButton title='ニュース一覧' width="20%"  />
          </Box>
        </Box>
      </Box>
      {/* footerはここ */}
    </Box>
  )
}

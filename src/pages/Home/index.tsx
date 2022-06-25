import { Footer, Header } from "../../Components";
import bookIllustration from '../../assets/home/book_lover.svg';
import { Box, Stack, Typography } from "@mui/material";
import type { IBook } from "../../types";
import { BookSection } from "./BooksSection";
import staticBooks from '../../data/staticBooks.json';

// const staticCards: IBook[] = [

// ]

export function Home() {
  return (
    <>
      <Header />
      <Box
        component="section"
        sx={{
          bgcolor: '#f8f9fd',
          p: ['24px 12px', '48px 72px',],
          boxSizing: 'border-box',
        }}
      >
        <Stack spacing={{ xs: 4, md: 12 }} direction={{ xs: 'column-reverse', md: 'row' }}>
          <Stack spacing={2} textAlign={{ xs: 'center', sm: 'start' }}>
            <Typography variant="h3" component="h1" fontWeight="bold" >
              Mapeie, cronograme e visualize sua leitura.
            </Typography>
            <Typography variant="subtitle1" component="p">
              "A leitura é um exercício que enriquece, exercita o cérebro e colabora com discussões produtivas, nos tornando mais tolerantes as diferencias do mundo. A leitura oferece uma rica fonte de novos vocabulários, palavras e colocações que antes você não usava ou nem conhecia. Além disso possui um grande papel no senso crítico, pois ajuda a ter um olhar crítico sobre os acontecimentos e contribui para o desenvolvimento de uma postura questionadora."
            </Typography>
            <Typography variant="h6" component="h2">
              Escolha um livro, crie seu cronograma, e sinta o poder da leitura!
            </Typography>
          </Stack>
          <img style={{ height: '240px' }} src={bookIllustration} />
        </Stack>
      </Box>

      <BookSection title="Continuar lendo" bookList={staticBooks} />
      <BookSection title="Livros lidos" bookList={staticBooks} />
      <BookSection title="Minha Lista" bookList={staticBooks} />
      <BookSection title="Para Ler" bookList={staticBooks} />
      <BookSection title="Sugestões com base no histórico" bookList={staticBooks} />

      <Footer />
    </>
  )
}
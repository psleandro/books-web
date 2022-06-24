import { Box, Stack, Typography } from "@mui/material";
import { BookCard } from "../../../Components";
import type { IBook } from "../../../types";

interface IBookSectionProps {
  title: string;
  bookList: IBook[];
}

export function BookSection({ title, bookList }: IBookSectionProps) {
  return (
    <Box component="section" p={['18px 12px', '18px 72px',]}>
      <Typography variant="h6" component="h3" mb={1} >
        {title}
      </Typography>
      <Stack direction="row" p={1} spacing={2} sx={{
        overflowX: 'scroll',
        "&::-webkit-scrollbar": {
          height: '0.5em'
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "lightgrey",
          borderRadius: 4
        }
      }}>
        {bookList?.map(book => (
          <BookCard book={book} />
        ))}
      </Stack>
    </Box>
  )
}
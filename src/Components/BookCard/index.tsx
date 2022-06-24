import { Card, CardActionArea, CardContent, CardMedia, Box, Rating, Typography } from "@mui/material";
import type { IBook } from "../../types";

export function BookCard({ book }: { book: IBook }) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardActionArea
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          height: '100%'
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={book.image || "https://images-na.ssl-images-amazon.com/images/I/51IUA7+1WmL._SX347_BO1,204,203,200_.jpg"}
        />
        <CardContent sx={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box>
            <Typography fontWeight="bold" component="h3">
              {book.name}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary"
              sx={{
                display: '-webkit-box',
                overflow: "hidden",
                whiteSpace: 'normal',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3
              }}
            >
              {book.description}
            </Typography>
          </Box>
          <Rating size="small" name={`${book.name} classification`} value={book.classification} readOnly precision={0.1} />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
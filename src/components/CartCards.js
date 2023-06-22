import React, { useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import numeral from 'numeral';

export default function CartCards(props) {
  const item = { ...props.cart };
  const [qty, setQty] = useState(item.qty);

  const incrementQty = () => {
    props.changeQty(item.id, true);
  };

  const decrementQty = () => {
    if (item.qty > 1) {
      props.changeQty(item.id, false);
    }
  };

  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 320,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {item.title}
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}></Typography>
        <Chip variant="outlined" color="primary" size="sm" sx={{ pointerEvents: 'none' }}>
          {numeral(item.price * item.qty).format('0,0[.]00 $')}
        </Chip>

        <ButtonGroup aria-label="outlined button group">
          <Button onClick={decrementQty} disabled={item.qty < 2}>
            <RemoveIcon />
          </Button>
          <Button disabled>{item.qty}</Button>
          <Button onClick={incrementQty}>
            <AddIcon />
          </Button>
        </ButtonGroup>
        <Button
          variant="plain"
          size="sm"
          endDecorator={<ClearIcon fontSize="sm" />}
          onClick={() => props.removeProduct(item.id)}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}

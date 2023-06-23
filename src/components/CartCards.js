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
        width: '100%',
        height: '30dvh',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      {/* <AspectRatio > */}
      <div className="w-[30%] flex flex-col items-center justify-center">
        <img
          src={item.image}
          className="w-[100px] h-fit"
          //   src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          //   srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
          // sx={{ width: 90, height: 'auto' }}
        />
      </div>

      {/* </AspectRatio> */}
      <CardContent>
        <div className="h-[30dvh] flex flex-col items-center justify-around">
          <Typography
            level="h2"
            fontSize="xl"
            id="card-description"
            mb={0.5}
            sx={{ textAlign: 'center', height: 48, display: 'flex' }}
          >
            <span className="w-full text-lg grow">{item.title}</span>
          </Typography>
          {/* <Typography
            fontSize="sm"
            aria-describedby="card-description"
            mb={1}
          ></Typography> */}
          {/* <Chip
            variant="outlined"
            color="primary"
            size="sm"
            sx={{ pointerEvents: 'none' }}
          >
            {numeral(item.price * item.qty).format('0,0[.]00 $')}
          </Chip> */}
          <Typography variant="body2" color="text.secondary">
            <span className="text-xl font-bold text-black">
              {numeral(item.price * item.qty).format('$ 0,0[.]00')}
            </span>
          </Typography>
          <ButtonGroup variant="plain" aria-label="outlined button group">
            <Button color="success" onClick={decrementQty} disabled={item.qty < 2}>
              <RemoveIcon />
            </Button>
            <Button color="success" sx={{ cursor: 'default', pointerEvents: 'none' }}>
              {item.qty}
            </Button>
            <Button color="success" onClick={incrementQty}>
              <AddIcon />
            </Button>
          </ButtonGroup>
          <Button
            variant="plain"
            size="sm"
            color="danger"
            endDecorator={<ClearIcon fontSize="sm" />}
            onClick={() => props.removeProduct(item.id)}
          >
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

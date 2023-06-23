import React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Button from '@mui/joy/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import numeral from 'numeral';

export default function CartCards(props) {
  const item = { ...props.cart };

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
        height: '20dvh',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <div className="w-[30%] flex flex-col items-center justify-center">
        <img src={item.image} className="w-[80px] h-fit" loading="lazy" alt="" />
      </div>
      <CardContent>
        <div className="h-[20dvh] flex flex-col items-start justify-around">
          <Typography
            level="h2"
            fontSize="xl"
            id="card-description"
            mb={0.5}
            sx={{ textAlign: 'center', height: 48, display: 'flex' }}
          >
            <span className="w-full text-lg grow text-start">{item.title}</span>
          </Typography>
          <div className="w-full flex flex-row items-center justify-between">
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
            <Typography variant="body2" color="text.secondary">
              <span className="text-xl font-bold text-black">
                {numeral(item.price * item.qty).format('$ 0,0[.]00')}
              </span>
            </Typography>
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
        </div>
      </CardContent>
    </Card>
  );
}

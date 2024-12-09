import {useTranslation} from 'react-i18next';
import {formatRelative} from 'date-fns';

import {DeleteOutline} from '@mui/icons-material';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Stack,
  Button,
  CardHeader,
  Box,
  Divider,
} from '@mui/material';

import {AppButton} from '~/global/components/app-button';

import {ApiProduct} from '~/api-client/types';

type ProductCardProps = {item: ApiProduct; doDeleteItem: (item: ApiProduct) => void};

export const ProductCard = ({item, doDeleteItem}: ProductCardProps) => {
  const {t} = useTranslation(['products', 'common']);

  return (
    <Card sx={{minWidth: 275, marginBlock: 2}}>
      <CardHeader
        title={
          <Stack justifyContent="space-between" width="100%" spacing={2} direction="row">
            <Typography>{item.title.en || item.title.ar}</Typography>
            {item.isActive ? <Typography color="success">{t('common:active')}</Typography> : null}
          </Stack>
        }
        subheader={
          <Box>
            <Typography variant="caption" color="textDisabled">
              {item.sku || '---'} | {item.quantity || '---'}
            </Typography>
          </Box>
        }
      />
      <CardContent>
        <Stack justifyContent="space-between" width="100%" spacing={2} direction="row">
          <Box>{t('products:price')}</Box>
          <Box>${Number(item.price).toLocaleString() || '---'}</Box>
        </Stack>
        <Divider sx={{marginBlock: 1}} />
        <Stack justifyContent="space-between" width="100%" spacing={2} direction="row">
          <Typography variant="caption" color="textDisabled">
            {t('products:priceSale')}
          </Typography>
          <Typography variant="caption" color="textDisabled">
            {item?.priceSale ? '$' + Number(item.priceSale).toLocaleString() : '---'}
          </Typography>
        </Stack>
        <Divider sx={{marginBlock: 1}} />
        <Stack justifyContent="space-between" width="100%" spacing={2} direction="row">
          <Box>{t('common:createdAt')}</Box>
          <Box>{formatRelative(new Date(item.createdAt), new Date())}</Box>
        </Stack>
        <Divider sx={{marginBlock: 1}} />
        <Stack justifyContent="space-between" width="100%" spacing={2} direction="row">
          <Typography variant="caption" color="textDisabled">
            {t('common:updatedAt')}
          </Typography>
          <Typography variant="caption" color="textDisabled">
            {item.updatedAt && item.updatedAt !== item.createdAt
              ? formatRelative(new Date(item.updatedAt), new Date())
              : '---'}
          </Typography>
        </Stack>
        <Divider sx={{marginBlock: 1}} />
      </CardContent>
      <CardActions>
        <Stack spacing={1} direction="row-reverse">
          <AppButton to={`/products/${item.productId}`} variant="contained">
            {t('common:edit')}
          </AppButton>
          <Button variant="text" onClick={() => doDeleteItem(item)}>
            <DeleteOutline />
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

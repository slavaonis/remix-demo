import {useTranslation} from 'react-i18next';
import React from 'react';

import {Card, CardContent, Stack, TableCellProps, Typography} from '@mui/material';

import {AppButton} from '~/global/components/app-button';

//
//

export const ProductCardEmpty = ({
  actionURL,
  actionLabel,
}: {
  actionLabel?: React.ReactNode;
  actionURL: string;
} & TableCellProps) => {
  const {t} = useTranslation(['common']);

  return (
    <Card>
      <CardContent>
        <Stack p={3} alignItems="center" spacing={2}>
          <Typography variant="caption" fontSize="0.9rem">
            {t('common:noResults')}
          </Typography>

          {actionURL ? (
            <AppButton to={actionURL} variant="contained">
              {actionLabel || t('common:create')}
            </AppButton>
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
};

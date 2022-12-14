import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { SxProps } from '@mui/material';

interface IProps {
  icon: string;
  className?: string;
  sx?: SxProps;
}

export default function Iconify({ icon, sx, className, ...other }: IProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} className={className} {...other} />;
}

import { Box, styled } from "@mui/material";
import React from "react";
import AutoAdjustImage from "./AutoAdjustImage";

const StyledBrandCard = styled(Box)(({ theme }) => ({
  height: 120,
  width: 200,
  marginLeft: 10,
  marginRight: 10,
}));

interface BrandCardProps {
  imgUrl: string;
}

const BrandCard = ({imgUrl}:BrandCardProps) => {
  return (
    <StyledBrandCard>
      <AutoAdjustImage
        src={imgUrl}
        alt="brand-logo"
        className="max-w-2xl mx-auto"
      />
    </StyledBrandCard>
  );
};

export default BrandCard;

import { useEffect, useState } from "react";

interface GetCardSizePropsType {
  width: number;
  height: number;
  row: number;
  divSize: number;
  gap: number;
}

export const useGetCardSize = ({
  width,
  height,
  row,
  divSize,
  gap,
}: GetCardSizePropsType) => {
  const [cardWidth, setCardWidth] = useState<number>(width);
  const [cardHeight, setCardHeight] = useState<number>(height);

  useEffect(() => {
    const aspectRatio = cardWidth / cardHeight;
    const customWidth = divSize / row - (row - 1) * gap;
    const customHeight = customWidth / aspectRatio;
    setCardWidth(customWidth);
    setCardHeight(customHeight);
  }, [cardWidth, cardHeight, divSize, row]);

  return { width: cardWidth, height: cardHeight };
};

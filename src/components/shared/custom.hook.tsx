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
  const [cardWidth, setCardWidth] = useState<number>(0);
  const [cardHeight, setCardHeight] = useState<number>(0);

  useEffect(() => {
    const aspectRatio = width / height;
    const totalGapWidth = gap * (row - 1);
    const availableWidth = divSize - totalGapWidth;
    const baseWidth = Math.floor(availableWidth / row);
    const remainder = availableWidth % row;

    // Distribute the remainder equally among cards
    const customWidth = baseWidth + Math.floor(remainder / row);
    const customHeight = Math.floor(customWidth / aspectRatio);

    setCardWidth(customWidth);
    setCardHeight(customHeight);
  }, [width, height, divSize, row, gap]);

  return { width: cardWidth, height: cardHeight };
};

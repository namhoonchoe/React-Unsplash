import Masonry from "@mui/lab/Masonry";
import React from 'react';


type MasonryProps = {
  children: React.ReactNode;
};

const MasonryContainer:React.FC<MasonryProps> = ({children}) => {
  return (
    <Masonry
    columns={4}
    spacing={4}
    sx={{ width: "100%", maxWidth: "70.5rem" }}>
      <>{children}</>
    </Masonry>
  )
}

export default MasonryContainer
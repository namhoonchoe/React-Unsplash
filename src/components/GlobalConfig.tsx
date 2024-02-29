import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { SWRConfig } from "swr";

type ConfigProps = {
  children: React.ReactNode;
};

/**
 데이터 페칭 에러 처리를 위한 전역 설정 컴포넌트
 */

const GlobalConfig: React.FC<ConfigProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeHandler = () => {
    setIsOpen(false);
 
  };
 
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        onError: (error) => {
          setIsOpen(true);
        },
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
          // Never retry on 404.
          if (error.status === 404) return;
          if (error.status === 403) return;
          if (retryCount >= 5) return;

          // Retry after 5 seconds.
          setTimeout(() => revalidate({ retryCount }), 3000);
        },
      }}
    >
      {children}
      <Snackbar
        open={isOpen}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
      >
        <Alert
          severity="error"
          onClose={closeHandler}
          variant="filled"
          sx={{ width: "100%" }}
        >
          에러가 발생 했습니다.
        </Alert>
      </Snackbar>
    </SWRConfig>
  );
};

export default GlobalConfig;

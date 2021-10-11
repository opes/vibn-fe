import { useEffect, useState } from 'react';

export default function useRefreshToken({ match }) {
  const [refreshToken, setRefreshToken] = useState(match.params.refresh_token);

  useEffect(() => {
    if (refreshToken === undefined) {
      setRefreshToken(localStorage.getItem('savedToken', refreshToken));
    } else {
      localStorage.setItem('savedToken', refreshToken);
    }
  }, []);
}

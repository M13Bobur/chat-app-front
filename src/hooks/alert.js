import { notification } from "antd";
import { useCallback } from "react";

export const useShowAlert = () => {
  const success = useCallback((message, duration, place) => {
    notification.success({
      duration: duration,
      message: message,
      placement: place,
    });
  }, []);
  const error = useCallback((message, duration, place) => {
    notification.error({
      duration: duration,
      message: message,
      placement: place,
    });
  }, []);

  return { success, error };
};

import { useEffect, useState, useCallback } from "react";
import OrderService from "../api/Order-api";

const useOrder = (userId) => {
    const [loading, setLoading] = useState(!!userId);
    const [error, setError] = useState();
    const [order, setOrder] = useState();


  const refreshOrder = useCallback(
    (project) => {
      if (project) {
        setOrder(project);
        return project;
      }

      if (userId) {
        setLoading(true);
        return OrderService.getOrder(userId)
          .then(order => {
            setOrder(order.result);
            setError(undefined);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }
    },
    [userId],
  );

  useEffect(() => {
    refreshOrder();
  }, [userId, refreshOrder]);

  return { loading, error, order, refreshOrder };
};

export default useOrder;
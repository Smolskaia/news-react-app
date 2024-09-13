import { useState } from "react";

export const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);
// функция которая будет изменять фильтры, принимает ключ и значение
// возвращает объект где будут все поля, но поле которое мы передаем будет заменено
  const changeFilter = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
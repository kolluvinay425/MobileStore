// src/hooks/useHandleNavigation.js
import { useNavigate } from "react-router-dom";

const useHandleNavigation = () => {
  const navigate = useNavigate();

  const handleButtonClick = (brand, model) => {
    const formattedModel = model.replace(/\s+/g, "-").toLowerCase();
    const formattedBrand = brand.replace(/\s+/g, "-").toLowerCase();
    navigate(`/shop/${formattedBrand}/${formattedModel}`);
  };

  return handleButtonClick;
};

export default useHandleNavigation;
